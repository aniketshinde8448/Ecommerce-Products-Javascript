"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var seq = require('../db_connection/dbconnection');
var usch = require('./userschema');
var prod = seq.sequelize.define('products', {
    uuid: {
        type: sequelize_1["default"].UUID,
        primaryKey: true,
        defaultValue: sequelize_1["default"].UUIDV1
    },
    product_name: sequelize_1["default"].STRING,
    product_desc: sequelize_1["default"].STRING,
    product_category: sequelize_1["default"].STRING,
    product_price: sequelize_1["default"].FLOAT(6, 2),
    is_Active: sequelize_1["default"].INTEGER,
    user_email: {
        type: sequelize_1["default"].STRING,
        references: 'users',
        referenceskey: 'user_email'
    }
}); //.belongsTo(usch.user_email,{foreignkey: 'user_email'});
exports.prod = prod;
// usch.usr.hasMany(prod);
