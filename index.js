const express = require('express')
var graphqlHTTP=require('express-graphql');
var {buildSchema}=require('graphql');

// GraphQl Schema
var MyGraphQLSchema=buildSchema(`
    type Query {
        message: String
    }
`);

// Root resolver
var root={
    message: ()=> `Hello World`
};

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: MyGraphQLSchema,
    rootValue: root,
    graphiql: true
  }));

//app.get('/', (req, res) => res.send('Hello World!'))
app.listen(3000, () => console.log(`Example app listening on port 3000!`))
