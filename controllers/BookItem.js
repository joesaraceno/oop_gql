module.exports = class Book {
  constructor(args) {
    this._id = args.id;
    this._title = args.title;
    this._author = args.author;
    this._isbn = Math.round(Math.random(1, 9999) * 10000);
    this._price = args.price || 0;
  }

  // get title() {
  //   return this._title;
  // }

  // get author() {
  //   return this._author;
  // }

  // get isbn() {
  //   return this._isbn;
  // }

  // get price() {
  //   return this._price
  // }

  set price(amt) {
    this._price = amt;
  }
};