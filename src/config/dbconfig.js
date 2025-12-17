const { Sequelize } = require("sequelize");

const db = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: true,
});

db.sync()
  .then(() => {
    console.log("Database connection successfully");
  })
  .catch((err) => {
    console.log("Database connection error...");
    console.log("Error: ",err)
  });

module.exports = db;
