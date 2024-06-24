import mongoose from "mongoose";
import { categoriaSchema } from "./Categoria.js";

const produtoEmPromoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId},
    titulo__produto: { type: String, required: true },
    imagem: { type: String, required: true },
    valor_original: { type: Number, required: true },
    valor__desconto: { type: Number, required: true },
    valor__atual: { type: Number, required: true },
    categoria: { type: categoriaSchema, required: true }

}, {versionKey: false}); //significa que não queremos versionar o nosso Schema.

const produtoEmPromo = mongoose.model("produtos", produtoEmPromoSchema);

export default produtoEmPromo;