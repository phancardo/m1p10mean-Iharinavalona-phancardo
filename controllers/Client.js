const CLientModel = require('../models/Client')
//const RendezVoustModel = require('../models/RendezVous')
exports.creatClient = async(req,res)=>{
    // const lastname = req.body.lastname
    // const firsttname = req.body.firsttname
    // const login = req.body.login
    try {
        const newClient = CLientModel.create(req.body)
        res.status(201).json(newItem);
        console.log('success')
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

}
exports.getClient = async()=>{
    // const lastname = req.body.lastname
    // const firsttname = req.body.firsttname
    // const login = req.body.login
    try {
        const listeCLients = CLientModel.find()
        res.status(201).json(newItem);
        console.log('success')
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

    return listeCLients

}