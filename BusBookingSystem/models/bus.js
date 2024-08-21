module.exports = (sequelize, DataTypes) => {
  const Bus = sequelize.define("Bus", {
    busNumber: { type: DataTypes.STRING, allowNull: false },
    from: { type: DataTypes.STRING, allowNull: false },
    to: { type: DataTypes.STRING, allowNull: false },
    departureTime: { type: DataTypes.DATE, allowNull: false },
    seats: { type: DataTypes.INTEGER, allowNull: false },
  });
  return Bus;
};
