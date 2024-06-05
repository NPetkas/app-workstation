import { gql } from "@apollo/client";

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        password
      }
    }
  }
`;

export const ADD_WORKSTATION = gql`
  mutation addWorkstation($userId: ID!, $name: String!, $description: String) {
    addWorkstation(userId: $userId, name: $name, description: $description) {
      _id
      name
      email
      workstations {
        _id
        name
        description
      }
    }
  }
`;

export const REMOVE_WORKSTATION = gql`
  mutation removeWorkstation($userId: ID!, $workstationId: ID!) {
    removeWorkstation(userId: $userId, workstationId: $workstationId) {
      _id
      name
      email
      workstations {
        _id
        name
        description
      }
    }
  }
`;

export const ADD_TASK = gql`
  mutation addTask($taskText: String!) {
    addTask(taskText: $taskText) {
      _id
      taskText
      taskAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
      }
      }
    }
  `;

  export const ADD_COMMENT = gql`
  mutation addComment($taskId: ID!, $commentText: String!) {
    addComment(taskId: $taskId, commentText: $commentText) {
      _id
      taskText
      taskAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const REMOVE_COMMENT = gql`
mutation Mutation($taskId: ID!, $commentId: ID!) {
  removeComment(taskId: $taskId, commentId: $commentId) {
    _id
    comments {
      _id
      commentAuthor
      commentText
      createdAt
    }
    createdAt
    taskAuthor
    taskText
  }
}
`;

export const ADD_NOTE = gql`
  mutation addNote($noteContent: String!) {
    addNote(noteContent: $noteContent) {
      _id
      noteContent
      noteAuthor
      createdAt
    }
  }
`;

export const REMOVE_NOTE = gql`
  mutation removeNote($noteId: ID!) {
    removeNote(noteId: $noteId) {
      _id
      noteContent
      noteAuthor
      createdAt
    }
  }
`;

