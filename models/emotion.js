'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Emotion = loader.database.define(
  'emotions',
  {
    emotionId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    emotionName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    left_eye_path: {
      type: Sequelize.STRING,
      allowNull: false
    },
    right_eye_path: {
      type: Sequelize.STRING,
      allowNull: false
    },
    nose_path: {
      type: Sequelize.STRING,
      allowNull: false
    },
    mouth_path: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Emotion;