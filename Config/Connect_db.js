const mongoose = require('mongoose');

const Connect_db = async ()=> {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Connected to DB ${mongoose.connection.host}');
    }
    catch (error) {
            console.log(error);
    }
}

module.exports = Connect_db;