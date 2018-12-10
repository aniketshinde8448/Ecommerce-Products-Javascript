import Sequelize from 'sequelize';
const seq=require('../db_connection/dbconnection');
var usch= require('./userschema');

var prod = seq.sequelize.define('products', {
    uuid: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV1
    },
    product_name: Sequelize.STRING,
    product_desc: Sequelize.STRING,
    product_category: Sequelize.STRING,
    product_price: Sequelize.FLOAT(6,2),
    is_Active: Sequelize.INTEGER,
    user_email: {
            type: Sequelize.STRING,
            references: 'users',
            referenceskey: 'user_email'
    }
});//.belongsTo(usch.user_email,{foreignkey: 'user_email'});

export {prod};

// usch.usr.hasMany(prod);