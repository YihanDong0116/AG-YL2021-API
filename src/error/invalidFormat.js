class InvalidFormat extends Error {
  constructor(msg) {
    super(msg);
    this.msg = msg;
  }
}

module.exports = { InvalidFormat };
