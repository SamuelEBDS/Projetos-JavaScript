const calcular = document.getElementById('calcular');


//nome.value = 'Samuel Eleoeterio'; //acessando as propriedades do elemento

function imc () {
    //dentro da funçao eu evito variaveis globais.
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    //verificando se os campos estao preenchidos
    if(nome !== '' && altura !== '' && peso !== ''){ //value para pegar o valor da caixinha
        const valorIMC = (peso / (altura * altura)).toFixed(1);
       
       let classificacao = "";

       if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.';
       }else if (valorIMC < 25) {
            classificacao = "com peso ideal.";
       }else if (valorIMC < 30) {
            classificacao = "levemente acima do peso";
       }else if (valorIMC < 35) {
            classificacao = "com obesidade grau I";
       }else if (valorIMC < 40) {
            classificacao = "com obesidade grau II";
       }else{
            classificacao = "Com obesidade grau III.";
       }

       resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
       
    } else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }
}

calcular.addEventListener('click', imc);