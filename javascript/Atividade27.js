const escrever = ()=>{

    alert('O Programa só  permite numeros inteiros')

    const arg = prompt('digite um numero inteiro')

    for(let i=1; i <= arg; i++){
        document.getElementById('resposta').innerHTML += i + " ";

    }

        
   

}