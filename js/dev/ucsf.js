var ucsfHover = function(){
	var ucsf = $('#ucsf');
	var ucsfShirt = ucsf.find('figure > div');
	var ucsfHover = ucsf.find('li');

	ucsfHover.on('mouseenter',function(){
		switch ($(this).index()) {
			case 0:
				ucsfShirt.removeClass().addClass('bacteria-1');
				break;
			case 1:
				ucsfShirt.removeClass().addClass('bacteria-2');
				break;
			case 2:
				ucsfShirt.removeClass().addClass('bacteria-3');
				break;
			case 3:
				ucsfShirt.removeClass().addClass('bacteria-4');
				break;
		}
	});
}();