
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
