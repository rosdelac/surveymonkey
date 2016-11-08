$(document).ready(function() {
//==============================================================================
//Ocultar las formas
//==========================================================
	$('#registerform').hide();
  $('#loginform').hide();
  var title = "";
  var questions = [];
  var options = [];
  var count = 0;
  var panels = 0;
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
      title = $('#comment').val();
      make_survey();
      panels = panels + 1;
      make_panel();
      make_panel_elements();
  });
//==============================================================================  
  $('body').on('click','#btn_question',function(event) {
      event.preventDefault();
      questions.push($('#comment').val());
      questions.push($('#comment').val());
      make_question(questions.pop());
    });
//==============================================================================  
  $('body').on('click','#btn_option',function(event) {
      event.preventDefault();
      count = count + 1; 
      options.push($('#comment').val());
      options.push($('#comment').val());
      $('#comment').val("");
      make_option(options.pop());
    });
  //==============================================================================  
  $('body').on('click','#btn_end_question',function(event) {
      event.preventDefault();
      panels = panels + 1;
      make_panel();
      make_panel_elements();
      
    });
//==============================================================================  
  function make_survey() {
    $('#survey_panel').html("<h2 class='text-center'>" + title + "</h2>");
  };
  function make_panel() {
    $('#survey_panel').append('<div class="panel panel-default" id="panel_'+panels+'">');
    $('#survey_panel').append('</div>');
  }
  function make_panel_elements() {
    $('#panel_'+panels+'').append('<div class="panel-body">');
    $('#panel_'+panels+'').append("<form id='frm_survey'>");
    $('#panel_'+panels+'').append("<div class='form-group'>");
    $('#panel_'+panels+'').append("<textarea class='form-control' rows='2' id='comment' placeholder='Question...'></textarea>");
    $('#panel_'+panels+'').append("<button type='button' class='btn btn-default btn-sm' id='btn_question'><span class='glyphicon glyphicon-ok'></span> Commit question</button>");
    $('#panel_'+panels+'').append("</div>");
    $('#panel_'+panels+'').append("</form>");
    $('#panel_'+panels+'').append('</div>');
  }
  function make_question(question) {
    $('#panel_'+panels+'').html('<div class="panel-body">');
    $('#panel_'+panels+'').append('<h3> '+question+ '</h3>');
    $('#panel_'+panels+'').append("<form id='frm_survey'>");
    $('#panel_'+panels+'').append("<div class='form-group' id='div_option_"+panels+"'>");
    $('#panel_'+panels+'').append("<textarea class='form-control' rows='2' id='comment' placeholder='Option...'></textarea>");
    $('#panel_'+panels+'').append("<button type='button' class='btn btn-default btn-sm' id='btn_option'><span class='glyphicon glyphicon-ok'></span> Commit option</button>");
    $('#panel_'+panels+'').append('<button type="button" class="btn pull-right btn-sm" id="btn_end_question"><span class="glyphicon glyphicon-send"></span> End question </button>');
    $('#panel_'+panels+'').append("</div>");
    $('#panel_'+panels+'').append("</form>");
    $('#panel_'+panels+'').append('</div>');

  }
  function make_option(option) {
    $('#div_option_'+panels+'').append('<p>'+count+'. '+option+'</p>');
  }
  
    // <div class="panel-heading">Panel Heading</div>
    // 
    // <div class="panel-footer">Panel Footer</div>
  

});

// //Make the survey
// //==============================================================================  
//   $('body').on('click','#btn_title',function(event) {
//       event.preventDefault();
//       var cadena = $(this).parent().parent().serialize();
//       console.log(cadena);
//        $.post('/make/survey/title',cadena,function(data)
//       {       
//         $("#survey_panel").html(data);
//        });
//     });
// //==============================================================================  
//   $('body').on('click','#btn_question',function(event) {
//       event.preventDefault();
//       var cadena = $(this).parent().parent().serialize();
//       console.log(cadena);
//        $.post('/make/survey/question',cadena,function(data)
//       {       
//         $("#survey_panel").html(data);
//        });
//     });
// //==============================================================================  
//   $('body').on('click','#btn_option',function(event) {
//       event.preventDefault();
//       var cadena = $(this).parent().parent().serialize();
//       console.log(cadena);
//        $.post('/make/survey/option',cadena,function(data)
//       {       
//         $("#survey_panel").html(data);
//        });
//     });
// //==============================================================================  