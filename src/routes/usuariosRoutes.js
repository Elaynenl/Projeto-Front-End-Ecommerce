import  express from "express";
import UsuarioController from "../controllers/UsuarioController.js"

const routes  =  express.Router();

routes.get("/usuarios", UsuarioController.listarUsuarios);
routes.get("/usuarios/:id", UsuarioController.listarUsuarioPorId);
routes.post("/cadastro", UsuarioController.cadastrarUsuario);
routes.post("/login", UsuarioController.loginUsuario);
routes.put("/usuarios/:id", UsuarioController.atualizarCadastroUsuario)
routes.delete("/usuarios/:id", UsuarioController.excluirCadastroUsuario)




export default routes;