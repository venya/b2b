
function scrolledList(DOMselector, JSONpath) {
	console.log('Attach to '+DOMselector);
	console.log('TODO: load data from '+JSONpath);
}

$(function() {

	// Init dropdowns
	$('.dropdown__handle').click(function(e) {
		e.preventDefault();
		console.log('click');
		$(this).parent('.dropdown').toggleClass('open');
	});

	var categories = new scrolledList($(".categories-list"), "data/categories.json");
	var products = new scrolledList($(".products-list"), "data/products.json");
});