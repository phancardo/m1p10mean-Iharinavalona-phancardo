const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ClientSchema = new Schema({
    id :String,
	name:String,
	duration :String,
	commission : String
});

module.export = mongoose.model('Service',ClientSchema)