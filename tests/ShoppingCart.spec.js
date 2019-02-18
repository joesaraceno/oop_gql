import test from 'ava'
import ShoppingCart from '../controllers/ShoppingCart';

test('should throw when doing bad stuff', t => {
  const cart = new ShoppingCart();
  const foo = {

  };

  const bar = {

  };
  
  t.throws(() => {
    cart.add(undefined);
  })
})

test('should not throw when not doing bad stuff', t => {
  const cart = new ShoppingCart();
  const foo = {

  };

  const bar = {

  };
  t.notThrows(() => {
    cart.addItem(foo);

  })
})
