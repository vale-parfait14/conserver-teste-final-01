
const mongoose = require("mongoose");


const conn =  async(req , res )=>{
   try {
    await mongoose.
    connect(
        "mongodb+srv://parfaitovale:Passer%405@cluster0.ppjd8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
     )
    .then(()=>{
        console.log(connected);
        
    })
   } catch (error) {
   res.status(400).json({
        message:"Not connected",
        
        
    });
    
    
    
   }
};

conn();