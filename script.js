//Compute interest rate and display message
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var message = "If you deposit <mark>" + principal + "</mark>,<br /> at an interest rate of <mark>" + rate + "</mark>.<br />You will receive an amount of <mark>" + interest + "</mark>,<br />in the year <mark>" + year + "</mark><br /><br />";
    document.getElementById("result").innerHTML=message;
//Set focus back to principal box once computed
    document.getElementById("principal").focus();
}

//Update rate based on slider
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

//Validate that principal value is a positive number
function validatePrincipal() {
    var principal = document.getElementById("principal");
    if(principal.value > 0)
     {return false;}
    else{
        alert("Enter a positive number");
    }

}