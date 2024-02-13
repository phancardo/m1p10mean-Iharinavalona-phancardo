const express = require('express')
const router = express.Router()
const client = require('../models/Client')

router.post('/client/create', async(req,res)=>{
    const newclient = new client(req.body)
    
})