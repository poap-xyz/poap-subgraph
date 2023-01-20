# POAP Subgraph

This Subgraph sources events from the POAP contract in different networks.

## Deploying the subgraph:

**First time only**
```ssh
yarn install
```

Available networks: mainnet, xdai, sokol, kovan, ropsten 

Add 
```
--product hosted-service --access-token {TOKEN} 
```
as extra parameters just after "graph deploy" in the package json and then execute the following:

```ssh
yarn prepare:<network>
yarn codegen
yarn build
yarn deploy:<network>
```

**Good practices**
A good practice to deploy in mainnet or xdai is to have a duplicate/backup subgraph so that if something goes wrong, the traffic can be redirected to the duplicate subgraph instead of having to wait for the subgraph to re-deploy/rollback to a previous version. In Xdai/Gnosis it can take at least 2 days to sync.

To build a duplicate, you need to create a new subgraph through the-graph profile. Once the new path is provided you can use the next curl to deploy a duplicate WITHOUT NEEDING to resync all over again just by copying the ID of the subgraph you are trying to duplicate.

```ssh
curl -H "content-type: application/json" -H "authorization: Bearer {TOKEN}" --data '{"jsonrpc": "2.0", "method": "subgraph_deploy", "params": { "name": "poap-xyz/{duplicate_subgraph_path}", "ipfs_hash": "{ID_HASH_FOUND_IN_THE_ORIGINAL_SUBGRAPH}"}, "id": "1"}' https://api.thegraph.com/deploy/
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

### Goerli
Endpoint: [https://api.thegraph.com/subgraphs/name/poap-xyz/poap-goerli](https://api.thegraph.com/subgraphs/name/poap-xyz/poap-goerli) \
Subgraph page: [https://thegraph.com/hosted-service/subgraph/poap-xyz/poap-goerli](https://thegraph.com/hosted-service/subgraph/poap-xyz/poap-goerli)

## Notes

### Sokol
Previously none of the params of EventToken was indexed, due to a change in the ABI, newer events now have one of the params indexed and this may cause some issues with the-graph having to deal with malformed or missing entities for older tokens.