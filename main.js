function getPara1(){
    var inputs = [];
    for (let i = 1; i <=6; i++){
        inputs.push(document.getElementById("para_1_input_sentence_" + i).value);
        inputs.join(". ");
        document.getElementById("showPara1").innerHTML = inputs.join(". ");
      
    }
};
function getPara2(){
    var inputs2 = [];
    for (let i = 1; i <=6; i++){
        inputs2.push(document.getElementById("para_2_input_sentence_" + i).value);
        inputs2.join(". ");
        document.getElementById("showPara2").innerHTML = inputs2.join(". ");
      
    }
};