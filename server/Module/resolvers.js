const {Question,Answer}=require('../sequelize/sequelize')

const resolvers = {
  Query: {
    getQuestions: async () => {
      return await Question.findAll({ include: Answer });
    },
  },
  Mutation: {
    createQuestion: async (root, { questionText, correctAnswer }) => {
      const newQuestion = await Question.create({ questionText });
      await Answer.create({ correctAnswer,newQuestion });
      return newQuestion;
    },
  },
};

module.exports = resolvers;
