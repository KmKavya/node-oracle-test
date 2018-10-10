const Sequelize = require('sequelize-oracle');

const sequelize = new Sequelize('oracle://test:test@192.168.1.73:1521/XE', {
 
  // pool configuration used to pool database connections
  pool: {
    max: 5,
    idle: 30000,
    acquire: 60000
  }
});


module.exports=sequelize;
