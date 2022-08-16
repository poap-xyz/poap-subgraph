# POAP Subgraph

This Subgraph sources events from the POAP contract in different networks.

## Deploying the Subgraph:

**First time only**:
```sh
yarn install
```

The currently available networks for deploying the POAP Subgraph are:
* mainnet
* xdai
* sokol
* kovan
* ropsten 

Before deploying, you will need to add:
```
--product hosted-service --access-token {TOKEN} 
```
as extra parameters just after the [`graph deploy`](https://github.com/poap-xyz/poap-subgraph/blob/master/package.json#L14-L18)
command for the network you intend to deploy to in [`package.json`](https://github.com/poap-xyz/poap-subgraph/blob/master/package.json).
Then execute the following:
```sh
yarn prepare:<network>
yarn codegen
yarn build
yarn deploy:<network>
```

### Best practices
When deploying to mainnet or xdai, it's best to have a duplicate/backup subgraph so that if something goes wrong, the traffic can be redirected to the duplicate subgraph instead of having to wait for the subgraph to re-deploy/rollback to a previous version. On xdai/Gnosis it can take at least 2 days to sync!

### Duplicating the Subgraph

To build a duplicate, you first need to create a new subgraph through your profile on the [The Graph explorer](https://thegraph.com/explorer/).
Once you receive the path for the newly created subgraph, you can use `curl` to deploy a duplicate *WITHOUT NEEDING* to resync all over again.
To do this you simply need to specify the IPFS Hash ID of the Subgraph you are trying to duplicate from in your deployment command:
```sh
curl -H "content-type: application/json" \
     -H "authorization: Bearer {TOKEN}" \
     --data '{"jsonrpc": "2.0", "method": "subgraph_deploy", "params": { "name": "{NEW_SUBGRAPH_PATH}", "ipfs_hash": "{ORIGINAL_SUBGRAPH_IPFS_HASH_ID}"}, "id": "1"}' \
     https://api.thegraph.com/deploy/
```

## Deployments

### Mainnet
Endpoint: [https://api.thegraph.com/subgraphs/name/poap-xyz/poap](https://api.thegraph.com/subgraphs/name/poap-xyz/poap) \
Subgraph page: [https://thegraph.com/explorer/subgraph/poap-xyz/poap](https://thegraph.com/explorer/subgraph/poap-xyz/poap)

### XDai
Endpoint: [https://api.thegraph.com/subgraphs/name/poap-xyz/poap-xdai](https://api.thegraph.com/subgraphs/name/poap-xyz/poap-xdai) \
Subgraph page: [https://thegraph.com/explorer/subgraph/poap-xyz/poap-xdai](https://thegraph.com/explorer/subgraph/poap-xyz/poap-xdai)


### Sokol
Endpoint: [https://api.thegraph.com/subgraphs/name/poap-xyz/poap-sokol](https://api.thegraph.com/subgraphs/name/poap-xyz/poap-sokol) \
Subgraph page: [https://thegraph.com/explorer/subgraph/poap-xyz/poap-sokol](https://thegraph.com/explorer/subgraph/poap-xyz/poap-sokol) 

### Ropsten
Endpoint: [https://api.thegraph.com/subgraphs/name/poap-xyz/poap-ropsten](https://api.thegraph.com/subgraphs/name/poap-xyz/poap-ropsten) \
Subgraph page: [https://thegraph.com/explorer/subgraph/poap-xyz/poap-ropsten](https://thegraph.com/explorer/subgraph/poap-xyz/poap-ropsten) 

### Kovan
Endpoint: [https://api.thegraph.com/subgraphs/name/poap-xyz/poap-kovan](https://api.thegraph.com/subgraphs/name/poap-xyz/poap-kovan) \
Subgraph page: [https://thegraph.com/explorer/subgraph/poap-xyz/poap-kovan](https://thegraph.com/explorer/subgraph/poap-xyz/poap-kovan) 

## Notes

### Sokol
Previously none of the params of `EventToken` were indexed due to a change in the ABI. Newer events now have one of the params indexed and this may cause some issues with The Graph having to deal with malformed or missing entities for older tokens.
