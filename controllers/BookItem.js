module.exports = class Book {
  constructor(args) {
    this._id = args.id;
    this.title = args.title;
    this.author = args.author;
    this.isbn = Math.round(Math.random(1, 9999) * 10000);
    this.price = args.price || 0;
  }
};