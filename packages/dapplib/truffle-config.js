require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi forget tell tissue remember machine uniform gesture perfect fresh trip'; 
let testAccounts = [
"0x8480ea2630e30e1f309146b0c4e98b7b7493a3033572facedcd2808687516251",
"0xedfdc86d79a49b1325278ffa0ac1c8319b27e2e07b038a3a14938e48950f50e8",
"0x7ec05449e9e86cf9dc128a4b72982957a07423633bcef30d41ed7cd73c421763",
"0x471c8fd75ce9dc66b6b2af9f21b66b517937dd18d07db9f3020b40acb7f60235",
"0xe04de50c957c7f6a85f8d2868f0ebe8e9ba9e0b0bbd16e5c7ee4e649647fa79c",
"0x2744b1a4801e6cb0364d2a37f7a427da1da10ee415b50e25906cc68d2ed7dcab",
"0x75b2357869412112a272b2d4178eb2eebef62a8a9a16c8226cca2bc4abf43a68",
"0x8175ef5a0f39a588d766f6cae12cad25314f69c5d6f6a5e47685d4f7d951e07a",
"0x7186a0b4c50834cee043efbde54bdd9b48e0ff7c6de4bb36f93eaf5db1bc53b1",
"0xae2a0b1b30075136b7126d32875d94ae4c214cfa909e2f8dda14a7a7e2cdd8fa"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
