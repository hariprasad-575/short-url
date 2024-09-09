const mongoose = require('mongoose');

async function mongoDbConnector(url) {
    try {
        await mongoose.connect(url);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error;
    }
}

module.exports = { mongoDbConnector };
