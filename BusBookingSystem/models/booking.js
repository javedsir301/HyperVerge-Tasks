module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define("Booking", {
    userId: {
      type: DataTypes.INTEGER,
      references: { model: "Users", key: "id" },
    },
    busId: {
      type: DataTypes.INTEGER,
      references: { model: "Buses", key: "id" },
    },
    seatsBooked: { type: DataTypes.INTEGER, allowNull: false },
    bookingDate: { type: DataTypes.DATE, allowNull: false },
  });
  return Booking;
};
