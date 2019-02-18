module.exports = class Book {
  constructor(title, author) {
    this._title = title;
    this._author = author;
    this._isbn = Math.round(Math.random(1, 9999) * 10000);
    this._price = 0;
  }

  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  get isbn() {
    return this._isbn;
  }

  get price() {
    return this._price
  }

  set price(amt) {
    this._price = amt;
  }
};