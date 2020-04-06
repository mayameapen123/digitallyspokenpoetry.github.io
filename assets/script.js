document.addEventListener("DOMContentLoaded", initialize);

var input_container = document.getElementById('errorspot');



$("#verse1").hide();
  $("#casc").hide();
  $("#leaving").hide();
$("#tartliq").hide();
$("#tartliq2").hide();
$("#wave").hide();
$("#teasing").hide();
$("#down").hide();
$("#bare").hide();
$("#n").hide();
$("#de").hide();
$("#line1").hide();
$("#line2").hide();
  $("#downn").hide();

function initialize(){
  if (annyang) {
    var commands = {
      'The sting of criticism': sayCrit,
      'A drop' : sayDrop,
      'off lemon juice' : sayJuice,
      'Cascades' : sayCascades,
      'Down my finger' : sayDown,
      'leaving a trail' : sayTrail,
     
      'Tarte liquid' : sayTart,
      'hi' : sayHi,
      'Making its way into my' : sayTeasing,
      'Bare' : sayBare,
      'Exposed' : sayExposed,
      'Flesh' : sayFlesh,
      'Lush' : sayFlesh,
      'Splash' : sayFlesh,
      'Flash' : sayFlesh,
      'Like needles piercing' : sayNeedles,
      'Deeper and deeper' : sayDeep,
      'Like an insecure soul' : saySoul,
      'vulnerable to a drop of criticism' : sayCriticism,
      'how (are) you (doing)': computerState,
      'I am feeling *splat': questionFeeling
    }

    annyang.addCommands(commands);

    // Click Handler to start annyang
    
    // Click Handler to abort annyang
 
  annyang.start();
   
    annyang.addCallback('start', startFunction);

    // Fired as soon as any sound (possibly speech) has been detected.
    // This will be useful for state 2, Begining an input
    annyang.addCallback('soundstart', soundStarted);

    // Fired as soon as some speech was identified. 
    // This will be useful for state 3, Acknowledge received input
    // The resultFunction will contain one argument 'phrases' which is an array 
    // of all possible detected phrases
    annyang.addCallback('result', resultFunction);

    // Fired when what the user said didn't match any of the registered 
    // commands. This would be a great callback to use for state 5, your error state.
    annyang.addCallback('resultNoMatch', resultNoMatch);
  }
}

$("#p2").click(function(){
$("#casc").show();
   $("#d").css("opacity",0);
$("#r").css("opacity",0);
$("#pe").css("opacity",0);

// of lemon juice low opacity
$("#yellow").css("opacity","20%");
$("#juice").css("opacity","20%");
})

function startFunction(){
  // disabling button and enabling stop button
// $("body").css("background-color","Red");
  $("body").css({'background-image' : 'url("explode4.gif")',
      'background-repeat': 'no-repeat'});

}

function soundStarted(){
  // show ear gif once sound starts

}

function resultFunction(phrases){
  // show result arrow once sound starts
 // document.body.classList.add('result_ready'); 

  // loop through 'phrases' and insert string into 'input text' using 'insertAdjacentHTML'
  // full documentation of this function can be found: https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
 // for (var i = 0; i < phrases.length; i++) {
   // input_container.insertAdjacentHTML('beforeend', (i + 1) + '. ' + phrases[i] + '<br>');
 // }

  // call function which 'aborts' annyang
//  abort();
}

function abort(){
  // reset state of ear gif
  document.getElementById('listening').classList.remove('visible');

  // enable button so the user can restart the application
  button.classList.remove('disabled');

  // disable stop button
  stop_button.classList.add('disabled');

  // stop annyang
  annyang.abort()
}

function sayCrit(){
 $("body").css({'background-image': 'none'});
 $("#title").hide();
 $("#verse1").show();
 $("#yellow").css("opacity","20%");
 $("#juice").css("opacity","20%");
}

function sayDrop(){
 $("#d").css("opacity",100);
$("#r").css("opacity",100);
$("#pe").css("opacity",100);

$("#d").animate({
    height: "200px"
  }, 1000, function() {
  });


 $("#r").animate({
    height: "50px"
  }, 800, function() {
  });

 $("#pe").animate({
    height: "220px"
  }, 900, function boldify(){
  $("#yellow").css("opacity","100%");
 $("#juice").css("opacity","100%");
 $("#drop").css("opacity","20%");
$("#firsta").css("opacity","20%");
$("#d").css("opacity","20%");
$("#r").css("opacity","20%");
$("#pe").css("opacity","20%");
 });


 
}

function sayJuice(){
$("#casc").show();
   $("#d").css("opacity",0);
$("#r").css("opacity",0);
$("#pe").css("opacity",0);

// of lemon juice low opacity
$("#yellow").css("opacity","20%");
$("#juice").css("opacity","20%");
}

function sayCascades(){
$("#casc").hide();

 $("#cgif").append('<img id="cascades" src="finalcascade.gif" no loop />');
 $("#cgif").delay( 800 ).hide(0,nextd);


function nextd(){
  $("#lemju").hide();
  $("#downn").show();
  //$("body").css({"background-image":"url(downfinger3.gif)"},
   // {"opacity": "30%"}); 
  $("#cgif").hide();

}

}

function sayDown(){
  $("#downn").css("opacity","20%");

$("body").css({'background-image' : 'url("downfinger3.gif")',
      'background-repeat': 'no-repeat'});
   //$("body").css({"background-position":"0px 60px"}); 
    
setTimeout(function () {
  $("#p2").css("opacity","100%");
  $("#p2").css("background-color","#7754F2");
   $("#p1").css("opacity","10%");
   $("body").css({"background-image":"none"});
    $("#downn").hide();
    $("#leaving").show();
  }, 1700);
}
// function nextf(){
//$("#lemju").hide();
//$("#leaving").show();
//   $("#cgif").hide();
 // $("#leaving").show();
 // $("#lemju").hide();}
 //}

