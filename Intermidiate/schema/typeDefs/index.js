const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    friends: [User!]
    nationality: String
  }

  type Query {
    users: [User!]
    user(id: ID!): User!
  }
`;

module.exports = typeDefs;