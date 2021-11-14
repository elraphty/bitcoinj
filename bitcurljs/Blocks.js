/**
 * A class for all blocks rpc functions
 */

const { default: axios } = require('axios');
const JSBitcoin = require('./JsBitcoin');
const { headers } = require('../config/datafile');

class Blocks extends JSBitcoin {
  getBlockchainInfo() {
    const body = {
      jsonrpc: '1.0',
      id: 'curltext',
      method: 'getblockchaininfo',
      params: [],
    };

    return axios.post(this.url, body, { headers });
  }

  getBlockHash(block) {
    const body = {
      jsonrpc: '1.0',
      id: 'curltext',
      method: 'getblockhash',
      params: [block],
    };

    return axios.post(this.url, body, { headers });
  }

  getBlock(blockHash) {
    const body = {
      jsonrpc: '1.0',
      id: 'curltext',
      method: 'getblock',
      params: [blockHash],
    };

    return axios.post(this.url, body, { headers });
  }

  listUnspent() {
    const body = {
      jsonrpc: '1.0',
      id: 'curltext',
      method: 'listunspent',
      params: [],
    };

    return axios.post(this.url, body, { headers });
  }
}

module.exports = Blocks;
