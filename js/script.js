
//Get API data
$(document).ready(function(){
  $('button').click(function(){
   const name = $('#nameid').val();
   $('.imgchange').attr('src',`https://joeschmoe.io/api/v1/${name}`);

   if(!name) {
   	$('.imgchange').attr('src','img/placholder.jpg');
   	swal("Please enter your name!", {
	  buttons: false,
	  timer: 3000,
	}).then((value) => {
  		$('#nameid').focus();	
  		});
   	}
  });
 });

//Developed by Abdul
$(document).ready(function(){
    //Developer credit text
    $("#d-by").append(' <a href="https://getabdulsamad.com/">Developed by Abdul</a>');
    $("#d-by a").attr("target", "_blank");
});
