function pager(container) {
	var _node = container;
	var _pages = 0;
	var _current;

	// Initialize
	_node.empty();

	function add() {
		// console.log('add page: '+_pages);
		_node.append('<a class="pager__item" href="#" data-page="'+_pages+'" title="Navigate to page '+(_pages+1)+'"></a>');
		if (!_current) activate(_pages);
		_pages++;
	};

	function activate(index) {
		console.log('activage page: '+index);
		if (_current)
			_current.removeClass('pager__item_active');
		_current = _node.find(':eq('+ index +')');
		_current.addClass('pager__item_active');
	};

	return {
		add: add,
		activate: activate,
	}
}

function scrolledList(name, dataPath, renderer, options) {
	// var _selector = name;
	var _node = $('.'+name+'-list');
	var _swipe;
	var _perPage = 12;
	var _pager = new pager($('#'+name).children('.pager'));

	// Initialize
	_load(dataPath);
	_enableSwipe();
	_pager.add();
	_pager.add();
	_pager.add();

	function _enableSwipe() {
		// add required classes to underlying html structure
		var el = $('#'+name);
		el.addClass('swipe');
		el.children('').first().addClass('swipe__wrap');
		el.children('').first().children().addClass('swipe__item');
		// attach and initialize Swipe component
		_swipe = new Swipe(el.get(0), {
			draggable: true,
			continuous: false,
			stopPropagation: true,
			callback: function(){
				_pager.activate( _swipe.getPos() );
			}
		});
	}

	function _load(path) {
		$.ajax({url: path, dataType: 'json'})
		.done(function(data) {// Success: populate list with data received
			_node.empty();
			$.each(data, function(id, item) {
				_node.append(renderer(item));
			})
		})
		.fail(function(data) {
			console.log('failed loading: ' + path);
		})
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
		"categories",
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
		"products",
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