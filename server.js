const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routers = require('./routes/route');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() =>
    
    console.log('MongoDB connected'))
    .catch(err => console.error('Error connecting to MongoDB', err));
    //const db=client.db('DBBeaute')


app.use(routers);

// Define Schema
// const Schema = mongoose.Schema;
// const itemSchema = new Schema({
//     lastname :String,
// 	firstname :String,
// 	login :String
// 	// email :String,
// 	// password :String,
// 	// created_at : Date,
// 	// updated_at: Date
// });

// // const RDV = mongoose.model('RendezVous', {
// //     subject: String,
// //     client: { type: mongoose.Schema.Types.ObjectId, ref: 'client' },
// //   });

// const clientBase = mongoose.model('client', itemSchema);

// // Routes
// app.get('/clients', async (req, res) => {
//     console.log('ato')
//     try {
//         const items = await clientBase.find();
//         console.log(items)
//         res.json(items);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// app.post('/clients',  (req, res) => {
   
//     const item = new clientBase({
//         lastname: req.body.lastname,
//         firstname: req.body.firstname,
//         login: req.body.login
//     });
//     console.log(item)
//     try {
//         const newItem =  item.save();
//         res.status(201).json(newItem);
//         console.log('success')
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
//   });

//   app.post('/rendezVous', async (req, res) => {
   
//     const item = new clientBase({
//         lastname: req.body.lastname,
//         email: req.body.email,
//         password: req.body.password
//     });
//     try {
//         const newItem = await item.save();
//         res.status(201).json(newItem);
//         console.log('success')
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
//   });


// app.post('/items', async (req, res) => {
//     const item = new clientBase({
//         name: req.body.name
//     });
//     try {
//         const newItem = await item.save();
//         res.status(201).json(newItem);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

// app.put('/items/:id', async (req, res) => {
//     const { id } = req.params;
//     try {
//         const updatedItem = await Item.findByIdAndUpdate(id, req.body, { new: true });
//         res.json(updatedItem);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

// app.delete('/items/:id', async (req, res) => {
//     const { id } = req.params;
//     try {
//         await Item.findByIdAndDelete(id);
//         res.json({ message: 'Item deleted' });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
