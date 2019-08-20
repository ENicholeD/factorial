$(document).ready(function(){
  function factorial(num){
    if(num===0){
      return 1
    }
    else {
      return num*factorial(num-1);
    }
  }
  $("#form").submit(function(event){
      event.preventDefault();
      var userInput = parseInt($("input").val());
      var answer = factorial(userInput);
      $(".answer").text("The answer is: " + answer);

  });
});
