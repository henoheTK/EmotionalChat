'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Room = loader.database.define(
  'schedules',
  {
    roomId: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false
    },
    roomName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    stageId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    isPublic: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    acounts: {
      type: Sequelize.DATE,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
    indexes: [
      {
        fields: ['createdBy']
      }
    ]
  }
);

module.exports = Room;