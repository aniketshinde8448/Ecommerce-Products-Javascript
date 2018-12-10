import Sequelize from 'sequelize';
exports.sequelize = new Sequelize('ecommerce', 'root', 'a', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  define: {
    timestamps: false
  }
});



exports.sequelize
.authenticate()
.then(() => {
   console.log('Connection has been established successfully.');
})
.catch(err => {
   console.error('Unable to connect to the database:', err);
});

export default Sequelize;