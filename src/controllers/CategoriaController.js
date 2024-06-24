import {categoria} from "../models/Categoria.js";

class CategoriaController {
    static async listarCategorias (req, res) {
        try {
            const listaCategorias = await categoria.find({});
            res.status(200).json(listaCategorias);
        } catch(erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição`})
        }
    };

    static async listarCategoriaPorId (req, res) {
        try {
            const id = req.params.id;
            const categoriaEncontrada = await categoria.findById(id);
            res.status(200).json(categoriaEncontrada);
        } catch(erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição`})
        }
    };

    static async cadastrarCategoria (req, res) {
        try {
            const novaCategoria = await categoria.create(req.body);
            res.status(201).json({message: "Criado com sucesso", categoria: novaCategoria });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar categoria`});
        }
    }

    static async atualizarCategoria (req, res) {
        try {
            const id = req.params.id;
            await categoria.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Categoria atualizada com sucesso!!!"});
        } catch(erro) {
            res.status(500).json({message: `${erro.message} - falha na atualização`})
        }
    };

    static async excluirCategoria (req, res) {
        try {
            const id = req.params.id;
            await categoria.findByIdAndDelete(id);
            res.status(200).json({message: "Categoria excluída com successo"});
        } catch(erro) {
            res.status(500).json({message: `${erro.message} - falha na exclusão`})
        }
    };

}

export default CategoriaController;