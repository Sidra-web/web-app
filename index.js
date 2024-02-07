const express = require("express");
const app = express();

app.get("/",(req, res)=>{
res.json([
    {
        id:1,
        name: "Hasan Shaikh",
        age: 11 
    },
    {
        id:2,
        name: "Azlaan Ahmed",
        age: 5
    },
    {
        id:3,
        name: "John Mike",
        age: 5 
    },
    {
        id:4,
        name: "Pearl Jackson",
        age:5

    },

])
});
app.listen(5500,()=>{
    console.log("App running on 5500 port!")
})