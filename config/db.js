const mongoose = require('mongoose');
const uri = "mongodb://0.0.0.0:27017/todos"

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(uri, { useNewUrlParser: true });
        console.log(`Mongo db connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;