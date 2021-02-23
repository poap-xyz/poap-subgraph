import {
	ethereum, BigInt
} from '@graphprotocol/graph-ts'

import {
	EventToken as EventTokenEvent,
	Transfer   as TransferEvent,
} from '../generated/Poap/Poap'

import {
	Token,
	Account,
  Event,
  Transfer,
} from '../generated/schema'

const BURN_ADDRESS = '0x0000000000000000000000000000000000000000'


function createEventID(event: ethereum.Event): string
{
	return event.block.number.toString().concat('-').concat(event.logIndex.toString());
}

export function handleEventToken(ev: EventTokenEvent): void
{
  let event = Event.load(ev.params.eventId.toString());
  let token = new Token(ev.params.tokenId.toString());
  
  if (event == null) {
    event             = new Event(ev.params.eventId.toString());
    event.tokenCount  = BigInt.fromI32(0);
    event.created     = ev.block.timestamp
  }

	event.tokenCount    += BigInt.fromI32(1);
	token.event         = event.id;
  token.created       = ev.block.timestamp
	event.save();
	token.save();
}

export function handleTransfer(ev: TransferEvent): void {
  let token    = Token.load(ev.params.tokenId.toString());
  let from     = Account.load(ev.params.from.toHex());
  let to       = Account.load(ev.params.to.toHex());
  let transfer = new Transfer(createEventID(ev));

  if (from == null) {
    from              = new Account(ev.params.from.toHex());
    // The from account at least has to own one token
    from.tokensOwned  = BigInt.fromI32(1);
  }
  from.tokensOwned -= BigInt.fromI32(1);
  from.save();

  if (to == null) {
    to              = new Account(ev.params.to.toHex());
    to.tokensOwned  = BigInt.fromI32(0);
  }
  to.tokensOwned += BigInt.fromI32(1);
  to.save();

  if (token == null) {
    token               = new Token(ev.params.tokenId.toString());
    token.transferCount = BigInt.fromI32(1);
    token.created       = ev.block.timestamp
  }
  token.owner = to.id;
  token.save();

  if(to.id == BURN_ADDRESS) {
    let event = Event.load(token.event);
    if (event !== null) {
      event.tokenCount -= BigInt.fromI32(1);
      event.save();
    }
  }

  transfer.token       = token.id;
	transfer.from        = from.id;
	transfer.to          = to.id;
	transfer.transaction = ev.transaction.hash;
	transfer.timestamp   = ev.block.timestamp;
	transfer.save();
}
