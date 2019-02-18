'use strict';

module.exports = class ShoppingCart {
  constructor(customer) {
    this._customer = customer;
    this._id = Math.round(Math.random(1, 9999) * 10000);
    this._items = [];
  }

  addItem(item) {
    if (typeof item === 'undefined' || item == null) {
      throw new error('Couldn\'t Add Book');
    }
    this._items.push(item);
  }

  removeItem(isbn) {
    let index = this._items.find(item => item.isbn === isbn);
    this._items.splice(index, 1);
  }

  getReceipt() {
    console.log('Purchasing items...')
    let total = this.calculateTotal();
    console.log(`Purchased $${total} of books.\nTransaction Id: ${this._id}`)
    this._items = [];
  }

  calculateTotal() {
    return this._items.reduce((value, item) => {
      return value + item._price;
    }, 0)
  }

  get ItemCount() {
    return this._items.length;
  }
}

