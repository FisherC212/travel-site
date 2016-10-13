import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'; 
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor() {
		this.siteHeader = $(".site-header"); // target element
		this.headerTriggerElement = $(".large-hero__title");
		this.createHeaderWaypoint();
		this.pageSections = $(".page-section"); // collection of all our page section elements
		this.headerLinks = $(".primary-nav a");
		this.createPageSectionWaypoints();
		this.addSmoothScrolling();
	}

	addSmoothScrolling() {
		this.headerLinks.smoothScroll();
	}

	createHeaderWaypoint() {
		var that = this;
		new Waypoint({
			element: this.headerTriggerElement[0], // Trigger element (when this element hits the top of the page when we scroll)
			handler: function (direction) {
				if (direction == "down") {
					that.siteHeader.addClass("site-header--dark"); // Adds class when scrolling down past trigger element
				} else {
					that.siteHeader.removeClass("site-header--dark"); // Removes class when scrolling up past trigger element
				}

			} // what we want to happen
		});
	}

	createPageSectionWaypoints() {
		var that = this;
		this.pageSections.each(function() {
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection, // page section div we are looped to
				handler: function(direction) {
					if (direction == "down") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					}
				},
				offset: "18%"
			});

			new Waypoint({
				element: currentPageSection, // page section div we are looped to
				handler: function(direction) {
					if (direction == "up") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					}
				},
				offset: "-40%"
			});
		});
	}
}

export default StickyHeader;