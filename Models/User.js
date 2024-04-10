const mongoose = require('mongoose');

//schema design

const userSchema = new mongoose.Schema({
    name:{
        type: 'string',
        required: [true,'Name is required']
    },
    email:{
        type:'string',
        required: [true,'Email is required & Should be unique'],
        unique: true,
    },
    password:{
        type:'string',
        required: [true,'Password is required'],
    },},
{timestamps:true}
);

//export
const User = new mongoose.model('users',userSchema)
module.exports = User;