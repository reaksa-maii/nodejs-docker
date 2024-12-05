const express = require('express')
const router = express.Router()
const catagory = require('../controller/category')
router.get('/category', (req, res) =>{
    return "Hello"
})