const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const itemSchema = new Schema({
    id : String,
    lastname :String,
	firstname :String,
	login :String,
	email :String,
	password :String,
	created_at : Date,
	updated_at: Date
});

const clientBase = mongoose.model('Manager', itemSchema);
module.exports = clientBase