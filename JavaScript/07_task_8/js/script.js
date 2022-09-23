var marks = 25;
if (marks >= 25) {
    console.log("Qualified");
}

function Qualified(marks) {
    if (marks >25) {
        console.log("Qualified");
    }
}
Qualified(100);
var population=1000000;
if(population>=90000){
    console.log("in india");
}
else{
    console.log("not in india");
}
    function voter(age){
    console.log("check Eligibility:");
    if(age>18){
        console.log("Eligible");
    }else{
        console.log("Not Eligible")
    }
}
voter(20);

function people(age){
    if(age>=26 && age<=49){
        console.log("young")
    }
    else if(age>=50 && age<=69){
        console.log("middle")
    }
    else if(age>=70 && age<=74){
        console.log("older")
    }
    else if(age>=75 && age<=100){
        console.log("olders");
    }
    else{
        console.log("death");
    }
}
people(prompt("Enter age"));

var liquorprice=(prompt("Enter liquor price "));
if(liquorprice==500){
    console.log("price is equal")
}
if(liquorprice>1000){
    console.log("liquorprice greater than 1000")
}
if(liquorprice<3000){
    console.log("liquorprice less than 3000")
}
function lovebreakup(age){
    if(age>24){
        if(age>36){
            if(age>75){
                if(age>100){
                    console.log("enduku painikirani waste fellows:   ");
                }
            }
        }
    }
}
lovebreakup(prompt("Enter age"));
