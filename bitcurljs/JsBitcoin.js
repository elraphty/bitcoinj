/** Base classs */
class JSBitcoin {
    constructor(user, pass) {
      this.user = user;
      this.pass = pass;
      this.url  =  `http://${user}:${pass}@127.0.0.1:18443/`;
    }
}

module.exports = JSBitcoin;