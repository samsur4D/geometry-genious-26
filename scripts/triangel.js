

//        * Objective: get base, height of a triangle. Calculate the area by using the provided formula.
//          and then display the area.
//        * step -1 : get base value of the triangle
//        * step -2 : added an id in the base input field
//        * step -3 : use getElementById to access the input field
//        * step -4 : get value from the input field. (value is string now)
//        * step -5 : convert the value to a number. use parseFloat 

//  1  

function calculateTriangelArea(){
    //    get base value of triangel
   const triangelBaseInput = document.getElementById('triangel-base');
   const triangelBaseText = triangelBaseInput.value ;
   const base = parseFloat(triangelBaseText);
   console.log(base);  

//       get height value of triangel
   const triangelHeightInput = document.getElementById('triangel-height');
   const triangelHeightText = triangelHeightInput.value ;
   const height = parseFloat(triangelHeightText);
   console.log(height);

//       calculate triangel area
   const area = 0.5 * base * height ;
   console.log('Area of The TriAngel is' ,  area)

//      dispaly area of triangel
   const triangelAreaSpan = document.getElementById('triangel-area');
   triangelAreaSpan.innerText = area ;
}