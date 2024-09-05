const mostrarSenha = document.getElementById("senhaEscondida")
let olhoAberto = false
mostrarSenha.addEventListener("click",(event)=>{
    event.preventDefault();
    if (!olhoAberto){
        mostrarSenha.src = "fotos/eye.svg";
        olhoAberto = true;
        document.getElementById('senha').type = 'text';
    }
    else{
        mostrarSenha.src = "fotos/eye-off.svg";
        olhoAberto = false;
        document.getElementById('senha').type = 'password';
    }
});
let trocarSenha = false
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const entrar = document.getElementById("entrar");
const caixaSenha =document.getElementById("caixaSenha")
const caixaEmail =document.getElementById("caixaEmail")
const mensagemEmail = document.querySelector("p")
const mensagemSenha = document.getElementById("mensagemSenha")
let texto = document.createElement("span")
function mostraMensagemErro(caixa){
    if (trocarSenha === false){
        texto.innerText = "Digite um e-mail válido"
    }else{
        texto.innerText = "Digite uma senha válida"
    }
    texto.style.color = "#ED3A5A"
    caixa.insertAdjacentElement("afterend",texto)
}

entrar.addEventListener("click",(event)=>{
    if (email.value === ""){
        email.style.borderColor = "#ED3A5A";
        event.preventDefault();
        mostraMensagemErro(caixaEmail,trocarSenha)
    }
    else if (senha.value === ""){
        caixaSenha.style.borderColor = "#ED3A5A";
        event.preventDefault();
        let texto = document.createElement("span");
        texto.innerText = "Insira uma senha válida";
        texto.style.color = "#ED3A5A";
        caixaSenha.insertAdjacentElement("afterend",texto);
    }
});

const fazerSenha = document.getElementById('esqueceu')
fazerSenha.addEventListener('click',()=>{
    mensagemEmail.innerText = "Redefina a sua senha";
    email.placeholder = "Insira a nova senha";
    senha.placeholder = "confirme a nova senha";
    mensagemSenha.innerText = "Confime a senha";
    entrar.innerText = "Enviar nova senha";
    trocarSenha = true
    texto.remove()
    caixaEmail.style.borderColor = "#E2E8F0"
})
