



contador = 0
function clicando (){
let inputNumeros = document.querySelector('.inpt-numeros input').value;
let fim = document.querySelector('.inpt-final').value;
let quantidadeTotal = document.querySelector('.qtd-total');
let quantidadeRestantes = document.querySelector('.qtd-restantes');
let restam = document.querySelector('.restam')
let mensagem = document.querySelector('.inpt-mensagens textarea').value;
let textAviso = document.querySelector('.text-aviso');
    numeros3 = inputNumeros.replaceAll(' ', '');
    numeros3 = numeros3.replaceAll('-', '');
    numeros3 = numeros3.replaceAll('+', '');
    numeros3 = numeros3.split(',');
    
    let arr = numeros3;
    numeros3 = arr.filter((este, i) => arr.indexOf(este) === i);
    numeros4 = []
 

    for(i = 0; i < numeros3.length; i++){
        
        if(numeros3[i].slice(0,2) === '55'){
            numeros4.push(numeros3[i]);
            
           
        }
      
        
    }
    
    numeros3 = numeros4
   




let mensagemFiltrada = window.encodeURIComponent(mensagem);

if (fim === '' || inputNumeros === ''){
    alert('Campo em branco!')
}

else{
   
quantidadeTotal.innerHTML = numeros3.length;


textAviso.innerText = ''; /* zerando o aviso */

if (parseInt(fim) !== contador){
    window.open('https://api.whatsapp.com/send?phone='+ numeros3[contador]+ '&text=' + mensagemFiltrada);
    contador += 1;
   
    quantidadeRestantes.innerHTML = numeros3.length - contador;
    localStorage.qtdRestante = (numeros3.slice(numeros3.length - (numeros3.length-contador)));
    restam.innerText = numeros3.length - contador;
  
    
}
else{
    
    copiar()
}
}

        
        /*for (i = 0; i < fim; i++){
                window.open('https://api.whatsapp.com/send?phone='+ numeros3[i]);
              
                quantidadeRestantes.innerHTML = numeros3.length - fim;

        }*/

    
 





}

function copiar(){
    let textAviso = document.querySelector('.text-aviso');
    let inputNumeros = document.querySelector('.inpt-numeros input').value;
    let fim = document.querySelector('.inpt-final').value;
    let quantidadeTotal = document.querySelector('.qtd-total');
    let quantidadeRestantes = document.querySelector('.qtd-restantes');
    let mensagem = document.querySelector('.inpt-mensagens textarea').value;
        numeros3 = inputNumeros.replaceAll(' ', '');
        numeros3 = numeros3.replaceAll('-', '');
        numeros3 = numeros3.replaceAll('+', '');
        numeros3 = numeros3.split(',');
    let mensagemFiltrada = window.encodeURIComponent(mensagem);
    let restantesCopiados = (numeros3.length-contador);


    localStorage.qtdRestante = (numeros3.slice(numeros3.length - (numeros3.length-contador)));
    navigator.clipboard.writeText(numeros3.slice(numeros3.length - (numeros3.length-contador)));
   
    textAviso.innerText = `⚠️ Atividade finalizada!\n✅ [ ${restantesCopiados} ] Numeros copiados!\n🔒 Cole-os em um local seguro!`;
    window.scrollTo(x = 0, y = 0); /*Voltando a tela para o início da página*/
}


function colar(){

    let textAviso = document.querySelector('.text-aviso');
    let inputNumeros = document.querySelector('.inpt-numeros input');
    textAviso.innerText = `✅ Números foram colados com sucesso!`
    window.scrollTo(x = 0, y = 0); /*Voltando a tela para o início da página*/



    inputNumeros.value = localStorage.qtdRestante;




}