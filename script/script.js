$( document ).ready(function() {
    
	$("button").mousedown(function(){
  		$("button").css({'background-color':'#e47a0f'});
	});
	$("button").mouseup(function(){
  		$("button").css({'background-color':'#ff891e'});
	});

	$("button").click(function () {
		setInterval("$('.main').css({'display':'none'})", 5000)
		
  	});


});