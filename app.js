const CurlBlocks = require('./bitcurljs/Blocks');
const CurlTransactions = require('./bitcurljs/Transactions');

const dotenv = require('dotenv');
dotenv.config();

const USER = process.env.RPC_USER;
const PASS = process.env.RPC_PASS;

const curlblocks = new CurlBlocks(USER, PASS);
const curltransactions = new CurlTransactions(USER, PASS);

// curljs.getBlockchainInfo().then(res => console.log(res.data.result));
// curlblocks.getBlockHash(250).then(res => console.log(res.data.result));
// curlblocks.getBlock('4d93f5c67b8ada439e50bb6bce3eba5c5c36fdb0951925078f99df82fbd15abc').then(res => console.log(res.data.result));
// curlblocks.listUnspent().then(res => console.log(res.data.result));

// curltransactions.getTransaction('b9756defa71fd84b42a6629886804007976843508955f3de1be4c04f2028886e').then(res => console.log(res.data.result));

// curltransactions.decodeRawTransaction('020000000001010000000000000000000000000000000000000000000000000000000000000000ffffffff0502fa000101ffffffff0200f9029500000000160014844a0eaaf980a57a99886905eb2a6e42b25fcfff0000000000000000266a24aa21a9ede2f61c3f71d1defd3fa999dfa36953755c690689799962b48bebd836974e8cf90120000000000000000000000000000000000000000000000000000000000000000000000000').then(res => console.log(res.data.result));