import express from "express";
import conectaNaDataBase from "./config/dbConect.js";
import routes from "./routes/index.js"
// import produtoEmPromo from "./models/ProdutosPromo.js";

const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
    console.log("erro de conexão", erro);
})

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!!!");
})

const app = express();
routes(app);
// app.use(express.json());



// app.get("/", (req, res) => {
//     res.status(200).send("Projeto API")
// });

// app.get("/cadastro-e-login", (req, res) => {
//     res.status(200).json(usuarios)
// });

// app.post("/cadastroLogin", (req, res) => {
//     usuarios.push(req.body)

//     res.status(201).send("Usuário cadastrado com sucesso!")
// });



// app.get("/produtos-em-promocao", async (req, res) => {
//     const listaProdutosPromo = await produtoEmPromo.find({});
//     res.status(200).json(listaProdutosPromo);
// });

// app.get("/produtoempromocao/:id", (req, res) => {
//     const index = buscarProdutoEmPromocao(req.params.id)
//     res.status(200).json(produtos[index]);
// });

// app.post("/produtosempromocao", (req, res) => {
//     produtos.push(req.body)

//     res.status(201).send("Produto cadastrado com sucesso!")
// });

// app.put("/produtosempromocao/:id", (req, res) => {
//     const index = buscarProdutoEmPromocao(req.params.id)
//     produtos[index].titulo__produto = req.body.titulo__produto;
//     res.status(200).json(produtos);
// });

// app.delete("/produtosempromocao/:id", (req, res) => {
//     const index = buscarProdutoEmPromocao(req.params.id)
//     produtos.splice(index, 1);
//     res.status(200).send("Produto removido com sucesso!!!")
// });

export default app;


