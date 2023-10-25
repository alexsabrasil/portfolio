document.addEventListener('DOMContentLoaded', function () {
    new TypeIt(".animated", {
        speed: 100,
        loop: true

    })

        .type('Full Stack', { delay: 900 })
        .delete(10)
        .type('Web', { delay: 500 })
        .delete(9)
        .type('DeveloPer', { delay: 500 })
        .pause(1000)
        .delete(3)
        .type('per.', { delay: 500 })
        .go()

        const menuIcon = document.querySelector('.menu-icon');
        const navMenu = document.querySelector('header .navegacao-primaria');
    
        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('fa-x');
            navMenu.classList.toggle('ativado');
    });

        const listaItems = document.querySelectorAll('.projects_armazenamento ul li');
        const buttons = document.querySelectorAll('.projects_models ul li');

    // Função para adicionar classe 'ativo' a elementos da lista com base no botão clicado

    function showLista(button) {
        listaItems.forEach(item => {
            item.classList.remove('ativo');
        });

        listaItems.forEach(item => {
            if (item.classList.contains(button)) {
                item.classList.add('ativo');
            }
        });
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonType = button.classList[0]; // Pega a classe do botão clicado
            showLista(buttonType); // Chama a função showLista com o tipo de botão
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {

    const listaItems = document.querySelectorAll('.projects_armazenamento ul li');
    const buttons = document.querySelectorAll('.projects_models ul li');
    buttonGeral = document.querySelectorAll('.projects_models ul li');

   


    function showLista(button) {
        listaItems.forEach(item => {
            item.style.display = 'none';
        });

        if (button === 'all') {
            listaItems.forEach(item => {
                item.style.display = 'block';
            });
        } else {
            listaItems.forEach(item => {
                if (item.classList.contains(button)) {
                    item.style.display = 'block';
                }
            });
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonType = button.classList[0];
            buttons.forEach(btn => {
                btn.classList.remove('ativo');
            });
            button.classList.add('ativo');
            showLista(buttonType);
        });
    });
});

buttonGeral.forEach(item => {
    item.addEventListener('click', e => {
        let currentButton = e.target;
        showLista(listaALL, currentButton.classList[0]);
    });
});


const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('change', function() {
    if (this.checked) {
        sidebar.style.left = '0';
    } else {
        sidebar.style.left = '-250px';
    }
});