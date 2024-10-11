/*
console.log(2+2);
console.log(1+'2');

let resultado = "";

let preco = 50;


if (preco < 40){
  resultado = "Livro é barato.";
} else {
  resultado = "Livro não é barato.";
}

console.log(resultado); 



preco = 50;
resultado = preco < 40 ? "Livro é barato." : "Livro não é barato."

console.log(resultado);

const meuArray = [1,2,3]
*/

const meuObjeto = {
    texto : "uma propriedade",
    numero : 34
     
    }
   
   console.log(meuObjeto.numero,meuObjeto.texto)
   console.log(meuObjeto.texto)
   
   let minha_var = "endereço"
   
   function soma(a,b){
     return a + b;
   }
   
   const arrow = (a,b) => {
     return a + b;
   }
   
   const arrow2 = (a, b) => a + b;
   
   const arrow3 = a => a + 2;
   
   const dobro = elemento => {consle.log(elemnento *2)}