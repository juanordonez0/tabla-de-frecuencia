const myButton = document.getElementById("button");
var total = 0;




function hacer(){
let button1 = document.getElementById("button");

myButton.addEventListener("click", function() {
  myButton.disabled = true;
});


var cont = 0;
var tabla = document.getElementById("tb");

var data = document.getElementById("arr").value;
var ultdata = data.replaceAll(' ', '');
var datosstr = ultdata.split(','); 
var datos = []; 


for (var i = 0; i < datosstr.length; i++ ){
    datos.push(parseInt(datosstr[i]));
}
console.log(datos);

total = datos.length;





//un pequeño premio por ver mi codigo ;) (los datos del ejercicio de hoy):
//708, 713, 781, 809, 797, 793, 711, 681, 768, 611, 698, 836, 768, 532, 657, 559, 741, 792, 701, 753, 745, 681, 598, 693, 743, 444, 502, 739, 755, 835, 714, 517, 787, 714, 497, 636, 637, 797, 568, 714, 618, 830, 579, 818, 654, 617, 849, 798, 751, 731, 850, 591, 802, 756, 689, 789, 628, 692, 779, 756, 782, 760, 503, 784, 591, 834, 694, 795, 660, 651, 696, 795, 519, 638, 635, 682, 824, 603, 777, 709, 829, 722, 729, 783, 630, 753, 744, 752, 661, 604, 706, 594, 664, 782, 579, 611, 709, 697, 732, 796


var fn = 0;
var sum1 = 0;
var sum2 = 0;
var sum3 = 0;









var max_value = max_value(datos);
var min_value = min_value(datos);

var rango = max_value - min_value;
var k = Math.sqrt(datos.length);
var interval = Math.round(rango/k); 


var value = min_value;


console.log(datos.length);
console.log(max_value);
console.log(min_value);
console.log(interval);

do {
   
  let row = tabla.insertRow(-1); 

  var f = frecuencia(datos, value, value+interval-1);

  var num = f/total;
  var numci = num * 100;


  cont++;
 
  row.insertCell(0).innerText =value + " - " + (value + interval-1);
  row.insertCell(1).innerText =value-0.5 + " - " + ( (value + interval-1)+ 0.5);
  row.insertCell(2).innerText =((value-0.5) + ( (value + interval-1)+ 0.5))/2;
  row.insertCell(3).innerText = f;
  sum1 += f;
  row.insertCell(4).innerText = fn + f ;
  row.insertCell(5).innerText = num.toFixed(2);
  sum2 += f/total;
  row.insertCell(6).innerText = numci.toFixed(2);
  sum3 += (f/total)*100;
  fn = fn + f;
  
  value += interval;


} while ((value + interval-1) < max_value+interval);

let row2 = tabla.insertRow(-1);

row2.insertCell(0).innerText = "";
row2.insertCell(1).innerText = "";
row2.insertCell(2).innerText = "";
row2.insertCell(3).innerText = Math.round(sum1);
row2.insertCell(4).innerText = "";
row2.insertCell(5).innerText = Math.round(sum2);
row2.insertCell(6).innerText = Math.round(sum3) + "%";


function max_value(x){
    var max_value = x[0];
   for (var i = 0; i < x.length; i++ ){
       
       if (x[i] > max_value){
           max_value = x[i];
       }
   }
   
     return max_value;
}

//funcion para sacar el valor minimo del array
  function min_value(x){
    var min_value = x[0];
   for (var i = 0; i < x.length; i++ ){
       
       if (x[i] < min_value){
           min_value = x[i];
       }
   }
   
     return min_value;
}

//funcion para comparar entre datos del array "x"
   function frecuencia(x, y, z){
   
       var cant = 0;
       
       for (let i = 0; i < x.length; i++){
           if(x[i] >=  y & x[i] <= z) {
               cant++;
           }
       
       }

       return cant;
   }
   
   console.log(cont);
 
   
console.log(termino);
 
}





function reiniciar(){
    location.reload();
}




    

