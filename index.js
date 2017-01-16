function monthlyPayment() {
    //gets the values from user input and select
    var rate = document.getElementById("interestRate").value;
    var loanBalance = document.getElementById("loanBalance").value;
    var term = document.getElementById("loanTerm").value;
    var period = document.getElementById("period").value;
    // var periodNumber = period.option[period.selectedIndex].value;


    //equation for monthly payments 
    //console.log to check to see if every var is working correctly
    var monthlyInterestRate = (rate / 100) / period;
    //console.log(monthlyInterestRate);

    var numberOfPayments = term * period;
    //console.log(numberOfPayments);

    var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);
    //console.log(compoundedInterestRate);

    var interestQuotient = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);
    //console.log(interestQuotient);

    var totalMonthlyPayment = parseInt(loanBalance * interestQuotient);
    //console.log(totalMonthlyPayment);

    console.log(totalMonthlyPayment);

  

    var printTotal = "You pay $" + totalMonthlyPayment + " per period";
    console.log(printTotal);

    document.getElementById("paragraph").innerHTML = printTotal;

   
}

//AJ
//CM
