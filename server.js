const express = require('express');   //require express library we donwloaded
const app = express(); //set up actual server  by calling express() we create an applicaton

app.get('/', (req, res) => {
    console.log("Here")
    res.status(500).json({message: "Error"})

})  //app takes 3 parameters:requst, response and next although next is usually not used

app.listen(3000) //our server is listening on prot 3000 for a bunch of different requests