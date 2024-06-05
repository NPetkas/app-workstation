import { gql } from "@apollo/client";

export const QUERY_PROFILES = gql`
  query allProfiles {
    users {
      _id
      name
    }
  }
`;
export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($userId: ID!) {
    user(userId: $userId) {
      _id
      name
    }
  }
`;
export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
    }
  }
`;
export const QUERY_TASKS = gql`
  query getTasks {
    tasks {
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

export const QUERY_NOTES = gql`
  query getNotes {
    notes {
      _id
      noteContent
      noteAuthor
      createdAt
    }
  }
`;


export const QUERY_SINGLE_TASK = gql`
query Query($taskId: ID!) {
  task(taskId: $taskId) {
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





export const QUERY_NOTES = gql`
  query getNotes {
    notes {
      _id
      noteContent
      noteAuthor
      createdAt
    }
  }
`;

