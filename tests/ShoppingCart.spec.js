import test from 'ava'
import ShoppingCart from '../ShoppingCart';
import BookItem from '../BookItem';

test('should throw when doing bad stuff', t => {
  const cart = new ShoppingCart();
  t.throws(() => {
    cart.addItem(undefined);
  })
})

test('should not throw when not doing bad stuff', t => {
  const cart = new ShoppingCart();
  const book = new BookItem();
  t.notThrows(() => {
    cart.addItem(book);
    cart.ItemCount === 1;
    cart.removeItem
  })

  t.notThrows(() => {
    cart.addItem(book);
  })

  
})