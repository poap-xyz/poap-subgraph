# POAP Subgraph

This Subgraph sources events from the POAP contract in different networks.

## Deploying the subgraph:

**First time only**
```ssh
yarn install
```

Add the descriptions in /config/* removing the .template

For example:

`ethereum.template.json`

```
{
  "network": "mainnet",
  "address": "0x22C1f6050E56d2876009903609a2cC3fEf83B415",
  "startBlock": 7844214,
  "file": "Poap",
  "tokenEvent": "EventToken(uint256,uint256)",
  "description": "<ADD ME>"
}
```
Copy and change the descrpition to

`ethereum.json`

```
{
  "network": "mainnet",
  "address": "0x22C1f6050E56d2876009903609a2cC3fEf83B415",
  "startBlock": 7844214,
  "file": "Poap",
  "tokenEvent": "EventToken(uint256,uint256)",
  "description": "My Test POAP Subgraph on Mainnet"
}
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
