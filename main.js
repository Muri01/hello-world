//Criar váriavel onde guarda o nome digitado pelo usuário
let nomeUsuario = "";
//nomeUsuario = prompt("Qual o seu nome?");

//guardar este conteudo do HTML na variavel elemento
let elemento = document.querySelector("#nome-usuario"); 

// enquanto a variavel nomeUsuario estiver com texto vazio "", fico repetindo a ação de
// gerar um prompt e guarda a resposta na variavel nomeUsuario
while( nomeUsuario == ""){
    nomeUsuario = prompt("Qual o seu nome?");
}

// SE o usuario apertar "Cancelar" e a variavel receber o valor nulo (null), ENTÃO
// adiciono no conteudo do HTML o texto 'seja muito bem vindo.'
// SENÃO adiciono no conteúdo do HTML o que foi digitado pelo usuário
if (nomeUsuario == null){
    elemento.textContent = 'seja muito bem vindo.';
}else{
    elemento.textContent = nomeUsuario;
}
