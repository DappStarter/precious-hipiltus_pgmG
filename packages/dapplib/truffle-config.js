require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty flee spot warrior ridge remember artwork idea enter brown tuna'; 
let testAccounts = [
"0x63a3465dec3db008e026e02ab4989f667b4d505debb1e2fd07bb38d6386dcffd",
"0x08a630f8da6d090d1f771e0f77bedeb3b63a803e15c28d3643b0fed7f3a7dab4",
"0x99e3eb0f790d855dd82fdd538bc833845b5486266d4eb1ed10929e719dce76c5",
"0xca62ae77c74c2d56a7df728a88f76b487b89c56ccea3515e0579659574926de6",
"0x4efd0f5e03444310fc1e512e38a66c328371ca70859dba559f1a6fc33b5a26a3",
"0x3a06637f00d36c016f25a07cebff5124011c500e04624984778aa4e43f503e3a",
"0x036716e016c4eb536fcc0dc9ba2b528bef0d7d19cca92287551135892e6e7ece",
"0x939d3dcf24c4c1ec4e211ddcfb36fa87ee1d520782b0e14c34d69495282c9bf9",
"0x5d9cfcd24cb5a3ef2906391dd1b80d2c146c093c4291e133eaa0263492492a7a",
"0x8a0f7e96e0746770b2ae4c24ceb46118bf3322040efce78a6cfa93be865b5a24"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

