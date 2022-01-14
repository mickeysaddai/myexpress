const express = require('express');
const router =  express.Router() //router works exactly as our app. It has functions like router.get, router.post etc

//since we are in the users.js folder, we dont have to user /users or /users/new, it automatically puts users there for us

router.get('/', (req, res) => {
    res.send('User List')
    
})
router.get('/new', (req, res) => {
    res.send("User New Form")

})


module.exports = router;