import  express from "express";
import UsuarioController from "../controllers/UsuarioController.js"

const routes  =  express.Router();

routes.get("/cadastroLogin", UsuarioController.listarUsuarios);
routes.get("/cadastroLogin/:id", UsuarioController.listarUsuarioPorId);
routes.post("/cadastroLogin", UsuarioController.cadastrarUsuario);
routes.put("/cadastroLogin/:id", UsuarioController.atualizarCadastroUsuario)
routes.delete("/cadastroLogin/:id", UsuarioController.excluirCadastroUsuario)




export default routes;