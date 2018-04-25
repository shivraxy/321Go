module.exports = (sequelize, DataTypes) => {
  const GroupEvent = sequelize.define('GroupEvent', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    votes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
  GroupEvent.associate = (models) => {
    // associations can be defined here
    GroupEvent.belongsTo(models.Group, {
      foreignKey: 'groupEventId',
      onDelete: 'CASCADE',
    });
  };
  return GroupEvent;
};