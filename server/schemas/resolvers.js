// src/schema/resolvers.js
const { AuthenticationError } = require("apollo-server-express");
const { User, Task, Note } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    user: async (parent, { _id }) => {
      return User.findById(_id);
    },
    tasks: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Task.find(params).sort({ createdAt: -1 });
    },
    task: async (parent, { taskId }) => {
      return Task.findOne({ _id: taskId });
    },
    notes: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Note.find(params).sort({ createdAt: -1 });
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

    addTask: async (parent, { taskText }, context) => {
      if (context.user) {
        const task = await Task.create({
          taskText,
          taskAuthor: context.user.name,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { tasks: task._id } }
        );

        return task;
      }
      throw AuthenticationError;
    },

    removeTask: async (parent, { taskId }, context) => {
      if (context.user) {
        const task = await Task.findOneAndDelete({
          _id: taskId,
          taskAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { tasks: task._id } }
        );

        return task;
      }
      throw AuthenticationError;
    },

    addNote: async (parent, { noteContent }, context) => {
      if (context.user) {
        const note = await Note.create({
          noteContent,
          noteAuthor: context.user.name,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { notes: note._id } }
        );

        return note;
      }
      throw AuthenticationError;
    },

    removeNote: async (parent, { noteId }, context) => {
      if (context.user) {
        const note = await Note.findOneAndDelete({
          _id: noteId,
          noteAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { notes: note._id } }
        );

        return note;
      }
      throw AuthenticationError;
    },

    addComment: async (parent, { taskId, commentText }, context) => {
      if (context.user) {
        return Task.findOneAndUpdate(
          { _id: taskId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw AuthenticationError;
    },
    
    removeComment: async (parent, { taskId, commentId }, context) => {
      if (context.user) {
        return Task.findOneAndUpdate(
          { _id: taskId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw AuthenticationError;
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
