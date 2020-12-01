'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Icon = loader.database.define(
  'icon',
  {
    iconId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userId:{
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = Icon;