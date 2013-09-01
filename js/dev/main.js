/*global Modernizr */

////////////////////
//global variables//
////////////////////
var current_pane = 0;
var new_pane;
var $gum = $('#gum');
var $header = $('header');
var headerTop = $('header').offset().top;
var $headerLi = $header.find('li');
var $each = $gum.find('.each');
var $figure = $gum.find('.monitor, .email');
var $footer = $('footer');
var $body = $(document.body);
var timeOut;

////////////////
//reset height//
////////////////
var resetHeight = function resetHeight(){
	$gum.css('height',$each.eq(current_pane).height()+'px');
};

///////////////////////////
//reset monitor animation//
///////////////////////////
$(document).on('keydown',function(e){
	if (e.keyCode === 37 || e.keyCode === 39) {
		resetScroller();
	}
});
var resetScroller = function resetScroller(){
	clearTimeout(timeOut);
	$figure
		.addClass('out transitionless')
		.removeClass('in inning outing');
};

/////////////////////
//monitor animation//
/////////////////////
var monitorAnimation = function monitorAnimation(){
	var timer;
	$figure
		.children('div')
		.on('click',function(){
			var $this = $(this);
			var $thisFigure = $this.parent();

			$thisFigure.removeClass('transitionless');

			switch ($this.closest('.each')[0].id) {
				case 'wywh':
					timer = 3500;
					break;
				case 'stylepro':
				case 'emailc':
					timer = 2000;
					break;
			}

			if ($thisFigure.hasClass('out')) {
				$thisFigure
					.addClass('inning')
					.removeClass('out outing');
				timeOut = setTimeout(
					function(){
						$thisFigure
							.addClass('in')
							.removeClass('inning');
					},
				timer);
			} else if ($thisFigure.hasClass('in')) {
				$thisFigure
					.addClass('outing')
					.removeClass('in inning');
				timeOut = setTimeout(
					function(){
						$thisFigure
							.addClass('out')
							.removeClass('outing');
					},
				timer);
			}
		});
}();

////////////////////
//browser resizing//
////////////////////
if (!Modernizr.touch){
	var resize = true;
	$(window).on('resize',function(){
		if (resize) {
			clearTimeout(resize);
			resize = false;
			setTimeout(function(){
				resize = true;
				resetHeight(current_pane);
			},250);
		}
	});
}

///////////////////////
//scrolling functions//
///////////////////////
var scrollInit = function(){
	var offset = $(document).scrollTop(); //intial value

	var $wywh = $('#wywh');
	var $wywhContact = $wywh.find('#contact');
	var wywhContactTop = $wywhContact.offset().top;
	var $wywhLegalPrivacy = $wywh.find('#legal-privacy');
	var wywhLegalPrivacyTop = $wywhLegalPrivacy.offset().top;

	var $email = $('#emailc').find('figure:last-child');
	var emailTop = $email.offset().top;

	//initial check
	if (Modernizr.cssanimations) {
		$gum.addClass('init');
	}
	if (!Modernizr.touch && offset > headerTop) {
		$header.addClass('in');
	}

	//set scrolling interval
	var scroll = true;
	//fixed header
	$(window).on('scroll',function(){
		if (scroll) {

			clearTimeout(scroll);
			scroll = false;

			setTimeout(function(){

				scroll = true;
				offset = $(document).scrollTop();

				if (Modernizr.touch) {
					if (offset > headerTop + 100) {
						$header.addClass('in');
					} else {
						$header.removeClass('in');
					}
				} else {
					if (offset > headerTop) {
						$header.addClass('in');
					} else {
						$header.removeClass('in');
					}
				}

				switch(current_pane){
					case 0:
						if (offset > wywhContactTop - 500) {
							$wywhContact.addClass('in');
						}

						if (offset > wywhLegalPrivacyTop - 500) {
							$wywhLegalPrivacy.addClass('in');
						}
						break;
				}

			},50);
		}
	});
}();

//////////////
//navigation//
//////////////
var navInit = function(){
	var percentage = '0';
	$headerLi.on('click',function(){
		var $thisIndex = $(this).index();
		current_pane = $thisIndex;

		$headerLi
			.removeClass('active')
			.eq($thisIndex)
			.addClass('active');

		switch($thisIndex) {
			case 0:
				percentage = '0';
				break;
			case 1:
				percentage = '-25';
				break;
			case 2:
				percentage = '-50';
				break;
			case 3:
				percentage = '-75';
				break;
		}

		//hide page & make reset figures instant
		$gum.addClass('out').removeClass('animate');

		//wait until the page is completely hidden, 0.3s
		setTimeout(function(){
			//reset page height
			resetHeight();

			//reset figures
			resetScroller();

			//set height to top if header has class in
			if ($header.hasClass('in')) {
				document.body.scrollTop = document.documentElement.scrollTop = headerTop + 100;
			}

			//change to page requested
			if (Modernizr.csstransforms3d) {
				$gum.css('transform', 'translate3d('+ percentage +'%,0,0) scale3d(1,1,1)');
			} else if (Modernizr.csstransforms) {
				$gum.css('transform', 'translate('+ percentage +'%,0)');
			} else {
				var px = (($gum.width()*5) / 100) * percentage;
				$gum.css('left', px+'px');
			}

			//unhide page -- make these slightly slower on touch devices
			if (Modernizr.touch) {
				setTimeout(function(){
					$gum.removeClass('out');
				},50);
			} else {
				$gum.removeClass('out');
			}
		},300);
	});
}();

/////////
//email//
/////////
(function(){
	//on click
	$footer.on('click',function(evFooter){
		$footer.addClass('in');
		evFooter.stopPropagation();
	});
	//on off
	if (Modernizr.touch) {
		$gum.on('touchstart',function(){
			$footer.removeClass('in');
		});
	} else {
		$body.on('click',function(){
			$footer.removeClass('in');
		});
	}
})();