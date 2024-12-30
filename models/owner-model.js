const mongoose = require('mongoose');


const ownerSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    product:{
        type:Array,
        default:[]
    },
    picture:String,
    gstin: String
})


module.exports = mongoose.model("owner", ownerSchema);