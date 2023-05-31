
/*
DEDICO ESTE CODIGO A EL PEPE, A ETE SETCH A MAMI PRUNIA

MAIN DEBUGGER:
GERSON GIRÓN

*/


let list = JSON.parse(localStorage.getItem("list"));
let n = list.length;
let media = getMedia(list);

let xifsum = 0;
let fsum = 0;
let sum1 = 0; 
let sum2 = 0;
list.forEach(e => {



    //VARIABLES PARA EL LOOP
    let xi = (e.lim_inf + e.lim_sup)/2 
    let xif = xi * e.frec;
    let xidifmedi = xi-media;
    let abs = Math.abs(xidifmedi);
  
    let fabs = e.frec * abs;


    let abssq = Math.pow(abs, 2);
    let fabssq = e.frec * abssq.toFixed(2);

    //SUMATORIAS
    fsum += e.frec;
    xifsum += xif;
    sum1 += fabs;
    sum2 += fabssq;
    

    container.innerHTML += `   
    <tr>
        <td>${e.lim_inf} - ${e.lim_sup}</td>
        <td>${e.frec}</td>
        <td>${xi.toFixed(1)}</td>
        <td>${xif.toFixed(1)}</td>
        <td>${xidifmedi.toFixed(2)}</td>
        <td>${abs.toFixed(2)}</td>
        <td>${fabs.toFixed(2)}</td>
        <td>${abssq.toFixed(2)}</td>
        <td>${fabssq.toFixed(2)}</td>
    </tr>`;
});


container.innerHTML += `
<tr>
    <td></td>
    <td>${fsum.toFixed(2)}</td>
    <td></td>
    <td>${xifsum.toFixed(2)}</td>
    <td></td>
    <td></td>
    <td>${sum1.toFixed(2)}</td>
    <td></td>
    <td>${sum2.toFixed(2)}</td>
</tr>



`;





document.getElementById("media_output").innerHTML = `<b>${media}</b>`; 

document.getElementById("DM_output").innerHTML = `<b>${getDM(sum1, getN(list)).toFixed(2)}</b>`; 

document.getElementById("V_output").innerHTML = `<b>${getV(sum2, getN(list)).toFixed(2)}</b>`; 

document.getElementById("DE_output").innerHTML = `<b>${Math.sqrt(getV(sum2, getN(list))).toFixed(2)}</b>`; 




function getN(arr){
let n = 0;

arr.forEach( e => {n += e.frec;});

return n;

}

function getMedia(arr){

    let fsum = 0;
    let n = getN(list);
    let xifsum_med = 0;
    arr.forEach( e => {

        let xi = (e.lim_inf + e.lim_sup)/2 
        let xif_med = xi * e.frec;
        xifsum_med += xif_med;

        fsum = xifsum_med;
 
    })

    let media = fsum / n;

    return media.toFixed(2);
}


function  getV(sum2, n){


    let num = n-1
    let v = sum2 / num;

    return v;

}


function  getDM(sum1, n){

    let dm = sum1 / n;

    return dm;


}