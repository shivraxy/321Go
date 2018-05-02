'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    // add more attributes, such as associated users and events?
    }, 
  });
  Group.associate = (models) => {
    // associations can be defined here
    Group.hasMany(models.GroupEvent, {
      foreignKey: 'groupEventId',
      as: 'groupEvents',
    });
  };
  return Group;
};