const express = require ("express");
const app = express();
require("./conn/conn.js");
const auth = require("/routes/auth");
const list = require("/routes/list");
app.use(express.json());

app.get("/", (req,res) => {
    res.send("Hello j'ai reussi mon examen et j'ai obtrnu mon diplome ,en plus je suis recruter en entreprise");
});

app.use("/api/v1",auth);
app.use("/api/v",list);
app.listen(1000,  ()=>{
    console.log( "server started");
    
}); 