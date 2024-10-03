const { gql } = require('apollo-server');

const typeDefs = gql`
  type Question {
    id: ID!
    questionText: String!
    correctAnswer: Answer
  }

  type Answer {
    id: ID!
    correctAnswer: String!
  }

  type Query {
    getQuestions: [Question]
  }

  type Mutation {
    createQuestion(questionText: String!, correctAnswer: String!): Question
  }
`;

module.exports = typeDefs;
