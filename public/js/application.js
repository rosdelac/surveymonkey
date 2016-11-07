$(document).ready(function() {
//==============================================================================
//Ocultar las formas
//==========================================================
	$('#registerform').hide();
  $('#loginform').hide();
//==============================================================================
//Botones
//==============================================================================
  $('#registerbutton').click(function(event) {
    event.preventDefault();
    $('#loginform').hide();
    $('#registerform').slideToggle();
  });
//==============================================================================
  $('#loginbutton').click(function(event) {
    event.preventDefault();
    $('#registerform').hide();
    $('#loginform').slideToggle();
  });
//==============================================================================
  $('body').on('click','#confirmregbutton',function(event) {
    event.preventDefault();
    var cadena = $(this).parent().parent().parent().serialize();
    $.post('/user/reg',cadena,function(data)
    {       
      $("#principal").html(data);
    });
  });
//==============================================================================  
  $('body').on('click','#confirmloginbutton',function(event) {
    event.preventDefault();
    var cadena = $(this).parent().parent().parent().serialize();
    $.post('/user/ini',cadena,function(data)
    {       
      $("#principal").html(data);
    });
  });
//==============================================================================  
//==============================================================================  
//==============================================================================  
//==============================================================================  
//==============================================================================  


});
