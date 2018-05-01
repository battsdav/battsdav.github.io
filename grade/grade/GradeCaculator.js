var numberOfScores= "<input type='text' class='form-control inputText' id='text'>";
var quantity = "#students.val";


$(function(){
   newNumber();  
});

var newNumber = function(){
  $(".btn-submit").click(function(){
    $(".score").append(numberOfScores);
  });
};

var caculate = function(){
 $(".btn-caculate").click(function(){
    $(".score").mult(numberOfScores); 
 });   
};