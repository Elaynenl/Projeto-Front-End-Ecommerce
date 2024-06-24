import mongoose from "mongoose";

const categoriaSchema = new mongoose.Schema ({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true},
    descricao: { type: String},
    subcategorias: { type: String }
}, {versionKey: false});

const categoria = mongoose.model("categorias", categoriaSchema);

export { categoria, categoriaSchema };