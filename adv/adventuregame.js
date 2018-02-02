$(function(){
    question1();
    
})



var question1 = function(){
  
    //UPDATING GRAPHICS
    $("div.narrative, span.q1").html("Would you like to be Asura or Nobunaga?");
    $(".q1").show();
    $(".buttons").html("<button class='btn btn-primary q1-asura'>Asura</button>");
    $(".buttons").append("<button class='btn btn-primary q1-nobunaga'>Nobunaga</button>");
    
  
    $(".q1-asura").click(function(){
        $(".q1-choice").append("Asura").show();
        question2();
    })
    
    $(".q1-nobunaga").click(function(){
      $(".q1-choice").append("Nobunaga").show();
        question6();  
    })
    
   
    
    
};

var question2 = function(){
    
    $("div.narrative, span.q2").html("Old man asks for help what do you do?");
    $(".q2").show();
    $(".buttons").html("<button class='btn btn-primary q2-help'>Help</button>");
    $(".buttons").append("<button class='btn btn-primary q2-rob'>Rob Him</button>");
    $(".q2-help").click(function(){
        $(".q2-choice").append("Help").show();
        question3();
    })
    
    $(".q2-rob").click(function(){
      $(".q2-choice").append("Rob Him").show();
        question8();  
    })
        
};

var question3 = function(){
    
    $("div.narrative, span.q3").html("Old man is gracious for your help, and asks would you like to stay the night?");
    $(".q3").show();
    $(".buttons").html("<button class='btn btn-primary q3-accept'>Accept</button>");
    $(".buttons").append("<button class='btn btn-primary q3-decline'>Decline</button>");
    $(".q3-accept").click(function(){
        $(".q3-choice").append("Accept").show();
        $(".buttons").hide();
        question4();
    })
    
    $(".q3-decline").click(function(){
      $(".q3-choice").append("Decline").show();
        question5();  
    })
};

var question4 = function(){
    
    $("div.narrative, span.q4").html("You have been murdered by the old man.");
    $(".q4").show();
    $(".q5").hide();   
};

var question5 = function(){
    
    $("div.narrative, span.q5").html("Old man asks for one more favor.");
    $(".q5").show();
    $(".buttons").html("<button class='btn btn-primary q5-accept'>Accept</button>");
    $(".buttons").append("<button class='btn btn-primary q5-decline'>Decline</button>");
    $(".q5-accept").click(function(){
        $(".q5-choice").append("Accept").show();
        $(".buttons").hide();
        question7();
    })
    
    $(".q5-decline").click(function(){
      $(".q5-choice").append("Decline").show();
        question6();  
    })
};
var question6 = function(){
    
    $("div.narrative, span.q6").html("Wrong choice refresh.");
    
};

var question7 = function(){
    
    $("div.narrative, span.q7").html("He gives you a sword for doing the favor, what will you use it for?");
    $(".q7").show();
    $(".buttons").html("<button class='btn btn-primary q7-army'>Start Army</button>");
    $(".buttons").append("<button class='btn btn-primary q7-adventure'>Go on Adventure</button>");
    $(".q7-army").click(function(){
        $(".q7-choice").append("Start Army").show();
        question7();
    })
    
    $(".q7-adventure").click(function(){
      $(".q7-choice").append("Go on an Adventure").show();
      $(".buttons").hide();
        question10();  
    })
};

var question8 = function(){
    
    $("div.narrative, span.q8").html("Wrong choice refresh.");
    
};

var question9 = function(){
    
    $("div.narrative, span.q9").html("Move army west?");
    $(".q9").show();
    $(".buttons").html("<button class='btn btn-primary q9-west'>Move west</button>");
    $(".buttons").append("<button class='btn btn-primary q7-adventure'>Go on Adventure</button>");
    $(".q7-army").click(function(){
        $(".q7-choice").append("Start Army").show();
        question7();
    })
    
    $(".q7-adventure").click(function(){
      $(".q7-choice").append("Go on an Adventure").show();
      $(".buttons").hide();
        question();  
    })
};