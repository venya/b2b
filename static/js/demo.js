// This is collection of quick and dirty functions
// to bring to life some GUI components, while no
// JavaScript framework is defined in this project.



function toggleClass(element, className, newState) {
	if (newState == undefined) {
		// determine current state, inverted
		newState = !element.classList.contains(className);
	}
	// console.log(element, className, newState);
	if (newState) {
		element.classList.add(className);
	} else {
		element.classList.remove(className);
		//element.className.replace(new RegExp('(?:^|\\s)'+ className + '(?:\\s|$)'), '');
	}
	return newState;
}

//	Replacement for ES5 .forEach()
function forEvery(parent, selector, func) {
	// console.log("For every "+selector);
	var items = parent.querySelectorAll(selector);
	for (var i = 0; i < items.length; i++) {
		func(items[i]);
	}
}


function demoEditItem() {
	toggleClass(document.querySelector('.pos-item'), 'hide');
}


function demoDuplicateItem(item) {
	var html = item.outerHTML;
	console.log(html);
	item.outerHTML = html + html;
}


function demoEmptyOrder() {
	toggleClass(demo_order_items,'hide', !toggleClass(demo_order_empty,'hide'));
}

function demoToggleAnimation() {
	toggleClass(demoAnimated, 'icon-check', toggleClass(body, 'animated'));
}


document.addEventListener("DOMContentLoaded", function(event) { 
	console.log("DOM ready. Run init...");
	var menu = document.querySelector(".menu");
	//	Open main menu
	forEvery(document, ".btn.icon-menu", function(el) {
		el.onclick = function() {
			toggleClass(menu, 'menu-active', true);
		};
	});
	//	Close main menu
	forEvery(document, ".menu header, .menu__mask", function(el){
		el.onclick = function() {
			toggleClass(menu, 'menu-active', false);
		};
	});
	//	Dropdown open/close
	forEvery(document, ".dropdown", function(el) {
		el.onclick = function() {
			var menu = this.querySelector('.dropdown-menu');
			if (menu) {
				toggleClass(menu, 'dropdown-menu-open');
			}
		};
	});
	// Tabs
	forEvery(document, ".tabs__item", function(el) {
		el.onclick = function() {
			var prevTab = this.parentElement.querySelector(".tabs__item-active");
			if (prevTab)
				toggleClass(prevTab, "tabs__item-active", false);
			toggleClass(this, "tabs__item-active", true);
		}
	});

	//	Toggles
	forEvery(document, "input.toggle", function(el) {
		toggleClass(el, "toggle", false);
		console.log("Decorate .toggle: ", el);
		var additionalClasses = el.classList.contains("toggle-danger") ? " toggle-danger" : '';
		additionalClasses += el.classList.contains("toggle-success") ? " toggle-success" : '';
		additionalClasses += el.checked ? "" : " toggle-off";
		el.outerHTML = '<div class="toggle' + additionalClasses + '">'
			+ '<span class="toggle__thumb"></span>'
			+ el.outerHTML
			+ '</div>';
	});
});


