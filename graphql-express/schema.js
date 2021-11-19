const graphql, {GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString } = require('graphql');


const RootQuery = 'query';
const Mutation = 'mutation';

const schema = new GraphQLSchema({ query: RootQuery, mutation: Mutation });

module.exports = schema;
