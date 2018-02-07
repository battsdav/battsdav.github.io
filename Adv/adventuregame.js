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
      $(".buttons").hide();
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
      $(".buttons").hide();
        
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
       
        question7();
    })
    
    $(".q5-decline").click(function(){
      $(".q5-choice").append("Decline").show();
      
        question15();  
    })
};
var question6 = function(){
    
    $("div.narrative, span.q6").html("Nobunaga dies as soon as he wakes up.");
    $(".buttons").html("<button class='btn btn-primary q6-restart'>Restart</button>");
    $(".q6-restart").click(function(){
        question1();
    })
};

var question7 = function(){
    
    $("div.narrative, span.q7").html("He gives you a sword for doing the favor, what will you use it for?");
    $(".q7").show();
    $(".buttons").html("<button class='btn btn-primary q7-army'>Start Army</button>");
    $(".buttons").append("<button class='btn btn-primary q7-adventure'>Go on Adventure</button>");
    $(".q7-army").click(function(){
        $(".q7-choice").append("Start Army").show();
        question9();
    })
    
    $(".q7-adventure").click(function(){
      $(".q7-choice").append("Go on an Adventure").show();
      
        question14();  
    })
};

var question8 = function(){
    
    $("div.narrative, span.q8").html("The old man kills you.");
    $(".buttons").html("<button class='btn btn-primary q8-restart'>Restart</button>");
    $(".q8-restart").click(function(){
        question1();
    })
    
};

var question9 = function(){
    
    $("div.narrative, span.q9").html("Move army west?");
    $(".q9").show();
    $(".buttons").html("<button class='btn btn-primary q9-west'>Move west</button>");
    $(".buttons").append("<button class='btn btn-primary q9-east'>Move east</button>");
    $(".q9-west").click(function(){
        $(".q9-choice").append("Move West").show();
        question10();
    })
    
    $(".q9-east").click(function(){
      $(".q9-choice").append("Move East").show();
      
        question11();
    })
};

var question10 = function(){
    
    $("div.narrative, span.q10").html("The enemy has a larger force, will you fight them head on or use a pincer attack?");
    $(".q10").show();
    $(".buttons").html("<button class='btn btn-primary q10-headon'>Head on</button>");
    $(".buttons").append("<button class='btn btn-primary q10-pincer'>Pincer Attack</button>");
    $(".q10-headon").click(function(){
        $(".q10-choice").append("Head on").show();
        $(".buttons").hide();
        question12();
    })
    
    $(".q10-pincer").click(function(){
      $(".q10-choice").append("Pincer Attack").show();
      $(".buttons").hide();
        question13();
    })
};

var question11 = function(){
    
    $("div.narrative, span.q11").html("You are attacked by bandits at night and are killed.");
    $(".buttons").html("<button class='btn btn-primary q11-restart'>Restart</button>");
    $(".q11-restart").click(function(){
        question1();
    })
    
};

var question12 = function(){
    
    $("div.narrative, span.q12").html("The enemy was too strong, you and all your men are defeated.");
    $(".buttons").html("<button class='btn btn-primary q12-restart'>Restart</button>");
    $(".q12-restart").click(function(){
        question1();
    })
    
};

var question13 = function(){
    
    $("div.narrative, span.q13").html("You were able to defeat your enemy and become ruler of the kingdom.");
    
};

var question14 = function(){
    
    $("div.narrative, span.q14").html("You are robbed and murdered in your sleep.");
    $(".buttons").html("<button class='btn btn-primary q14-restart'>Restart</button>");
    
    $(".q14-restart").click(function(){
        question1();
    })
};

var question15 = function(){
    
    $("div.narrative, span.q15").html("Offended the old man kills you.");
    $(".buttons").html("<button class='btn btn-primary q15-restart'>Restart</button>");
    $(".q15-restart").click(function(){
        question1();
    })
};