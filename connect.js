require("dotenv").config({path: "config.env"})

const mongoose = require("mongoose");

async function connectDB(){
    try {
        const database = await mongoose.connect(process.env.MONGO_DB)
        console.log(`Connected to ${database.connection.host}`);
        console.log(`Connected to ${database.connection.db.databaseName}`);
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;
