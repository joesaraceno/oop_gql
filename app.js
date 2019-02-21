const parser = require('body-parser')
const express = require('express')
const graphqlHTTP = require('express-graphql')

const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLFloat,
} = require('graphql');


// TODO: replace this with db ref
const BooksList = require('./data/books');
const books = new BooksList();

const gqlPort = 4001;

const app = express()

app.use(parser.json())

app.use(parser.urlencoded({ extended: true }))

// TODO: put this in a <Modelname>.gql file?
// use custom gql types
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    isbn: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    author: {
      type: new GraphQLNonNull(GraphQLString),
    },
    price: {
      type: new GraphQLNonNull(GraphQLFloat),
    }
  }
})

// same as above
const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    books: {
      type: new GraphQLList(BookType),
      resolve: () => {
        return books.findAll();
      }
    },


    book: {
      type: BookType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt)
        }
      },
      resolve: (user, args) => {
        return books.getOne(args.id)
      }
    }
  }
});

// make schema a collection of all of the subschema, and import it once here
const schema = new GraphQLSchema({
  query: QueryType,
});
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));


app.listen(gqlPort)

console.log(`Gql API Server Running on ${gqlPort}`);

// restful routes
app.get('/status', (req, res) => {
  res.send({
    status: 'ok'
  })
})

app.get('/greet', (req, res) => {
  const { food, name } = req.query
  res.send({
    message: `Hello ${name} would you like some ${food}`
  })
})

app.post('/register' , (req, res) => {
  const { body } = req
  if (!body.username) {
    return res.status(400).send({
      message: 'missing required parameter: username'
    })
  }

  if (!body.password) {
    return res.status(400).send({
      message: 'missing required parameter: password'
    })
  }

  return res.send({
    message: `new user created`
  })
});

module.exports = app