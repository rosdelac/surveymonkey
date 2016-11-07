$(document).ready(function() {
//==============================================================================
//Ocultar las formas
//==========================================================
	$('#registerform').hide();
  $('#loginform').hide();
//==============================================================================
//Botones de inicio y registro
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
//Make the survey
//==============================================================================  
  $('body').on('click','#btn_title',function(event) {
      event.preventDefault();
      var cadena = $(this).parent().parent().serialize();
      console.log(cadena);
       $.post('/make/survey/title',cadena,function(data)
      {       
        $("#survey_panel").html(data);
       });
    });
//==============================================================================  
  $('body').on('click','#btn_question',function(event) {
      event.preventDefault();
      var cadena = $(this).parent().parent().serialize();
      console.log(cadena);
      // $.post('/user/ini',cadena,function(data)
      // {       
      //   $("#principal").html(data);
      // });
    });
//==============================================================================  
//==============================================================================  


});
