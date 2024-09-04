const mongoose = require("mongoose");
const listSchema = new  mongoose.Schema({
title:{
    type:String,
     required: true,
},
body:{
    type:String,
     required: true,
},
usr:[
    {
        type:mongooseTypes.ObjectId,
        ref:"User",
    },
]

});


module.exports = mongoose.model("List",listSchema);