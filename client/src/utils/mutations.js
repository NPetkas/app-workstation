import { gql } from "@apollo/client";

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
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
      profile {
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
