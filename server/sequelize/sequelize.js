const { FOREIGNKEYS } = require('sequelize/lib/query-types');
const sequelize=require('./db')
const { DataTypes } = require('sequelize');

const Question=sequelize.define("Question",{
  questionText: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
const Answer = sequelize.define("Answer", {
  correctAnswer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
Question.hasMany(Answer,{
  FOREIGNKEY:"questionText"})
Answer.belongsTo(Question,
  {FOREIGNKEY:"questionText"})

module.exports = {
  Answer,Question
};
