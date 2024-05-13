# dmail

## Project structure

-   `contracts` - source code of all the smart contracts of the project and their dependencies.
-   `wrappers` - wrapper classes (implementing `Contract` from ton-core) for the contracts, including any [de]serialization primitives and compilation functions.
-   `tests` - tests for the contracts.
-   `scripts` - scripts used by the project, mainly the deployment scripts.

## How to use

### Build

`npx blueprint build` or `yarn blueprint build`

### Test

`npx blueprint test` or `yarn blueprint test`

### Deploy or run another script

`npx blueprint run` or `yarn blueprint run`

### Add a new contract

`npx blueprint create ContractName` or `yarn blueprint create ContractName`

# 具体请调用scripts/deployDmailMail.ts 的代码

Sending transaction. Approve in your wallet...[TON_CONNECT_SDK] Send http-bridge request: {
  method: 'sendTransaction',
  params: [
    '{"messages":[{"address":"EQCnMYr60vXcUAhM0JslhE28jGYXpT91mAjhhM_I6tTed2QW","amount":"50000000","payload":"te6cckEBAwEAGgACCNNd0L0BAgAQYWFhdnZ2Y2MADDIyMmFhYf+KJSs="}],"valid_until":1715414997393,"from":"0:c715d06d9dda2293a50de936e49c1ca05fa72c4c71b57da0ffabe63f2d14a8de","network":"-239"}'
  ],
  id: '20'
}
[TON_CONNECT_SDK] Wallet message received: {
  result: 'te6cckEBBAEAwgAB4YgBjiug2zu0RSdKG9JtyTg5QL9OWJjjavtB/1fMflopUbwE3zwhMc/5VJ6raxc1s4jhAq7hSJN2eYDZ5XbijEAJdRf9uFgQX83EazkQaVIpUDgi8E/byn4vZUOyKqpeyBgASU1NGLsx+T9wAAAAmAAcAQJwYgBTmMV9aXruKAQmaE2SwibeRjML0p+6zARwwmfkdWpvO6AX14QAAAAAAAAAAAAAAAAAANNd0L0DAgAMMjIyYWFhABBhYWF2dnZjY5Y945o=',
  id: '20'
}
