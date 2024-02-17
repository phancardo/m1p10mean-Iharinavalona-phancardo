const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const itemSchema = new Schema({
    nomRDV :{
		type : String,
		required : true	
	},
	Client :{
		type: String,
		required : true
	},
	//login :String
	// email :String,
	// password :String,
	// created_at : Date,
	// updated_at: Date
});

const RDV = mongoose.model('RendezVous',itemSchema);
module.exports = RDV