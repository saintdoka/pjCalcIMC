// This is a JavaScript file

window.onload = function (){
  const peso = document.querySelector('#peso');
  const altura = document.querySelector('#altura');
  const buscar = document.querySelector('#buscar');
  const info = document.querySelector('#info');
  const imc = document.querySelector('#imc');

  buscar.addEventListener('click',function(){

    let res = peso.value/(altura.value*altura.value);
    imc.value = res;

    if(res == 0 || res == ""){
      info.src = "img/Tabela.png";
    }
    if(res < 18.5){
      info.src = "img/Figura3.png";
    }

    if(res >=18.5 && res <=24.9){
      info.src = "img/Figura4.png";
    }

    if(res>=25){
      info.src = "img/Figura5.png";
    }
  });
}