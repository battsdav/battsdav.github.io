$(function(){
//SCOPE !!! !!! !!!
//GLOBAL vs. LOCAL VARIABLES
//PROPER WAY
var quantity = 0
var southparkquantity = 0
var nierquantity = 0
var shadowquantity = 0
var tax = .07
var personaprice = 43.00
var southparkprice = 49.00
var nierprice = 50.00
var shadowprice = 59.00

    $(".persona").click(function(){
        
        //INPUT parseInt($("#quantity").val());
        quantity += 1;
       
       
        
        //CALCULATE
        //var answer = 0 + quantity
        
        //OUTPUT
        //$(".answer").css("font-size", "32px");
        $("#quantity").val(quantity);
 
    });
    
       $(".southpark").click(function(){
        
        //INPUT parseInt($("#quantity").val());
        southparkquantity += 1;
       
        
        //CALCULATE
        //var answer = 0 + quantity
        
        //OUTPUT
        //$(".answer").css("font-size", "32px");
        $("#southparkquantity").val(southparkquantity);
    })
    
       $(".nier").click(function(){
        
        //INPUT parseInt($("#quantity").val());
        nierquantity += 1;
       
        
        //CALCULATE
        //var answer = 0 + quantity
        
        //OUTPUT
        //$(".answer").css("font-size", "32px");
        $("#nierquantity").val(nierquantity);
    })
    
          $(".shadow").click(function(){
        
        //INPUT parseInt($("#quantity").val());
        shadowquantity += 1;
       
        
        //CALCULATE
        //var answer = 0 + quantity
        
        //OUTPUT
        //$(".answer").css("font-size", "32px");
        $("#shadowquantity").val(shadowquantity);
    })
    
     $(".get").click(function(){
        
        //INPUT
       personaquantity = parseInt($("#quantity").val());
       southparkquantity = parseInt($("#southparkquantity").val());
       nierquantity = parseInt($("#nierquantity").val());
       shadowquantity = parseInt($("#shadowquantity").val());

        //CALCULATE
        var total = (personaprice * personaquantity) + (southparkprice * southparkquantity) + (nierprice * nierquantity) + (shadowprice * shadowquantity)
        var taxes = total * tax
        tax2=taxes.toFixed(2)
        var grandtotal = total + taxes
        //OUTPUT
        $(".total2").css("font-size", "32px");
        $(".total2").html(total);
        $(".tax2").css("font-size", "32px");
        $(".tax2").html(tax2);
        $(".grandtotal2").css("font-size", "32px");
        $(".grandtotal2").html(grandtotal);
        
    });
})