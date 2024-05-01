function quiz(){
    let result = 0;
    const selectAnswer = document.getElementsByTagName("input");
    for (let i = 0; i < selectAnswer.length; i++) {
        if (selectAnswer[i].checked === true)
        
        console.log(selectAnswer[i].value);
    }
  
}
quiz();