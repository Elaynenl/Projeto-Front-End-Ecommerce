import express from "express";
import conectaNaDataBase from "./config/dbConect.js";
import routes from "./routes/index.js";
import cors from "cors";

const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
    console.log("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!!!");
});

const app = express();

app.use(cors()); // Adicione esta linha para permitir CORS
app.use(express.json());
routes(app);

export default app;