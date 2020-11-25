'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;



const Icon = loader.database.define(
  'Icon',
  {
    iconId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = Icon;