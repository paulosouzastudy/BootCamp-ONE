
// Boas vindas
alert ('Bem-vindo ao Desafio 2');

let nome = prompt ('Qual o seu nome?');

alert(`Estamos felizes em te ver ${nome}`);

//Dia da semana
let dia1 = 'Domingo';
let dia2 = 'Sábado';


let respostaDia = prompt('Qual é o dia da semana?');

if (respostaDia == dia1) {
    alert('Bom fim de semana!');
} else if 
     (respostaDia == dia2) {
        alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}


// Teste número positivo ou negativo

let validaNumero = prompt('Digite um número maior ou menor que Zero');

if (validaNumero > 0) {
    alert('Número Positivo');
}  else {
    if (validaNumero < 0) {
        alert('Número Negativo');
}
}

// Jogo adivinhe o número
let alvo = 100;
let chute = prompt ('Adivinhe o número');

if (chute >=alvo) {
    alert(`Parabéns você acertou o número ${chute}`);
} else {
    alert('Errooou! Não tem chororo esse jogo acabou.');
}

//Saldo

alert(`Seu saldo é ${chute}`);