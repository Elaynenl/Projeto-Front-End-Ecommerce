const menuCategorias = document.querySelector(".opcoes__item");
const subMenuCategorias = document.querySelector(".opcoes__menu__lista");
const menus = document.querySelectorAll('.menu-lista-subitem');

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


menus.forEach(menu => {
    const menuPrincipal = menu.querySelector(".opcoes__lista__titulo");
    const submenu = menu.querySelector(".opcoes__subitem");

    menuPrincipal.addEventListener("mouseover", () => {
        submenu.style.display = "block";
    })

    submenu.addEventListener("mouseover", () => {
        submenu.style.display = "block";
    })

    menu.addEventListener("mouseout", () => {
        submenu.style.display = "none"
    })
})








// const menuCategorias = document.querySelector(".opcoes__item")
// const subMenuCategorias = document.querySelector(".opcoes__menu__lista")



// // Mostra o submenu quando o mouse entra no menu de categorias
// menuCategorias.addEventListener("mouseover", () => {
//     subMenuCategorias.style.display = "block";
// });


// // Oculta o submenu quando o mouse sai do menu de categorias
// menuCategorias.addEventListener("mouseout", () => {
//     subMenuCategorias.style.display = "none";
// });



// document.addEventListener("DOMContentLoaded", function() {
//     const menuCategorias = document.querySelector(".opcoes__item");
//     const subMenuCategorias = document.querySelector(".opcoes__menu__lista");

//     // Adiciona o evento de mouseover ao item "CATEGORIAS"
//     menuCategorias.addEventListener("mouseover", function() {
//         subMenuCategorias.style.display = "block"; // Mostra o submenu
//     });

//     subMenuCategorias.addEventListener("mouseover", function() {
//         subMenuCategorias.style.display = "block"
//     })

//     // Adiciona o evento de mouseout para esconder o submenu quando o mouse sai do item "CATEGORIAS"
//     menuCategorias.addEventListener("mouseout", function() {
//         subMenuCategorias.style.display = "none"; // Esconde o submenu
//     });
// });





