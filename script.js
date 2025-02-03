// Seleciona o elemento com a classe 'card'
let card = document.querySelector('.card');

// Seleciona o botão de login
let loginButton = document.querySelector('.loginButton');

// Seleciona o botão de cadastro
let cadastroButton = document.querySelector('.cadastroButton');

// Adiciona um evento de clique ao botão de login
loginButton.onclick = () => {
    // Remove a classe 'cadastroActive' do card
    card.classList.remove('cadastroActive');
    // Adiciona a classe 'loginActive' ao card
    card.classList.add('loginActive');
}

// Adiciona um evento de clique ao botão de cadastro
cadastroButton.onclick = () => {
    // Remove a classe 'loginActive' do card
    card.classList.remove('loginActive');
    // Adiciona a classe 'cadastroActive' ao card
    card.classList.add('cadastroActive');
}