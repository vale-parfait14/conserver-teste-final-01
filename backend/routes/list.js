const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");

//create
router.post("/addTask",async(req,res) =>{
    try {
        const{title,body,email} = req.body;
        const existingUser =  await User.findOne({ email});

        if(existingUser){
            const list = new List({ title,body,user:existingUser});
            await list.save().then(()=>res.status(200).json({list}));
            existingUser.list.push(list);
            existingUser.save();
        }
    } catch (error) {
        console.log(erroer);
        
    }
});


//update

router.put("/updateTask/:id",async(req,res) =>{
    try {
        const{title,body,email} = req.body;
        const existingUser =  await User.findOne({ email});

        if(existingUser){
           const list = await list.findByIdandUpdate(req.params.id,{title,body});
           list.save().then(()=>res.status(200).json({message : "Task Updated"}));
        }
    } catch (error) {
        console.log(error);
        
    }
});


//delete

router.delete("/deleteTask/:id",async(req,res) =>{
    try {
        const{email} = req.body;
        const existingUser =  await User.findOneAndUpdate({ email},
            {$pull: { list : req.params.id}});

        if(existingUser){
            await list.findByIdandDelete(req.params.id)
           .then(()=>res.status(200).json({message : "Task Delete"}));
        }
    } catch (error) {
        console.log(error);
        
    }
});



//getTask

router.get("/getTasks/:id",async(req,res)=>{
    const list =  await List.find({user:req.params.id}).sort({createdAt:-1});
    if(list.length !==0){
        res.status(200).json({ list :list });
    }else{
        res.status(200).json({ message :"NO Tasks" });
    }
})






module.exports = router;
