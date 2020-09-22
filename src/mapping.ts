import {
	ethereum, BigInt
} from '@graphprotocol/graph-ts'

import {
	EventToken as EventTokenEvent,
	Transfer   as TransferEvent,
} from '../generated/POAP/POAP'

import {
	Token,
	Account,
  Event,
  Transfer,
} from '../generated/schema'

function createEventID(event: ethereum.Event): string
{
	return event.block.number.toString().concat('-').concat(event.logIndex.toString());
}

export function handleEventToken(ev: EventTokenEvent): void
{
  let event = Event.load(ev.params.eventId.toString());
  let token = new Token(ev.params.tokenId.toString());
  
  if (event == null) {
    event = new Event(ev.params.eventId.toString());
    event.token_count = BigInt.fromI32(0);
  }

	event.token_count   = event.token_count.plus(BigInt.fromI32(1));
	token.event         = event.id;
	event.save();
	token.save();
}

export function handleTransfer(ev: TransferEvent): void {
  let token    = Token.load(ev.params.tokenId.toString());
  let from     = Account.load(ev.params.from.toHex());
  let to       = Account.load(ev.params.to.toHex());
  let transfer = new Transfer(createEventID(ev));
  
  if (token == null) {
    token = new Token(ev.params.tokenId.toString());
  }

  if (from == null) {
    from = new Account(ev.params.from.toHex());
  }

  if (to == null) {
    to = new Account(ev.params.to.toHex());
  }

	token.owner          = to.id;

	transfer.token       = token.id;
	transfer.from        = from.id;
	transfer.to          = to.id;
	transfer.transaction = ev.transaction.hash;
	transfer.timestamp   = ev.block.timestamp;

	token.save();
	from.save();
	to.save();
	transfer.save();
}
