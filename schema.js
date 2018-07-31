var mongoose = require('mongoose');
var Schema = mongoose.Schema({
	name: String,
	price: Number,
	currency: {
		type: String,
		enum: ['UAH', 'EUR', 'USD']
	},
	comment: String,
	avatarUrl: {type: String, default: '/api/user/default.jpg'},
	author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	holder: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

Schema.methods.create = function(obj, user) {
	this.author = user._id;
	this.holder = user._id;
	this.name = obj.name;
	this.avatarUrl = obj.avatarUrl;
	this.price = obj.price;
	this.currency = obj.currency;
	this.comment = obj.comment;
}

module.exports = mongoose.model('Item', Schema);
