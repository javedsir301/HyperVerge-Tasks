const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(require('../config/config.json').development);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, DataTypes);
db.Bus = require('./bus')(sequelize, DataTypes);
db.Booking = require('./booking')(sequelize, DataTypes);

db.User.hasMany(db.Booking);
db.Booking.belongsTo(db.User);
db.Bus.hasMany(db.Booking);
db.Booking.belongsTo(db.Bus);

module.exports = db;
