
function pentagonCalculation(){
      const p = getInputValueById('pen-b')
      console.log(p);

      const b = getInputValueById('pen-b');
      console.log(b);

      const area = 0.5 * p * b ;
      console.log(area);
 
       setInnerTextById('pen-area' , area)

}

function getInputValueById(inputFiledId){
    const inputField = document.getElementById(inputFiledId);
    const inputFieldText = inputField.value ;
    const value = parseFloat(inputFieldText);
    return value ;
}


function setInnerTextById(elementId , area){
  const element = document.getElementById(elementId);
   element.innerText = area ;
}











// function pentagonCalculation(){
//      const penPinput = document.getElementById("pen-p");
//      const penPtext = penPinput.value ;
//      const p = parseFloat(penPtext);
//      console.log(p);


//      const penbinput = document.getElementById("pen-b");
//      const penbtext = penbinput.value ;
//      const b = parseFloat(penbtext);
//      console.log(b);

//      const area = 0.5 * p * b ;
//      console.log(area)

//      const dp = document.getElementById('pen-area');
//      dp.innerText = area ;
// }