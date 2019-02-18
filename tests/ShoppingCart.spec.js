import test from 'ava'
import ShoppingCart from '../controllers/ShoppingCart';

test('should throw when doing bad stuff', t => {
  const cart = new ShoppingCart(); // the test cart
  t.throws(() => {
    cart.addItem(undefined); // add an empty book
  })
  t.throws(() => {
    cart.removeItem({isbn: -1});
  })
})

test('should not throw when not doing bad stuff', t => {
  const cart = new ShoppingCart(); // the test cart
  const book = {}; // placeholder for a book
  t.notThrows(() => {
    cart.addItem(book); // add the book object
  })
})
