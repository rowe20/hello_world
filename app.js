const express = require('express');
const app = express();
//checking
app.use(express.json());
const port = 5000;
const mongoose = require("mongoose");
 
mongoose
.connect(process.env.MONGOURL)
.then( ()=> console.log("Mongo DB connected"));


// Getting Request

app.get("/",(req,res)=> res.send("Welcome To Anime World"));
/*app.get('/', (req, res) => {
 
    // Sending the response
    res.send('Hello World!')
    
    // Ending the response
    res.end()
})*/
 
// Establishing the port
const PORT = process.env.PORT ||5000;
 
// Executing the server on given port number
app.listen(PORT, console.log(
  `Server started on port ${PORT}`));
