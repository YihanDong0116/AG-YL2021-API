class Forbidden extends Error {
  constructor(msg) {
    super(msg);
    this.msg = msg;
  }
}

module.exports = { Forbidden };
