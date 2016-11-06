
function scrolledList(container, dataPath, renderer, options) {
	// var _selector = name;
	var _node = container;
	var _perPage = 12;
	var _swipe;
	var _currentPage = container.find('.catalog__page');
	var _pager = new pager(_node.children('.pager'));

	// Initialize
	_load(dataPath);
	_enableSwipe();
	_pager.add( function(){ _swipe.slide(0); } );
	_pager.add( function(){ _swipe.slide(1); } );
	_pager.add( function(){ _swipe.slide(2); } );

	function _enableSwipe() {
		// attach and initialize Swipe component
		_swipe = new Swipe(_node.get(0), {
			draggable: true,
			continuous: false,
			stopPropagation: true,
			disableScroll: true,
			callback: function(){
				_pager.activate( _swipe.getPos() );
			}
		});
	}

	function _load(path) {
		$.ajax({url: path, dataType: 'json'})
		.done(function(data) {// Success: populate list with data received
			_currentPage.empty();
			$.each(data, function(id, item) {
				_currentPage.append(renderer(item));
			})
		})
		.fail(function(data) {
			console.log('failed loading: ' + path);
		})
	}
}
