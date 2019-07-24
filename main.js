
  /******************************************** 
  
  WEBSITE PARA PESQUISA DE API'S DISPONÍVEIS 
   
  https://www.programmableweb.com/apis/directory


  Google APIS
  https://developers.google.com/apis-explorer/#p/

  *************************************************************************************/



(function(){
	'use strict';

})();



 

 /******************************************************************************* *
 
        Exercício com Objeto e metódos
 
 *********************************************************************************/
 var facebookProfile = {
  name: 'Tiago',
  friends: 150,
  messages: ['Super cool', 'Essa foi boa', 'top D+'],
  postMessage: function (textMsg){
      var newMsg = textMsg;
      facebookProfile.messages.push(newMsg);
      console.log(facebookProfile.messages);
  },
  deleteMessage: function (){
      facebookProfile.messages.pop();
      console.log(facebookProfile.messages);
  },
  addFriend: function (){
      facebookProfile.friends += 1;
      console.log(facebookProfile.friends);
  },
  removeFriend: function (){
      facebookProfile.friends -= 1;
      console.log(facebookProfile.friends);
  },
}
console.log(facebookProfile.postMessage('123 teste agora'))
console.log(facebookProfile.deleteMessage())
console.log(facebookProfile.addFriend())
console.log(facebookProfile.removeFriend())



/******************************************************************** 
  
  percorrendo um objeto utilizando o forEach() loop

  ***************************************************************************/
var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

// your code goes here
donuts.forEach(function callback(donuts) {
  console.log(donuts.type + ' donuts cost ' + donuts.cost +' each.');
});




 
 /********************************************************* 
// loop for(); é o mais versártil de todos os loop metódos, o loop for() 
permite que voce tenha total controle sobre as iterações 
*/

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// a variável `i` é usada para percorrer cada elemento na array
for (var i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}


/***************************************************************************************************** 
// loop forEach();
Lembre que forEach() não tem retorno de "novo array"
***/

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut) {  
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});


/***************************************************************************************************** 
// loop map();
Lembre que o metódo map() sempre retorná o seu novo "array modificado" 
map() sempre retorna um novo array
***/
var donuts = ["jelly donut", "chocolate donut", "glazed donut"]
var improvedDonuts = donuts.map(function(elementosContidos) {
  elementosContidos += " hole";
  elementosContidos = elementosContidos.toUpperCase();
  return elementosContidos;
});




/***************************************************************************************************** 

 Percorrendo um array bi-dimensional

 Basicamente o loop externo percorre as LINHAS enquanto o loop interno percorre as COLUNAS

***/
var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];
for (var row = 0; row < donutBox.length; row++) {
  // aqui, donutBox[row].length se refere ao tamanho do array de donut sendo percorrido atualmente
  for (var column = 0; column < donutBox[row].length; column++) {
    console.log(donutBox[row][column]);
  }
}


  /*
  Lista de todos os valores que retornão falso:
  - valor booleano false
  - tipo null
  - tipo undefined
  - número 0
  - string vazia " "
  -valor ímpar NaN (significa "not a number", verifique o artigo MDN NaN)
  */


(function () {	
	'use strict';

	// FUNÇÃO FAZ A SOMA DO ARRAY PASSADO
	const somarValores = function(array){
		let total = 0;
		for (let value of array) {
			total += value;
		}
		return total;
	}
	
	//FUNÇÃO CALCULA A MÉDIA DOS VALORES PASSADOS
	const fazMedia = function(valores){
		let baseMedia = valores.length;
		let mediaFinal = 0;
		let resultSoma = 0;
		
		resultSoma = somarValores(valores);				
		mediaFinal = resultSoma / baseMedia;
		
		return mediaFinal;
	}
	
	console.log(fazMedia([4,0,10,10]))
	// 6
})();


(function(){
	'use strict';
	
	const calcularIMC = function(peso, altura, callback){
		let alturaQuadrada =  Math.pow(altura, 2);
		let res =  peso / alturaQuadrada;

		if(callback && typeof callback === 'function'){
			return callback(res);
		}
		
	}
	const classificaIMC = function(imc){
		if (imc < 16) {
			console.log(imc + " menor que 16 extremamente abaixo do peso")
		} else if (imc <= 16.9) {
			console.log(imc + " 16 a 16,9 muito abaixo do peso")
		} else if(imc <= 18.4) {
			console.log( imc, " 17 a 18.4 abaixo do peso")
		}else if (imc <= 24.9) {
			console.log(imc, " 18.5 a 24.9 peso normal")
		}else{
			console.log(imc + " acima do peso")
		}
  }
	var testeMyFunc = calcularIMC(65, 1.75, classificaIMC);
  console.log(testeMyFunc);

})();






/*************************************************************************
Operador ternário
condicional ? (se condicional é verdadeiro) : (se condicional é falso)
Para usar o operador ternário, primeiro forneça uma declaração condicional do lado esquerdo de ?.
Então, entre o ? :, escreva o código que seria executado se a condição fosse verdadeira e, ao lado direito de :, escreva o código que seria executado se a condição fosse falsa. Por exemplo, você pode reesrever o exemplo acima como:
*************************************************************************/
var adult = true;
var kids = false;
console.log((adult ? "Adulto veio true" : "Adulto veio false"), (kids ? " Kid entrada foi true" : "Kid entrada foi false"));


