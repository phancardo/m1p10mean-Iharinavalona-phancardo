const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ClientSchema = new Schema({
    lastname :String,
	firstname :String,
	login :String,
	email :String,
	password :String,
	created_at : Date,
	updated_at: Date
});

module.export = mongoose.model('Client',ClientSchema)