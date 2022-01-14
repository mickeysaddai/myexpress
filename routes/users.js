const express = require('express');
const router =  express.Router() //router works exactly as our app. It has functions like router.get, router.post etc

//since we are in the users.js folder, we dont have to user /users or /users/new, it automatically puts users there for us

router.get('/', (req, res) => {
    res.send('User List')
    
})
router.get('/new', (req, res) => { //if this were to be put under the get with params, it will define id as new
    res.send("User New Form")

})

router.post('/', (req, res) => {
    res.send('Create User')
})





// router.get('/:id', (req, res) => {
//     //in order to access this param we get it from req.params.id 
//     res.send(`Get User with ID ${req.params.id}`)
// })

// router.put('/:id', (req, res) => {
//     res.send(`Update User with ID ${req.params.id}`)
// })


// router.delete('/:id', (req, res) => {
//     res.send(`Delete User with ID ${req.params.id}`)
// })

// Alternativley, the request with params can be written cleanly as:



router
    .route('/:id')
    .get((req, res) => {
        console.log(req.user)
        // res.send(`Get User with ID ${req.params.id}`)
        res.send(req.user.name)
    })
    .put((req, res)=> {
        res.send(`Update User with ID ${req.params.id}`)

    })
    .delete((req, res) => {
        res.send(`Delete User with ID ${req.params.id}`)

    })


const users = [{name: "Mickey"}, {name: "Ben"}]


router.param("id", (req, res, next, id) => {//runs anytime it finds a pramm that matches the name you poass in.Parmm here acts as a middleware-stuff that runs between the req being sent ot the server and the response that is return to the user.
  req.user = users[id]
    console.log(id)
    next()
//next - if i call this function run the next thing in line


})






    module.exports = router;
