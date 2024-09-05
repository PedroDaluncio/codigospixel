function mostraMensagemErro(qualInput){
    if (qualInput === digitarNumero || qualInput === validade || qualInput === codigoSeguranca){
        textoDentro.innerText = "Digite um número válido";
    }else{
        textoDentro.innerText = "Digite um nome válido";
    }
    textoDentro.style.color = "#FB7185";
    texto.append(imagemErro);
    texto.append(textoDentro);
    qualInput.style.marginBottom = 0;
    qualInput.insertAdjacentElement("afterend",texto);
};

function retiraMensagemErro(qualInput){
    texto.remove();
    qualInput.style.marginBottom = "24px";
    qualInput.style.border = "1.5px solid #9333EA";
    qualInput.style.borderColor = "";
    };

function mostraNoCartao(qualInput,indiceNum){
    if (qualInput === digitarNumero){
        let numeros = qualInput.value.split(' ').join('');
        let numero_cartao = document.getElementById(`${indiceNum + 1}`);
        numero_cartao.style.fontSize = "17px"
        numero_cartao.innerText = numeros[indiceNum];
    }else if (qualInput === digitarTitular){
        let nomeTitular = document.getElementById("nome");
        let nomeCartao = qualInput.value
        nomeTitular.innerText = nomeCartao;
    }else if (qualInput === validade){
        let validadeCartao = qualInput.value
        let elementoValidade = document.getElementById(`${indiceNum + 21}`)
        elementoValidade.style.fontSize = "18px"
        elementoValidade.innerText = validadeCartao[indiceNum]
    }
};
function resetaNumeroCartao(qualInput){
    if(qualInput === digitarNumero){
        for (let i=1;i<=16;i++){
            let numero_cartao = document.getElementById(`${i}`);
            numero_cartao.innerText = '•';
    }}else if(qualInput === digitarTitular){
        let nomeTitular = document.getElementById("nome");
        nomeTitular.innerText = "Seu nome aqui"
    }else if(qualInput === validade){
        for (let i=21; i<25; i++){
            let elementoValidade = document.getElementById(`${i}`)
            elementoValidade.innerText = '•'
        }
}}

const digitarNumero = document.getElementById("inserirNum");
const digitarTitular = document.getElementById("inserirTitular");
const validade = document.getElementById("inserirValidade");
const codigoSeguranca = document.getElementById("codigoSeguranca");
const enviar = document.getElementById("registrar");
let texto = document.createElement("span");
texto.id = "mensagemErro";
let imagemErro = document.createElement("img");
imagemErro.src = "photos/Warning.png";
let textoDentro = document.createElement("p");
textoDentro.id = "paragrafoErro";
let indice = 0;
let indiceNumeros = 0;
let indiceNome = 0
let indiceValidade = 0


enviar.addEventListener("click",(event)=>{
    if (digitarNumero.value === ""){
        digitarNumero.style.borderColor = "#ED3A5A";
        event.preventDefault();
        mostraMensagemErro(digitarNumero);
    }else if (digitarTitular.value === ""){
        digitarTitular.style.borderColor = "#ED3A5A";
        event.preventDefault();
        mostraMensagemErro(digitarTitular);
    }else if (validade.value === ""){
        validade.style.borderColor = "#ED3A5A";
        event.preventDefault();
        mostraMensagemErro(validade);
    }else if (codigoSeguranca.value === "" || codigoSeguranca.value.length > 3 || codigoSeguranca.value.length < 3){
        codigoSeguranca.style.borderColor = "#ED3A5A";
        event.preventDefault();
        mostraMensagemErro(codigoSeguranca);}
});

digitarNumero.addEventListener("input",(event)=>{
    retiraMensagemErro(digitarNumero);
    const deletar = event.inputType
    if (digitarNumero.value[indice] != ' ' && deletar !== 'deleteContentBackward'){
        mostraNoCartao(digitarNumero,indiceNumeros);
        indiceNumeros += 1;
    };
    indice += 1
    if (digitarNumero.value == ''){
        resetaNumeroCartao(digitarNumero);
        indiceNumeros = 0
        indice = 0
    };
    });

digitarTitular.addEventListener("input",(event)=>{
    retiraMensagemErro(digitarTitular);
    const deletar = event.inputType
    if (digitarTitular.value[indice] != ' ' && deletar !== 'deleteContentBackward'){
        mostraNoCartao(digitarTitular,indiceNome);
        indiceNome += 1;
    };
    indice += 1
    if (digitarTitular.value == ''){
        resetaNumeroCartao(digitarTitular);
        indiceNome = 0
        indice = 0
    };
});

validade.addEventListener("input",(event)=>{
    retiraMensagemErro(validade);
    const deletar = event.inputType
    if (validade.value[indice] != ' ' && deletar !== 'deleteContentBackward'){
        mostraNoCartao(validade,indiceValidade);
        indiceValidade += 1;
    };
    indice += 1
    if (validade.value == ''){
        resetaNumeroCartao(validade);
        indiceValidade = 0
        indice = 0
    };
});

codigoSeguranca.addEventListener("input",()=>{
    retiraMensagemErro(codigoSeguranca);
})



