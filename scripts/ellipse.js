

function ellipseCalculation(){

    const elainput = document.getElementById('ela');
    const elatext =elainput.value ;
    const a = parseFloat(elatext);
    console.log(a);

    const elbinput = document.getElementById('elb');
    const elbtext =elbinput.value ;
    const b = parseFloat(elbtext);
    console.log(b);

    const area = 3.1416 * a * b ;
    console.log(area)

    const dispaly = document.getElementById('ell-area');
    dispaly.innerText = area ;
}