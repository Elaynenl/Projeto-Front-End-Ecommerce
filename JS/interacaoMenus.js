const menuCategorias = document.querySelector(".opcoes__item")
const subMenuCategorias = document.querySelector(".opcoes__menu__lista")


//Interação mobile

document.addEventListener('click', (event)=> {
    const containerMenu = document.querySelector('.container').contains(event.target);
    const menuCheckbox = document.getElementById('menu');

    if (!containerMenu) {
        menuCheckbox.checked = false;
    }
});


//Interação menu telas com resolução 1024px
menuCategorias.addEventListener("mouseover", () => {
    subMenuCategorias.style.display = "block";
});

subMenuCategorias.addEventListener("mouseover", () => {
    subMenuCategorias.style.display = "block";
});

// Oculta o submenu quando o mouse sai tanto do menu de categorias quanto do submenu
menuCategorias.addEventListener("mouseout", () => {
    menuCategorias.addEventListener("mouseout", (event) => {
        if (!subMenuCategorias.contains(event.relatedTarget)) {
            subMenuCategorias.style.display = "none";
        }
    });
});

subMenuCategorias.addEventListener("mouseout", (event) => {
    if (!menuCategorias.contains(event.relatedTarget)) {
        subMenuCategorias.style.display = "none";
    }
});


//interação do menu para telas com resolução a partir de 1728px

document.querySelectorAll('.menu-lista-subitem').forEach(menuItem => {
    const menuPrincipal = menuItem.querySelector('.opcoes__lista__titulo');
    const subMenu = menuItem.querySelector('.opcoes__subitem');

    menuPrincipal.addEventListener('mouseover', () => {
        subMenu.style.display = 'block';
    });

    subMenu.addEventListener('mouseover', () => {
        subMenu.style.display = 'block';
    });
    
    menuPrincipal.addEventListener('mouseout', (event) => {
        if (!subMenu.contains(event.relatedTarget)) {
            subMenu.style.display = 'none';
        }
    });


    subMenu.addEventListener('mouseout', (event) => {
        if (!menuPrincipal.contains(event.relatedTarget)) {
            subMenu.style.display = 'none';
        }
    });
});






