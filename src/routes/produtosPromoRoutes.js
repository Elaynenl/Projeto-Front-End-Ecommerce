import  express from "express";
import ProdutoPromoController from "../controllers/ProdutoPromoController.js";

const routes  =  express.Router();

routes.get("/produtosEmPromocao", ProdutoPromoController.listarProdutosPromo);
routes.get("/produtosEmPromocao/busca", ProdutoPromoController.listarProdutosPromoPorPalavraChave); // Rota para busca por palavra-chave
routes.get("/produtosEmPromocao/busca", ProdutoPromoController.listarProdutosPromoPorCategoria);
routes.get("/produtosEmPromocao/:id", ProdutoPromoController.listarProdutosPromoPorId);
routes.post("/produtosEmPromocao", ProdutoPromoController.cadastrarProduto);
routes.put("/produtosEmPromocao/:id", ProdutoPromoController.atualizarProduto);
routes.delete("/produtosEmPromocao/:id", ProdutoPromoController.excluirProduto);


export default routes;