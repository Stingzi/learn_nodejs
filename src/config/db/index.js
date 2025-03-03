const mongoose = require('mongoose');

mongoose.set('strictQuery', false); 

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
    console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect fail!!!');
    }
}

module.exports = { connect };