const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('orm_test', 'root', 'Dev@123', {
  host: 'localhost',
  logging : false,     // for not show logs
  dialect: 'mysql',
  pool: {max:5, min:0, idle: 10000}
});

const checkConnection = async () =>{
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
checkConnection();

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./users')(sequelize,DataTypes);
db.user_details = require('./user_details')(sequelize,DataTypes);

db.sequelize.sync({ force: true });

module.exports = db;