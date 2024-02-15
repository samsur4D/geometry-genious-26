




function calculateRectangelArea(){
    const width = getInputById('rectangle-width');
    console.log(width);


    const length = getInputById('rectangle-length');
    console.log(length)

    const area = width * length ;
    console.log(area)

    setInnerTextById('rectangle-area' , area)
}


function getInputById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldText = inputField.value ;
    const inputText = parseFloat(inputFieldText);
    return inputText ;
}


function setInnerTextById(elementId){
    const element = document.getElementById(elementId);
    element.innerText = area ;
}


















// function calculateRectangelArea(){
//     const rectangelWidthInput = document.getElementById('rectangle-width');
//     const rectangleWidthText = rectangelWidthInput.value ;
//     const width = parseFloat(rectangleWidthText);
//     console.log(width);


//     const rectangelLengthInput = document.getElementById('rectangle-length');
//     const lengthText = rectangelLengthInput.value ;
//     const length = parseFloat(lengthText);
//     console.log(length);


//     const area = width * length ;
//     console.log('Area of the Rectangel is' , area)

//     const rSpan =document.getElementById('rectangle-area');
//     rSpan.innerText = area ;
// }