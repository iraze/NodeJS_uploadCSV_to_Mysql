module.exports = {
	HOST: "localhost",
    USER: "database",
    PASSWORD: "pass",
    DB: "store",
    dialect: 'mysql',    
    logging: false ,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }  
	
};
