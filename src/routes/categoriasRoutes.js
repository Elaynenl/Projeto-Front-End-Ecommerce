import  express from "express";
import CategoriaController from "../controllers/CategoriaController.js"

const routes  =  express.Router();

routes.get("/categorias", CategoriaController.listarCategorias);
routes.get("/categorias/:id", CategoriaController.listarCategoriaPorId);
routes.post("/categorias", CategoriaController.cadastrarCategoria);
routes.put("/categorias/:id", CategoriaController.atualizarCategoria);
routes.delete("/categorias/:id", CategoriaController.excluirCategoria);


export default routes;