"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1["default"]('ecommerce', 'root', 'a', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    define: {
        timestamps: false
    }
});
exports.sequelize
    .authenticate()
    .then(function () {
    console.log('Connection has been established successfully.');
})["catch"](function (err) {
    console.error('Unable to connect to the database:', err);
});
exports["default"] = sequelize_1["default"];
