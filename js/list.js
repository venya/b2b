
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
			disableScroll: true,
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