/*************************************************************************************************** */
  
  /* ADIONANDO LINKS A UMA LISTA
      explorando 
      children() 
      parents()

  */
  var navList, fisrtItem, link;
  navList = $('.nav-list');
  fisrtItem = navList.children().first();
  link = fisrtItem.find('a');
  link.attr('href','#10')
  
  /**************************************/


  /* RECEBER NO INPUT TEXT / REESCREVER EM OUTRA TAG 
          explorando 
          on(change)
          text() escreverá somente o texto
          html() escrerá todo o conteúdo do block inclusive o HTML 
  */
   $('#input').on('change', function() {
      var val, ponteiro;
      myStr = $('#input').val();
      ponteiro = $('.articles').children('h1');
      
      $(ponteiro).text(myStr)
  });
      
  /***************************************************************************************/

  

  /* removendo qualquer elemento from dom
          explorando 
          remove()
   */       
   $(function(){

      var removeIt = $('.article-list li').first('ul')
      removeIt.remove();

      // or 
      var removeIt = $('.article-list').find('ul')
      removeIt.children().remove('.className / ID')   

  })   

  // Removendo elements by ID 
  function removeAnyElements(id) {
      var hasToRemoved = $('#' + id);
      hasToRemoved.remove()
  }
  removeAnyElements(arg)
  /************************************************************************************/


  
   /* Inserindo elementos no DOM
          explorando 
          
          
          ***** Lembrando que tanto o append() quanto o prepend() 
                você pega o $(target)eChamaFuncção('com o conteúdo')
                  //ponteiroInicial.append(myHtml);      **********

          
          append() O novo item será adicionado como o ÚLTIMO FILHO do elemento
          que foi utilizado como ponteiro

          
          prepend()
          O novo item será adicionado como o PRIMEIRO FILHO do elemento
          que foi utilizado como ponteiro
          
          

          ***** AGORA tanto o insertBefore() quanto o insertAfter() 
                será o contrario das anteriores
                você pega o $('conteúdo')eChamaFuncção(passando o target)
              
                  ponteiroInicial.append(myHtml);      
                                                  **********
          

          insertBefore()
          O novo item será adicionado como IRMÃO(before)do elemento
          que foi utilizado como ponteiro
          
          insertAfter()
          O novo item será adicionado como IRMÃO(after)do elemento
          que foi utilizado como ponteiro

          */
          $(function() {
              // my target
              var ponteiroInicial = $('#family1');
              
              //Save my html
              var myHtml;

              // you can save it in one line
              //myHtml = '<div id"family2"><div id="bruce"><div id="madison">madison</div><div id="hunter">hunter</div></div></div>';


              // you also can save it in multiple lines as a block
              myHtml  = '<div id="family2">'
              myHtml += '<div id="bruce">'
              myHtml += '<div id="madison">madison</div>'
              myHtml += '<div id="hunter">hunter</div>'
              myHtml += '</div>'
              myHtml += '</div>';    
              
              
              //ponteiroInicial.append(myHtml);

              
              $(myHtml).insertAfter(ponteiroInicial);

          });



/**************************************** 
  checkBalance excercise

********************************************/
var balance = 560.150;
var checkBalance = true;
var isActive = true;


if(checkBalance === true){
  if(isActive === true){
    if(balance > 0){
      console.log('Your balance is $'+ balance.toFixed(2) +'.')         
    } else if(balance === 0){
    console.log('Your account is empty '+ balance.toFixed(2) +'.') 
    } else if(balance < 0){
      console.log('Your balance is negative '+ balance.toFixed(2) +'. Please contact bank.') 
    }
    }else{
    console.log('Your account is no longer active.')    
    }   
    }else{
  console.log('Thank you. Have a nice day!')    
}





/********************************************************************************
//Comparando arrays / objetos
*************************************************************************/
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [1, 2, 3, 4, 5];
//isEqual(arr1, arr2); // returns true

var arrObj1 = [1, 2, {
a: 1,
b: 2,
c: 3
}, 4, 5];
var arrObj2 = [1, 2, {
c: 3,
b: 2,
a: 1
}, 4, 5];
//isEqual(arrObj1, arrObj2); // returns true

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [1, 2, 3, 4, 5];
//isEqual(arr1, arr3); // returns false


var arr1 = [3, 2, 3, 4, 5];
var arr2 = [1, 2, 3, 4, 5];
isEqual(arr1, arr2); // returns false

var isEqual = function (value, other) {

// Get the value type
var type = Object.prototype.toString.call(value);

// If the two objects are not the same type, return false
if (type !== Object.prototype.toString.call(other)) return false;

// If items are not an object or array, return false
if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;

// Compare the length of the length of the two items
var valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
var otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
if (valueLen !== otherLen) return false;

// Compare two items
var compare = function (item1, item2) {

// Get the object type
var itemType = Object.prototype.toString.call(item1);

// If an object or array, compare recursively
if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
    if (!isEqual(item1, item2)) return false;
}
// Otherwise, do a simple comparison
else {

  // If the two items are not the same type, return false
  if (itemType !== Object.prototype.toString.call(item2)) return false;

  // Else if it's a function, convert to a string and compare
  // Otherwise, just compare
  if (itemType === '[object Function]') {
    if (item1.toString() !== item2.toString()) return false;
    } else {
    if (item1 !== item2) return false;
    }

  }
};

// Compare properties
if (type === '[object Array]') {
  for (var i = 0; i < valueLen; i++) {
    if (compare(value[i], other[i]) === false) return false;
  }
} else {
  for (var key in value) {
    if (value.hasOwnProperty(key)) {
      if (compare(value[key], other[key]) === false) return false;
    }
  }
}

// If nothing failed, return true
return true;


/************************************************************************** */
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}
multiply(4, 7);
/************************************************************************** */

