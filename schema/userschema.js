"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var seql = require('../db_connection/dbconnection');
var usr = seql.sequelize.define('users', {
    uuid: {
        type: sequelize_1["default"].UUID,
        defaultValue: sequelize_1["default"].UUIDV1
    },
    user_type: sequelize_1["default"].STRING,
    user_name: sequelize_1["default"].STRING,
    user_pass: sequelize_1["default"].STRING,
    user_email: {
        type: sequelize_1["default"].STRING,
        primaryKey: true
    }
});
exports.usr = usr;
