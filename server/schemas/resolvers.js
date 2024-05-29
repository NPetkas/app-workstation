// src/schema/resolvers.js
const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    user: async (parent, { _id }) => {
      return User.findById(_id);
    },
  },
  Mutation: {
    addProfile: async (parent, { name, email, password }) => {
      console.log("name, email, pw", name, email, password);
      const user = await User.create({ name, email, password });
      console.log("user", user);
      const token = signToken(user);
      console.log("token", token);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },

    // addWorkstation: async (parent, { userId, name, description }) => {
    //   return User.findByIdAndUpdate(
    //     userId,
    //     { $push: { workstations: { name, description } } },
    //     { new: true }
    //   );
    // },
    //     removeWorkstation: async (parent, { userId, workstationId }) => {
    //       return User.findByIdAndUpdate(
    //         userId,
    //         { $pull: { workstations: { _id: workstationId } } },
    //         { new: true }
    //       );
    //     },
  },
};

module.exports = resolvers;
