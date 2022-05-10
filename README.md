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
Previously none of the params of EventToken was indexed, due to a change in the ABI, newer events now have one of the params indexed and this may cause some issues with the-graph having to deal with malformed or missing entities for older tokens.