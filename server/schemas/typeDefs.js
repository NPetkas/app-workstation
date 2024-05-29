// src/schema/typeDefs.js
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    token: String
    workstations: [Workstation!]
  }

  type Workstation {
    _id: ID
    name: String
    description: String
  }

  type Auth {
    token: String
    user: User
  }

  type Query {
    users: [User]
    user(_id: ID!): User
    workstation(id: ID!): Workstation
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
