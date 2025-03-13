let amigos = [];
const listaAmigosElement = document.getElementById('listaAmigos');

function adicionarAmigo() {
    const entrada = document.getElementById('amigo');
    const novoAmigo = entrada.value.trim();

    if (novoAmigo === '') {
        alert('Por favor, insira um nome.');
        entrada.focus();
        return;
    }

    if (amigos.includes(novoAmigo)) {
        entrada.value = '';
        alert('Nome já inserido!');
        entrada.focus();
        return;
    }

    amigos.push(novoAmigo);
    entrada.value = '';
    atualizarListaAmigos();
    entrada.focus();
}

function atualizarListaAmigos() {
    listaAmigosElement.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigosElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('É necessário ao menos 2 nomes para realizar o sorteio!');
        return;
    }

    const amigoSorteadoIndex = Math.floor(Math.random() * amigos.length);
    const resultadoElement = document.getElementsByClassName('section-title')[0];
    resultadoElement.innerHTML = `O nome sorteado(a) é: ${amigos[amigoSorteadoIndex]}`;

    // Limpar a lista de amigos após o sorteio
    amigos = [];
    atualizarListaAmigos();
}


