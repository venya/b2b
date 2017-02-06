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


function editItem() {
	toggleClass(document.querySelector('.pos-item'), 'hide');
}



document.addEventListener("DOMContentLoaded", function(event) { 
	console.log("DOM ready. Run init...");
	var menu = document.querySelector(".menu");
	//	Open main menu
	document.querySelectorAll(".btn.icon-menu").forEach(function(el){
		el.onclick = function() {
			toggleClass(menu, 'menu-active', true);
		};
	})
	//	Close main menu
	document.querySelectorAll(".menu header, .menu__mask").forEach(function(el){
		el.onclick = function() {
			toggleClass(menu, 'menu-active', false);
		};
	})
	//	Dropdown open/close
	document.querySelectorAll(".dropdown").forEach(function(el){
		el.onclick = function() {
			var menu = this.querySelector('.dropdown-menu');
			if (menu) {
				toggleClass(menu, 'dropdown-menu-open');
			}
		};
	})
});


