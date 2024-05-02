document.getElementById("button").addEventListener("click",  function(){
    let result = 0;
    const selectAnswerOne = document.querySelector('input[name="select-answer-q1"]:checked');
    const selectAnswerTwo = document.querySelector('input[name="select-answer-q2"]:checked');
    
    if (selectAnswerOne && selectAnswerTwo) {
        if(selectAnswerOne.value === "Beograd") {result ++}
        if(selectAnswerTwo.value === "Washington") {result ++}
    }
  console.log(result); 
  
  const displyaResult = document.getElementById("result");
  displyaResult.textContent = `Your result is ${result} out of 2!`;
});
