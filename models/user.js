'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const User = loader.database.define(
  'users',
  {
    userId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    userName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    displayName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    displayname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    iconId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    roomId: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = User;