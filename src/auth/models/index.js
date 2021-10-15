'use strict';

require('dotenv').config();
const UserModel = require('./user.models.js');


const DATABASE_URL = process.env.NODE_ENV === 'test'
? 'sqlite:memory' : process.env.DATABASE_URL;
  
const { Sequelize, DataTypes } = require('sequelize');
  
// import schemas & collection
  
const sequelizeOptions = process.env.NODE_ENV === 'production' 
? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
} : {};

// turn schema into sequelize model
// instantiate sequelize
const sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);
  
// export
module.exports = {
  db: sequelize,
  Users: UserModel(sequelize, DataTypes),
      
      
};