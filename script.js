function criptografar() {
    let texto = document.getElementById("input-texto").value;
    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    mostrarMensagemOuImagem(textoCriptografado);
    document.getElementById("input-texto").value = "";
}

function descriptografar() {
    let texto = document.getElementById("input-texto").value;
    let textoDescriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    mostrarMensagemOuImagem(textoDescriptografado);
    document.getElementById("input-texto").value = "";
}

function copiarTexto() {
    let textoCopiado = document.getElementById("mensagem-saida").innerText;

    if (textoCopiado !== "") {
        navigator.clipboard.writeText(textoCopiado).then(() => {
            alert("Texto copiado para a área de transferência!");
            mostrarMensagemOuImagem("");
        });
    }
}

function mostrarMensagemOuImagem(texto) {
    const mensagemSaida = document.getElementById("mensagem-saida");
    const imagemPlaceholder = document.getElementById("imagem-placeholder");
    const botaoCopiar = document.querySelector(".btn-copiar");

    if (texto === "") {
        imagemPlaceholder.style.display = "block";
        mensagemSaida.innerText = "";
        botaoCopiar.disabled = true; 
    } else {
        imagemPlaceholder.style.display = "none";
        mensagemSaida.innerText = texto;
        botaoCopiar.disabled = false;
    }
}

document.querySelector(".btn-copiar").disabled = true;
