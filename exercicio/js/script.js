var botao= document.getElementById('botao')
var lam= document.getElementById('lampada')
//console.log(botao)

botao.onclick = function(){
   //alert('Funionando')

   if(botao.value=='Acender'){
       lam.src='./img/acesa.jpg'
       botao.value='Apagar'
       botao.innerHTML='Apagar'
   }
   else{
       lam.src='./img/apagada.jpg'
       botao.value='Acender'
       botao.innerHTML= 'Acender'
   }
}