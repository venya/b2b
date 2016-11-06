
function scrolledList(selector, dataPath, renderer) {
	var _path = dataPath;
	var _selector = selector;
	var _node = $(selector);

	_load(_path);

	function _load(path) {
		$.ajax({url: path, dataType: 'json'})
		.done(function(data) {
			// Populate list with data received
			_node.empty();
			$.each(data, function(id, item) {
				console.log(item);
				_node.append(renderer(item));
			})
		})
		.fail(function(data) {
			console.log('failed loading: ' + path);
		})
	}

	function select(id) {
		console.log('Set selection: '+id);
	}

	return {
		select: select,
	}
}

$(function() {

	// Init dropdowns
	$('.dropdown__handle').click(function(e) {
		e.preventDefault();
		console.log('click');
		$(this).parent('.dropdown').toggleClass('open');
	});

	window.categories = new scrolledList(
		".categories-list",
		"data/categories.json",
		function(cat) {
			return '<li class="categories-list__item'+ (cat.default ? ' categories-list__item_active' : '') +'" id="' + cat.id + '">'
				+'<a class="categories-list__item_link" href="#">'
					+'<div class="categories-list__item_title">' + cat.id + '</div>'
					+'<div class="categories-list__item_info">' + cat.info + '</div>'
				+'</a>'
			+'</li>';
			}
		);

	window.products = new scrolledList(
		".products-list",
		"data/products.json",
		function(item){
			return '<li class="products-list__item">'
				+'<a class="products-list__item_link" href="#">'
					+'<img class="products-list__item_pic" src="'+ item.pic +'">'
					+'<span class="products-list__item_price">$'+ item.price.toFixed(2) +'</span>'
					+'<span class="products-list__item_title">'+ item.title +'</span>'
				+'</a>'
			+'</li>';
			}
		);

});