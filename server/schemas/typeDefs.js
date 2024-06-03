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

  type Task {
    _id: ID
    taskText: String
    taskAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: String
    user: User
  }

  type Query {
    users: [User]
    user(_id: ID!): User
    workstation(id: ID!): Workstation
    tasks(username: String): [Task]
    task(taskId: ID!): Task
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addTask(taskText: String!): Task
    removeTask(taskId: ID!): Task
    addComment(taskId: ID!, commentText: String!): Task
    removeComment(taskId: ID!, commentId: ID!): Task
  }
`;

module.exports = typeDefs;