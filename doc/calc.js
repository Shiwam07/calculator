$(document).ready(function () {
  $(".displayValue").click(function () {
    const numValue = $(this).text();
    $("#display").append(numValue);
  });
  $(".operator").click(function () {
    const operator = $(this).text();
    $("#display").append(operator);
  });
  $(".del").click(function () {
    const displayValue = $("#display").text();
    const slicedValue = displayValue.slice(0, displayValue.length - 1);
    $("#display").text(slicedValue);
  });
  $(".allClear").click(function () {
    $("#display").text("");
    $("#calculate").text("");
  });
  $(".equals").click(function () {
    const displayedValue = $("#display").text();
    function calculate(value) {
      return new Function("return " + value)();
    }
    try {
      const calculatedValue = calculate(displayedValue);
      $("#calculate").text(calculatedValue);
    } catch (error) {
      $("#calculate").text("Error");
    }
    $("#display").text("");
  });
});
