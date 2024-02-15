

function rhombosCalculation(){
    const rd1input = document.getElementById('d1');
    const rd1text =rd1input.value ;
    const d1 = parseFloat(rd1text);
    console.log(d1)

    const rd2input = document.getElementById('d2');
    const rd2text =rd2input.value ;
    const d2 = parseFloat(rd2text);
    console.log(d2)

    const area = 0.5 * d1 * d2 ;
    console.log('Area of rohmbos is' , area)

    const dispalyArea = document.getElementById('roh-area');
    dispalyArea.innerText = area ;
}