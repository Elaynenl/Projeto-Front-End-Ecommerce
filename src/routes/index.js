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

    //ao inserir esse código o arquivo promo.html vai pra rota /produtosEmPromocao, mas os produtos não são mais listados.

    // app.route("/produtosEmPromocao").get((req, res) => {
    //     res.status(200).sendFile(path.join(__dirname, "HTML/promo.html"));
    // });

    
    app.use(express.static(__dirname));
    app.use('/img', express.static(path.join(__dirname, 'img')));
    app.use('/JS', express.static(path.join(__dirname, 'JS')));
    app.use('/styles', express.static(path.join(__dirname, 'styles')));

    app.use(express.json(), cadastroLogin, produtosEmPromocao, categorias);
}

export default routes;

