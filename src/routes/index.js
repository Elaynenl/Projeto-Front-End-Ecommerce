import express from "express";
import cadastroLogin from "./usuariosRoutes.js";
import produtosEmPromocao from "./produtosPromoRoutes.js"
import categorias from "./categoriasRoutes.js";
// import { categoria } from "../models/Categoria.js";

const routes = (app) => {
    app.route("/").get((req,res) => res.status(200).send("Projeto Desenvolve"));

    app.use(express.json(), cadastroLogin, produtosEmPromocao, categorias );
    // app.use(cadastroLogin);
    // app.use(produtosEmPromocao);
    // app.use(categoria);

}


export default routes;