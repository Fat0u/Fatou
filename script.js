$(document).ready(function(){
// all jQuery methods go here...
$("#title").hover(on,off);
 function on(){
 	$(this).css('color', 'red');
 }
 function off(){
 $(this).css('color', 'black');	
 }
});
