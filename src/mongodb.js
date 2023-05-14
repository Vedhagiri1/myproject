const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://vedhagiri602:vedhagiri2002@cluster0.fqf3xoe.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("mongodb connected");
})
.catch(() => {
    console.log("failed to connect");
});

const LogInSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const collection =new mongoose.model("Collection4", LogInSchema);

module.exports = collection;
