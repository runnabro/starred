//super simple carousel
//animation between panes happens with css transitions
function Carousel(element){
	var self = this;
	element = $(element);

	var container = element.find('#gum');
	//var panes = container.find('.each');
	var pane_width = 0;
	var pane_count = 4;

	//initial
	this.init = function(){
		setPaneDimensions();
	};

	//set the pane dimensions and scale the container
	function setPaneDimensions(){
		pane_width = element.width();
	}

	//show pane by index
	//@param   {Number}    index
	this.showPane = function(index){
		//between the bounds
		index = Math.max(0, Math.min(index, pane_count-1));
		current_pane = index;

		var offset = -((100/pane_count)*current_pane);
		setContainerOffset(offset, true);

		$headerLi
			.removeClass('active')
			.eq(current_pane)
			.addClass('active');

		resetHeight();
	};

	function setContainerOffset(percent, animate){
		container.removeClass('animate');
		if (animate) {
			container.addClass('animate');
		}

		if (Modernizr.csstransforms3d) {
			container.css('transform', 'translate3d('+ percent +'%,0,0) scale3d(1,1,1)');
		} else if (Modernizr.csstransforms) {
			container.css('transform', 'translate('+ percent +'%,0)');
		} else {
			var px = ((pane_width*pane_count) / 100) * percent;
			container.css('left', px+'px');
		}
	}

	this.next = function(){ return this.showPane(current_pane, true); };
	this.prev = function(){ return this.showPane(current_pane, true); };

		function handleHammer(ev){
			//disable browser scrolling
			ev.gesture.preventDefault();

			switch(ev.type) {
				case 'dragright':
				case 'dragleft':
					//stick to the finger
					var pane_offset = -(100/pane_count)*current_pane;
					var drag_offset = ((100/pane_width)*ev.gesture.deltaX) / pane_count;

					// slow down at the first and last pane
					if ((current_pane == 0 && ev.gesture.direction == Hammer.DIRECTION_RIGHT) ||
						(current_pane == pane_count-1 && ev.gesture.direction == Hammer.DIRECTION_LEFT)) {
							drag_offset *= 0.4;
					}

					setContainerOffset(drag_offset + pane_offset);
					break;
				case 'swipeleft':
					resetScroller();
					self.next();
					ev.gesture.stopDetect();
					break;
				case 'swiperight':
					resetScroller();
					self.prev();
					ev.gesture.stopDetect();
					break;
				case 'release':
					//more then 50% moved, navigate (pane_width/2)
					//update to 33%
					if(Math.abs(ev.gesture.deltaX) > pane_width/3) {
						resetScroller();
						if(ev.gesture.direction == 'right') {
							self.prev();
						} else {
							self.next();
						}
					} else {
						self.showPane(current_pane, true);
					}
					break;
			}
		}
	element.hammer({ drag_lock_to_axis: true }).on('release dragleft dragright swipeleft swiperight', handleHammer);
}
var carousel = new Carousel('#wrapper');
carousel.init();