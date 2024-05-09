const express = require("express");
const router = express.Router();
const userCrud = require('../controllers/userCrud');

router.get('/',(req,res)=>{
    res.send("Home Page");
})

router.post('/user/addUser',userCrud.addNewUser);
router.post('/user/edit/:id',userCrud.update);
router.get('/user/users',userCrud.fetchUsers);
router.get('/user/user/:id',userCrud.fetchUser);


module.exports = router;