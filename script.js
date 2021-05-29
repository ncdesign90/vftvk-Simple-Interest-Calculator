

#Compute interest rate and display message
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var message = "If you deposit " + principal + ",\n at an interest rate of " + rate + ".\nYou will receive an amount of " + interest + ",\nin the year " + year
    document.getElementById("result").innerText=message;
}

#Update rate based on slider
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

#Validate that principal value is a positive number
function validatePrincipal() {
  var checkInput = document.getElementById("pricipal");
  if (checkInput <= "0") {
    alert("Enter a positive number");
    return false;
  }
}