class NotFound extends Error {
  constructor(type, id) {
    super(`${type} with id ${id} not found`);
    this.type = type;
    this.id = id;
  }
}

module.exports = { NotFound };
