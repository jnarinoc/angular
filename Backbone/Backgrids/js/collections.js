var Sugerencias = Backbone.Collection.extend({
	model: Sugerencia,
	sort_key: 'titulo',
	comparator: function (item){
		return item.get(this.sort_key);
	},
	sortByField: function(fieldName){
		this.sort_key = fieldName;
		this.sort();
	}
});