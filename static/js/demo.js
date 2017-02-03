// This is collection of quick and dirty functions
// to bring to life some GUI components, while no
// JavaScript framework is defined in this project.



function toggleClass(element, className, newState) {
	if (newState == undefined) {
		// determine current state, inverted
		newState = !element.classList.contains(className);
	}
	//console.log(element, className, newState);
	if (newState) {
		element.classList.add(className);
	} else {
		element.classList.remove(className);
		//element.className.replace(new RegExp('(?:^|\\s)'+ className + '(?:\\s|$)'), '');
	}
	return newState;
}


function menuClose() {
	toggleClass(menu, 'menu-active', false);
	return false;
}

function menuShow() {
	toggleClass(menu, 'menu-active', true);
	return false;
}

