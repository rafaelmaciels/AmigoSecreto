let friends = [];

// Essa função é responsável por adicionar um amigo na lista de amigos
function adicionarAmigo() {
    let name = document.querySelector('#amigo').value;

    if (name == '') {
        alert('Por favor, insira um nome');
        return;
    } else {
        // Adiciona o amigo na lista de amigos
        friends.push(name.trim());
        listarAmigos();
        let list = document.getElementById('resultado');
        list.innerHTML = '';
        limparCampo();
    }
};

// Essa função é responsável por listar os amigos na tela
function listarAmigos() {
    let list = document.getElementById('listaAmigos');
    list.innerHTML = '';

    let i = 0;
    while (i < friends.length) {
        if (friends[i] !== '') {
            let item = document.createElement('li');
            item.textContent = friends[i];
            list.appendChild(item);
        }
        i++;
    }
};

// Essa função é responsável por limpar o campo de input
function limparCampo() {
    document.querySelector('#amigo').value = '';
};

// Essa função é responsável por sortear o amigo secreto
function sortearAmigo() {
    // Verifica se a lista de amigos tem pelo menos 2 amigos
    if (friends.length < 2) {
        alert('Adicione pelo menos 2 amigos para sortear!');
        return;
    }

    let friendsList = Math.floor(Math.random() * friends.length);
    let selectedFriend = friends[friendsList];

    document.getElementById('resultado').innerHTML = `Amigo sorteado: ${selectedFriend}`;

};
// Essa função é responsável por resetar a lista de amigos
function reset() {
    friends = [];
    listarAmigos();
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('listaAmigos').innerHTML = '';
    limparCampo();
};
