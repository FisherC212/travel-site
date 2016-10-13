import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'; // Waypoints is best when using scroll events.

class RevealOnScroll {
	constructor(els, offset) { // els - elements
		this.itemsToReveal = els; // elements parameter
		this.offsetPercentage = offset; //offset parameter
		this.hideInitially(); // Calling the method below to initially hide the above elements
		this.createWaypoints(); // Calling our waypoints method
	}

	hideInitially() { // Method to hide the elements initially
		this.itemsToReveal.addClass("reveal-item"); // Adds new class to our targeted elements
	}

	createWaypoints() { // Method using Waypoints for each element in our collection. 
		var that = this; // 
		this.itemsToReveal.each(function () { // jquery using 'each'
			var currentItem = this; // Referencing "this" in the element section will set it as a new object. Assigning it to a variable means we reference the correct current DOM element in the next line of code. 
			new Waypoint({ // Uses the waypoints class we imported at the top. Each waypoint object needs at least 2 properties.
				element: currentItem, // element = the DOM element we want to watch for as we scroll down the page.
				handler: function () {
					$(currentItem).addClass("reveal-item--is-visible"); // Targeting current DOM element and adding class to it.
				}, // handler = What we want to happen when that element is scrolled to.
				offset: that.offsetPercentage // 0 is the top of the browser, 100% is the bottom - 85% targets it to activate when the element is just above the bototm of the page, rather whan waiting for them to reach the top of the page.
			});
		});
	}
}

export default RevealOnScroll;