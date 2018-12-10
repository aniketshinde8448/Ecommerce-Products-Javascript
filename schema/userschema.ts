import Sequelize from 'sequelize';

const seql=require('../db_connection/dbconnection');
var usr =seql.sequelize.define('users',{
    uuid: {
        type:Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1
    },
    user_type: Sequelize.STRING,
    user_name: Sequelize.STRING,
    user_pass: Sequelize.STRING,
    user_email: {
        type: Sequelize.STRING,
        primaryKey: true
    }
});

export {usr};