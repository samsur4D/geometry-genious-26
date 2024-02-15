
function calculateParaArea(){
   const base = getInputValueById('pb');
   console.log('Base Value is' , base)

   const height = getInputValueById('ph');
   console.log('Height Value is' , height)

   const area =  base * height ;
   console.log('Area is' , area)

   setInnerTextById('para-area' , area)
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value ;
    const inputValue = parseFloat(inputValueText);
    return inputValue ;
}

function setInnerTextById(elemetId , area){
    const element = document.getElementById(elemetId);
    element.innerText = area ;
}











// function calculateParaArea(){
//      const paraInput = document.getElementById('pb');
//      const paraText = paraInput.value ;
//      const base = parseFloat(paraText);
//      console.log(base)

//      const paraHinput = document.getElementById('ph');
//      const paraHeightText = paraHinput.value ;
//      const height = parseFloat(paraHeightText);
//      console.log(height); 

//      const area = base * height ; 
//      console.log('Area of the parallelogram is' , area)

//      const dispalypara = document.getElementById('para-area');
//      dispalypara.innerText = area ;
// }