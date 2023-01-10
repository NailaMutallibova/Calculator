$(document).ready(function() {
    var firstNumber;
    var secondNumber;
    var operator;
    var result;
    var isOperatorChosen;
    var isCalculated;

    function initializeCalculator() {
      firstNumber = "";
      secondNumber = "";
      operator = "";
      isOperatorChosen = false;
      isCalculated = false;

      $("#first-number, #second-number, #operator, #result").empty();
    }

    $(".number").on("click", function() {
      if (isCalculated) return;
      if (isOperatorChosen) {
        secondNumber += this.value;
        $("#second-number").html(secondNumber);

      }
      else {
        firstNumber += this.value;
        $("#first-number").html(firstNumber);
      }
    });
    $(".operator").on("click", function() {
      
      if (!firstNumber || isCalculated) return;

      isOperatorChosen = true;
      operator = this.value;

      $("#operator").html($(this).text());

    });


    $(".equal").on("click", function() {
      if (isCalculated) return;

      isCalculated = true;
      firstNumber = parseInt(firstNumber);
      secondNumber = parseInt(secondNumber);

      if (operator === "plus") {
        result = firstNumber + secondNumber;
      }
      
      else if (operator === "minus") {
        result = firstNumber - secondNumber;
      }

      else if (operator === "times") {
        result = firstNumber * secondNumber;
      }

      else if (operator === "divide") {
        result = firstNumber / secondNumber;
      }

      else if (operator === "power") {
        result = Math.pow(firstNumber, secondNumber);
      }

      $("#result").html(result);
    });

    $(".clear").on("click", function() {

      initializeCalculator();

    });
    initializeCalculator();
  });