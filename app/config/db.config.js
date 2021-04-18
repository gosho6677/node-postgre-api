module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "TO BE INSERTED",
    DB: "TO BE INSERTED",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };