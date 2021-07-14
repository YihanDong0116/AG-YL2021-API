class NotImplemented extends Error {
  constructor(msg) {
    super(msg);
    this.msg = msg;
  }
}

module.exports = { NotImplemented };
