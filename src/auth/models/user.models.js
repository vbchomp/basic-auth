'use strict';

// require bcrypt

const UserModel = ( sequelize, DataTypes ) => {
    const users = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
    users.beforeCreate((user, options) => {
        // need this before any user is created
        // bcrypt hash the password, complexity, async

    })
}

module.exports = UserModel;