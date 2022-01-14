const express = require('express');   //require express library we donwloaded
const app = express(); //set up actual server  by calling express() we create an applicaton


app.set('view engine', 'ejs')
app.use(logger)

app.get('/', logger, (req, res) => {
    console.log("Here")
    res.render("index", {text: "!!!"} )
    // res.download('server.js')
    // res.status(500).json({message: "Error"})

})  //app takes 3 parameters:requst, response and next although next is usually not used


// app.get('/users', (req, res) => {  //instead of defining all routes here which could lead to a huge file, we rather defin eit sepately under routes
//     res.send('User List')
    
// })
// app.get('/users/new', (req, res) => {
//     res.send("User New Form")

// })

const userRouter = require('./routes/users');
app.use('/users', userRouter)


function logger(req, res, next){
    console.log(req.originalUrl)
}
app.listen(3000) //our server is listening on prot 3000 for a bunch of different requests