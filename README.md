# POAP Subgraph

This Subgraph sources events from the POAP contract in different networks.

## Deploying the subgraph:

**First time only**
```ssh
yarn install
```

Available networks: ethereum, gnosis, chiado, goerli

**Goldsky deployment** 

First run:

```ssh
goldsky login
```

[Documentation](https://docs.goldsky.com/subgraphs/introduction)

**The Graph deployment**


This repo also works with The Graph. To deploy with The Graph please look at the [documentation](https://thegraph.com/docs/en/quick-start/)

**Deploy** 

```ssh
yarn prepare:<network>
yarn codegen
yarn build
yarn deploy:<network>
```

## Deployments

### Ethereum
Endpoint: [https://api.goldsky.com/api/public/project_cm19s0xqbabkt01x529py0iu8/subgraphs/poaps-ethereum/1.0.0/gn](https://api.goldsky.com/api/public/project_cm19s0xqbabkt01x529py0iu8/subgraphs/poaps-chiado/1.0.0/gn) \
Subgraph page: [https://api.goldsky.com/api/public/project_cm19s0xqbabkt01x529py0iu8/subgraphs/poaps-ethereum/1.0.0/gn](https://api.goldsky.com/api/public/project_cm19s0xqbabkt01x529py0iu8/subgraphs/poaps-ethereum/1.0.0/gn) 


### Gnosis
Endpoint: [https://api.goldsky.com/api/public/project_cm19s0xqbabkt01x529py0iu8/subgraphs/poaps-gnosis/1.0.0/gn](https://api.goldsky.com/api/public/project_cm19s0xqbabkt01x529py0iu8/subgraphs/poaps-chiado/1.0.0/gn) \
Subgraph page: [https://api.goldsky.com/api/public/project_cm19s0xqbabkt01x529py0iu8/subgraphs/poaps-gnosis/1.0.0/gn](https://api.goldsky.com/api/public/project_cm19s0xqbabkt01x529py0iu8/subgraphs/poaps-chiado/1.0.0/gn) 


### Chiado
Endpoint: [https://api.goldsky.com/api/public/project_clcquosqr8v0k0iwk5rs87x2l/subgraphs/poaps-chiado/1.0.0/gn](https://api.goldsky.com/api/public/project_clcquosqr8v0k0iwk5rs87x2l/subgraphs/poaps-chiado/1.0.0/gn) \
Subgraph page: [https://api.goldsky.com/api/public/project_clcquosqr8v0k0iwk5rs87x2l/subgraphs/poaps-chiado/1.0.0/gn](https://api.goldsky.com/api/public/project_clcquosqr8v0k0iwk5rs87x2l/subgraphs/poaps-chiado/1.0.0/gn) 

### Sepolia
Endpoint: [https://api.goldsky.com/api/public/project_clcquosqr8v0k0iwk5rs87x2l/subgraphs/poaps-sepolia/1.0.0/gn](https://api.goldsky.com/api/public/project_clcquosqr8v0k0iwk5rs87x2l/subgraphs/poaps-sepolia/1.0.0/gn) \
Subgraph page: [https://api.goldsky.com/api/public/project_clcquosqr8v0k0iwk5rs87x2l/subgraphs/poaps-sepolia/1.0.0/gn](https://api.goldsky.com/api/public/project_clcquosqr8v0k0iwk5rs87x2l/subgraphs/poaps-sepolia/1.0.0/gn) 
