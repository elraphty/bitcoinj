/**
 * A class for all transactions rpc functions
 */

const { default: axios } = require('axios');
const JSBitcoin = require('./JsBitcoin');
const { headers } = require('../config/datafile');

class Transactions extends JSBitcoin {
  getTransaction(transactionId) {
    const body = {
      jsonrpc: '1.0',
      id: 'curltext',
      method: 'gettransaction',
      params: [transactionId],
    };

    return axios.post(this.url, body, { headers });
  }

  decodeRawTransaction(transactionHex) {
    const body = {
      jsonrpc: '1.0',
      id: 'curltext',
      method: 'decoderawtransaction',
      params: [transactionHex],
    };

    return axios.post(this.url, body, { headers });
  }
}

module.exports = Transactions;
