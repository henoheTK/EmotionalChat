'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const headParts = loader.database.define(
  'parts',
  {
    iconId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    parts_kind: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false
    },
    parts_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    parts_posX: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    parts_posY: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    parts_sizeX: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    parts_sizeY: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    parts_rot: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = headParts;