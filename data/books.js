// TODO: require both of these in some map file that gets imported to gql?
const BookItem = require('../controllers/BookItem');


const books = [
  new BookItem({
    id: 1,
    title: 'Blaze Lightly',
    author: 'Bruce Wayne',
    price: 27.98,
  }),
  new BookItem({
    id: 2,
    title: 'Superman',
    author: 'Lark Kent',
    price: 43.00,
  }),
  new BookItem({
    id: 3,
    title: 'Batman',
    author: 'Billy Mayes',
    price: 17.22,
  })
];

// TODO: make this usesome boilerplate that is abstracted away for each model
// going to have to build schema objects essentialy
// they should match the types/interfaces for the front end
module.exports = class BooksList {
  findAll() {
    return books.map(book => ({
      ...book,
    }));
  }

  getOne(id) {
    const matches = books.filter(book => book._id === id);
    
    if (matches && matches.length > 0) {
      return matches[0];
    }
  }

  create(args) {
    const _id = books[books.length - 1]._id + 1;
    let book = new Book({...args, _id});
    books.push(book);
    return book;
  }
}