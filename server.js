var express = require('express');
var mongoose = require('mongoose');
var Router = require('./routes/router')
const app =express()

mongoose.connect(
    `mongodb+srv://VinayBojja:Virtou123@cluster0.0e7ak.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

//Mongoose connection validation
const db = mongoose.connection;
db.on("error",console.error.bind(console,"Connection error:"));
db.once("open", function(){
console.log("Connection Successful");
}) 

app.use(Router)
app.listen(3000, () => {
    console.log("Server is running at port 3000")
});