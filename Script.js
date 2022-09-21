
const solucion=document.getElementById('solucion')

function convertirAf(){

    let fahrenheit=document.getElementById('farenheit').value
   
    let celsius=(fahrenheit - 32) * 5/9;
// console.log(celsius)
    //return fahrenheit;
    solucion.innerHTML=""+celsius

  
}


const boton= document.getElementById('button')
boton.addEventListener('click',convertirAf)