function sayTrail(){

$("#lea").css("opacity","20%");
  
   $("#trail").animate({
     right: '10%'
  }, 500, moveup)


function moveup(){
  $("#trail").animate({
     top: '+=-220px'
  }, 200, moveleft)
 }

function moveleft(){
  $("#trail").animate({
     right: '+=800px'
  }, 500, movedown)
 }

function movedown(){
  $("#trail").animate({
     top: '+=400px'
  }, 500, moveri)
 }

function moveri(){
  $("#trail").animate({
     right: '-=800px'
  }, 500, trailof)
 }

function trailof(){
  $("#trail").append(`<span id ="of"> of</span>`).delay(1000);
$("#leaving").hide();
  $("#tartliq").show();
  $("#tartliq2").show();
  $("#tartliq").css("opacity","10%");
}

}

function sayOf(){

$("#leaving").hide();
  $("#tartliq").show();
  $("#tartliq2").show();
  $("#tartliq").css("opacity","10%");

}


function sayTart()
            { $("#p3").css("opacity","100%");
              $("#p3").css("background-color","#7754F2");
   $("#p2").css("opacity","10%");

$("#wave").show(100, show2);}

function show2()
{
  $("#wave").animate({
    top:'200px'
  },1000 ,disapp);

  function disapp(){
    $("#wave").delay(1800).hide();
    $("#tartliq2").delay(1800).hide();
    $("#tartliq").delay().hide(showteas);
  }
  
function showteas(){
   $("#teasing").delay(100).show();
}

}     

function sayHi(){

  $("#wave").hide();
  $("#tartliq").hide();
  $("#tartliq2").hide();
  $("#teasing").show();
}         

function sayTeasing(){
  $("#teasing").css("color","Red");

 $("#teasing").delay( 1000 ).hide();
  $("#bare").delay( 1000 ).show();
 $("#E").css("opacity", "10%");
 $("#F").css("opacity", "10%");
}      

function sayBare(){
  $("#p4").css("opacity","100%");
  $("#p4").css("background-color","#7754F2");
   $("#p3").css("opacity","10%");
  $("#B").css("opacity","20%");
$("#E").css("opacity", "100%");
 
}    

function sayExposed(){
 $("#E").css({"font-family": "romeo-condensed",
"letter-spacing": "30px",
 "font-weight": "100",
"font-style": "normal"});
  $("#F").css("opacity", "100%").delay(1500);
  $("#E").css("opacity", "20%");
}    

$("#p3").click(function(){
    $("#bare").hide();
   $("#de").css("opacity", "0%");
  $("#n").show();
  $("#de").show();
})


function sayFlesh(){
  $("#bare").hide();
   $("#de").css("opacity", "0%");
  $("#n").show();
  $("#de").show();
}    


function sayNeedles(){
  $("#p5").css("opacity","100%");
  $("#p5").css("background-color","#7754F2");
   $("#p4").css("opacity","10%");
   $("body").css({"background-image":"url(deeper2.gif)"}); 
  // $("body").css({"background-position":"50px 30px"}); 
   $("#n").css("opacity", "20%");
   $("#de").css("opacity", "100%");
}    

function sayDeep(){
    
  $("#n").hide();
  $("#de").hide();
   

 $("#line1").show();
  $("#likean").css("opacity")
 
  $("#line2").css("opacity", "0%");
  $("#line2").show();

  function nobg(){
     $("body").css({"background-image":"none"}); 
  }
}    

function saySoul(){
  $("#p6").css("opacity","100%");
  $("#p6").css("background-color","#7754F2");
   $("#p5").css("opacity","10%");
  $("#line1").css("opacity", "20%");
$("#line2").css("opacity", "100%");
}

function sayCriticism(){
  $("#line1").css("opacity", "0%");
  
  $("body").css({"background-image":"url(dropofcrit.gif)"}); 

setTimeout(function () {
  
  $("#line2").css("opacity","0%");
  }, 300);



    
  $("body").css({"background-image":"url(dropofcrit.gif)"}); 
  //$("body").css({"background-position":"100px 100px"}); 
}


function computerState(){
  generateText("Not the best :(", false); 
}

function questionFeeling(splat){
  generateText("Why are you feeling " + splat + '?', false);   
}

function resultNoMatch(phrases){


  // show result arrow once sound starts


  // loop through 'phrases' and insert string into 'input text' using 'insertAdjacentHTML'
  // full documentation of this function can be found: https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
  for (var i = 0; i < phrases.length; i++) {
    input_container.insertAdjacentHTML('beforeend', ' ' + phrases[i] );

  }


}




function generateText(text, error){
  // create var 'div' and create element 'div';
  // createElement can be used for any html element
  // full documentation for this function can be found: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
  var div = document.createElement('div');

  // add message class to message
  div.classList.add('message');

  // if the second argument passed to generateText is true, also add an error class to div
  if (error){
    div.classList.add('error');
  }

  // set innerHTML of div to contain the text (first argument) passed to generateText
  div.innerHTML = text;

  // append div to output_container
  output_container.appendChild(div);

  // wait 500 miliseconds and then add the visible class to the div (this class changes the opacity and animates the message in)
  // full documentation of the setTimeout function can be found: https://www.w3schools.com/jsref/met_win_settimeout.asp
  setTimeout(function(){
    div.classList.add('visible');
  }, 500)
}