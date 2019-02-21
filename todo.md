There is plenty to do here.
This is supposed to be a subscribeable graphql queryable database backend.
It should serve as a very easy to observe backend that pushes live data as it changes.

Top priorities:

- Abstract GQL so we dont have to repeat the same boilerplate for each model
- same for database
    - pick a database (PSQL?)
    - how can we serve live subscribed data?

- make more types to represent the data

- build out a simple client with bs or w/e

- write a ton more tests
- clean up the filesystem

- use gql subscribers on front end
- make database subscribeable