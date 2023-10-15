const express = require('express');
const router = express.Router();
const validateJTW =require('../controllers/AutorizacionController')

const song = [
    {
        title:'starligh',
        artitas :'diomedez dias'
    },
    {
        title:'starligh',
        artitas :'diomedez dias'
    }

]

router.get('/',validateJTW,(req,res) =>{
    res.send(song);
})

module.exports=router;