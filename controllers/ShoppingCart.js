'use strict';

module.exports = class ShoppingCart {
  constructor(customer) {
    this._customer = customer;
    this._id = Math.round(Math.random(1, 9999) * 10000);
    this._items = [];
  }

  addItem(item) {
    if (typeof item === 'undefined' || item == null) {
      throw new Error('can\'t add empty Book')
    }
    this._items.push(item);
  }

  removeItem(isbn) {
    let index = this._items.find(item => item.isbn === isbn);
    if (typeof index == 'undefined' || index < 0) {
      throw new Error('can\'t find book to remove')
    }
    this._items.splice(index, 1);
  }

  getReceipt() {
    console.log('Purchasing items...')
    let total = this.calculateTotal();
    if (!this._id || typeof this._id === 'undefined') {
      throw new Error('can\'t find cart ID');
    }
    console.log(`Purchased $${total} of books.\nTransaction Id: ${this._id}`)
    this._items = [];
  }

  calculateTotal() {
    if (this.getNumberOfItems() === 0) {
      return 0;
    }
    return this._items.reduce((value, item) => {
      return value + item._price;
    }, 0)
  }

  getNumberOfItems() {
    return this._items.length;
  }
}

