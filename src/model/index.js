const db = require("../config/dbConfig");
const User = require("../model/User");

db.sync()
    .then(() => {
        console.log("Database connection successfully");
    })
    .catch((error) => {
        console.log("Database connection error...");
        console.log("error: ", error);
    });
module.exports = {
    db,
    User,
};
