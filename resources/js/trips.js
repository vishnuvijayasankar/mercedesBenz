$(function () {
	$.getJSON('../assets/json/data.json', function(data) {
		$.each(data.Drivers, function(index, val) {
			$('#List').append('<li><a href="#" class="clicker2">'+val.name+'</a><ul id="'+val.id+'"><ul></li>');
			for(var i=0;i<val.trips.length;i++) {
				$('#'+val.id).append('<li><a href="#">'+val.trips[i]+'</a></li>');
			}		
		});
	});
	$('.click-nav > ul').toggleClass('no-js js');
  	$('.click-nav .js ul').hide();
  	$('.click-nav .js').click(function(e) {
    	$('.click-nav .js ul').slideToggle(200);
    	$('.clicker').toggleClass('active');
    	e.stopPropagation();
  	});
  	// $(document).click(function() {
	  //   if ($('.click-nav .js ul').is(':visible')) {
   //    		$('.click-nav .js ul', this).slideUp();
   //    		$('.clicker').removeClass('active');
   //  	}
  	// });

  	$('.click-nav .js > li > ul').toggleClass('js js2');
  	$('.js .js2 ul').hide();
  	$('.js .js2').click(function(e) {
    	$('.js .js2 ul').slideToggle(200);
    	$('.clicker2').toggleClass('active');
    	e.stopPropagation();
  	});
  	$(document).click(function() {
	    if ($('.js .js2 ul').is(':visible')) {
      		$('.js .js2 ul', this).slideUp();
      		$('.clicker2').removeClass('active');
    	}
  	});


});  
