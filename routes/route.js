const express = require('express')
const router = express.Router()
const client = require('../models/Client')
const rendezVousModel = require('../models/RendezVous')

const {creatClient,getClient} = require('../controllers/Client')
//console.log(rendezVousModel)

router.post('/client/create',creatClient)
router.get('/clients',getClient)

module.exports = router;
// router.post('/rendezVous/create', async(req,res)=>{
//     const rendeV= new rendezVousModel(req.body)
//     try {
        
//         await newclient.save()
//         res.status(200).send({
//             "status": true,
//             "message" : "client cree"

//         })
//     } catch (error) {
//         res.status(400).send(error)
//     }
    
// })
