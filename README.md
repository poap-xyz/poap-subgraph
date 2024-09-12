# POAP Subgraph

This Subgraph sources events from the POAP contract in different networks.

## Deploying the subgraph:

**First time only**
```ssh
yarn install
```

Available networks: mainnet, xdai, chiado, goerli

**Chiado deployment**

Chiado is not index by The Graph so we use Goldsky

First run:

```ssh
goldsky login
```

If you already have an existing Chiado subgraph you will have to delete it to deploy the new one

**Deploy** 

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

### Gnosis
Endpoint: [https://api.thegraph.com/subgraphs/name/poap-xyz/poap-xdai](https://api.thegraph.com/subgraphs/name/poap-xyz/poap-xdai) \
Subgraph page: [https://thegraph.com/explorer/subgraph/poap-xyz/poap-xdai](https://thegraph.com/explorer/subgraph/poap-xyz/poap-xdai)


### Chiado
Endpoint: [https://api.goldsky.com/api/public/project_clcquosqr8v0k0iwk5rs87x2l/subgraphs/poap-xyz/poap-chiado/gn](https://api.goldsky.com/api/public/project_clcquosqr8v0k0iwk5rs87x2l/subgraphs/poap-xyz/poap-chiado/gn) \
Subgraph page: [https://api.goldsky.com/api/public/project_clcquosqr8v0k0iwk5rs87x2l/subgraphs/poap-xyz/poap-chiado/gn](https://api.goldsky.com/api/public/project_clcquosqr8v0k0iwk5rs87x2l/subgraphs/poap-xyz/poap-chiado/gn) 

### Sepolia
Endpoint: [https://api.goldsky.com/api/public/project_clcquosqr8v0k0iwk5rs87x2l/subgraphs/poap-sepolia/1.0.0/gn](https://api.goldsky.com/api/public/project_clcquosqr8v0k0iwk5rs87x2l/subgraphs/poap-sepolia/1.0.0/gn) \
Subgraph page: [https://api.goldsky.com/api/public/project_clcquosqr8v0k0iwk5rs87x2l/subgraphs/poap-sepolia/1.0.0/gn](https://api.goldsky.com/api/public/project_clcquosqr8v0k0iwk5rs87x2l/subgraphs/poap-sepolia/1.0.0/gn) 
