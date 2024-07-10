import mongoose, { version } from "mongoose";

const usuarioSchema = new mongoose.Schema({

    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true, enum: ['feminino', 'masculino', 'outros', 'prefiro não dizer'] }

}, {versionKey: false}) //significa que não queremos versionar o nosso Schema.

const usuario = mongoose.model("usuarios", usuarioSchema);

export default usuario;