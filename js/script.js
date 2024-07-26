// Seleciona o ícone do menu
let menuIcon = document.querySelector('#menu-icon');
// Seleciona a barra de navegação
let navbar = document.querySelector('.navbar');
// Seleciona todas as seções da página
let sections = document.querySelectorAll('section');
// Seleciona todos os links de navegação no cabeçalho
let navLinks = document.querySelectorAll('header nav a');

// Função executada ao rolar a página
window.onscroll = () => {
    // Itera sobre cada seção
    sections.forEach(sec => {
        // Obtém a posição vertical atual do scroll
        let top = window.scrollY;
        // Calcula o offset da seção (topo da seção menos 150 pixels)
        let offset = sec.offsetTop - 150;
        // Obtém a altura da seção
        let height = sec.offsetHeight;
        // Obtém o ID da seção
        let id = sec.getAttribute('id');

        // Verifica se o scroll está dentro dos limites da seção
        if (top >= offset && top < offset + height) {
            // Remove a classe 'active' de todos os links de navegação
            navLinks.forEach(links => {
                links.classList.remove('active');
                // Adiciona a classe 'active' ao link correspondente à seção atual
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}

// Função executada ao clicar no ícone do menu
menuIcon.onclick = () => {
    // Alterna a classe 'bx-x' do ícone do menu (animação de menu aberto/fechado)
    menuIcon.classList.toggle('bx-x');
    // Alterna a classe 'active' da barra de navegação (exibe ou oculta a barra de navegação)
    navbar.classList.toggle('active');
}

// Envio do e-mail pelo formulário

(function(){
    emailjs.init("service_bjxn4zd");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Coletar os dados do formulário

    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Enviar e-mail via EmailJS

    emailjs.send('service_bjxn4zd', 'template_d7bo49k', formData)
        .then(function(response) {
            console.log('E-mail enviado com sucesso!', response.status, response.text);
            alert('E-mail enviado com sucesso!');
        }, function(error) {
            console.log('Erro ao enviar e-mail.', error);
            alert('Erro ao enviar e-mail.');
        });
});