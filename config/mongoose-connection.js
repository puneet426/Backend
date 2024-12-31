const mongoose = require('mongoose');

const config = require("config")

mongoose.connect(`${config.get("MONGODB_URI")}/scatch`)
.then(function() {
   console.log("Connected to MongoDB");
})
.catch(function(err){
    console.log(err);         // set the environmental variable by run command set DEBUG=development:*
})

module.exports = mongoose.connection;  //export the mongoose object