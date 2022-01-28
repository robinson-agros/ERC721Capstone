# Udacity Blockchain Capstone

Capstone Project


Contract 'SquareVerifier'
--------------------------
> contract address:    0x8F8e9fAFB101a75916BD7a78E9cc807A4Ec7CA0C

Contract 'SolnSquareVerifier'
------------------------------
> contract address:    0x10F3c26cf517C296C99f3E80cfF2712ee66B6121


Tokens Listed Originally for Purchase. Address: 0xc3d38aA0898bCD900Ad5E317abcec679C4A8340b
------------------------------------------
https://testnets.opensea.io/assets/0xf6469878fd1aa5726d897bdc4907ba800ad009c7/17

https://testnets.opensea.io/assets/0xf6469878fd1aa5726d897bdc4907ba800ad009c7/12

https://testnets.opensea.io/assets/0xf6469878fd1aa5726d897bdc4907ba800ad009c7/11

https://testnets.opensea.io/assets/0xf6469878fd1aa5726d897bdc4907ba800ad009c7/10

https://testnets.opensea.io/assets/0xf6469878fd1aa5726d897bdc4907ba800ad009c7/9


Tokens Buyed by Buyer 01. Address: 0xf8F9B4a6aF2F8e19880A524EdC0de83e74394d94
------------------------------------------
https://testnets.opensea.io/assets/0xf6469878fd1aa5726d897bdc4907ba800ad009c7/17/

https://testnets.opensea.io/assets/0xf6469878fd1aa5726d897bdc4907ba800ad009c7/12/

https://testnets.opensea.io/assets/0xf6469878fd1aa5726d897bdc4907ba800ad009c7/11/


Tokens Buyed by Buyer 02. Address: 0x40903EEB5f6B3194E6228700C92A2b9558b6E55E
------------------------------------------
https://testnets.opensea.io/assets/0xf6469878fd1aa5726d897bdc4907ba800ad009c7/10/

https://testnets.opensea.io/assets/0xf6469878fd1aa5726d897bdc4907ba800ad009c7/9/


Buying Transactions Hash.
------------------------------------------
https://rinkeby.etherscan.io/tx/0x316be16c739b082121363788c423a4340bfe36b646463916534363d7827243fd

https://rinkeby.etherscan.io/tx/0x9445eb25c2bda33b9442b7fbe379d90356477c1649a7b4397da8b5cc1a3031f1

https://rinkeby.etherscan.io/tx/0xa1fe4ed853a7956f3e21c09608f8e233c9ad25723253e9c3ab85de56c685bbdc

https://rinkeby.etherscan.io/tx/0x54956999144e50ed27652095df55106691569d400dd12f26eaf391d8a5393602

https://rinkeby.etherscan.io/tx/0xa5c08cc880a4d19c738a94ee72de6f151864ae14302d41cfc55097124cc54767


## Install

To install, download or clone the repo, then:

`npm install`

1. Start Ganache like below .

`ganache-cli -a 20 -l 9999999 -m "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat"` 

2. In a separate terminal window, Compile smart contracts:

    `truffle compile`

    This will create the smart contract artifacts in folder build\contracts.

3. Then compile and deploy with truffle.

`truffle migrate --network development --reset --compile-all`

## Testing
  To run truffle tests from inside the directory eth-contracts/:

`truffle test`

## Minting a Token
Inside client directory

npm run start

To view dapp

`http://localhost:3000`

to register your property, fill property id and click register:
![AppFrontPage](images/image.png)

## Contract ABI.
Check contract-abis folder. ABIs contains address for local network previously deployed and for Rinkeby Network (Netword ID: 4)

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)