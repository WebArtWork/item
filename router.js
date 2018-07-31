var Item = require(__dirname+'/schema.js');
module.exports = function(sd) {
	var router = sd._initRouter('/api/item');
	sd['ensure_get_item'] = sd._ensure;
	sd['query_get_item'] = function(req, res){
		return {
			$or: [{
				author: req.user._id
			},{
				holder: req.user._id
			}]
		}
	};
	sd['query_update_all_item'] = function(req, res){
		return {
			_id: req.body._id,
			author: req.user._id
		};
	};
	sd['query_delete_item'] = sd['query_delete_item_admin'] = function(req, res){
		return {
			_id: req.body._id,
			author: req.user._id
		}
	}
};
