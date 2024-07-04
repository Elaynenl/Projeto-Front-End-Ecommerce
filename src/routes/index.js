import express from "express";
import path from "path";
import cadastroLogin from "./usuariosRoutes.js";
import produtosEmPromocao from "./produtosPromoRoutes.js";
import categorias from "./categoriasRoutes.js";

const routes = (app) => {
    const __dirname = path.resolve();

    app.route("/").get((req, res) => {
        res.status(200).sendFile(path.join(__dirname, "index.html"));
    });

    // Servir o arquivo promo.html na rota /produtosEmPromocao
    app.route("/produtosEmPromocao").get((req, res) => {
        res.status(200).sendFile(path.join(__dirname, "HTML/promo.html"));
    });

    app.use(express.static(__dirname));
    app.use('/HTML', express.static(path.join(__dirname, 'HTML')));
    app.use('/img', express.static(path.join(__dirname, 'img')));
    app.use('/JS', express.static(path.join(__dirname, 'JS')));
    app.use('/styles', express.static(path.join(__dirname, 'styles')));

    app.use(express.json(), cadastroLogin, produtosEmPromocao, categorias);
}

export default routes;

