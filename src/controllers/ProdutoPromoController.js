import produtoEmPromo from "../models/ProdutosPromo.js";
import { categoria } from "../models/Categoria.js";

class ProdutoPromoController {

    static async listarProdutosPromo (req, res) {
        try {
            const listaProdutosPromo = await produtoEmPromo.find({});
            res.status(200).json(listaProdutosPromo);
        } catch(erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição`})
        }
    }; 

    static async listarProdutosPromoPorId (req, res) {
        try {
            const id = req.params.id;
            const produtoEncontrado = await produtoEmPromo.findById(id);
            res.status(200).json(produtoEncontrado);
        }   catch(erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição do produto`})
        }
    };

    static async cadastrarProduto (req, res) {

        const novoProduto = req.body;

        try {
            const categoriaEncontrada = await categoria.findById(novoProduto.categoria)
            const produtoPromoCompleto = { ... novoProduto, categoria: { ... categoriaEncontrada._doc}};
            const produtoCriado = await produtoEmPromo.create(produtoPromoCompleto);
            
            res.status(201).json({message: "Criado com sucesso", produto: novoProduto });
        }   catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar produto`});
        }
    }

    static async atualizarProduto (req, res) {
        try {
            const id = req.params.id;
            await produtoEmPromo.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Produto atualizado"});
        } catch(erro) {
            res.status(500).json({message: `${erro.message} - falha na atualização`})
        }
    };

    static async excluirProduto (req, res) {
        try {
            const id = req.params.id;
            await produtoEmPromo.findByIdAndDelete(id);
            res.status(200).json({message: "Produto excluído com successo"});
        } catch(erro) {
            res.status(500).json({message: `${erro.message} - falha na exclusão`})
        }
    };

    static async listarProdutosPromoPorCategoria (req, res) {
        const categoriaNome = req.query.categoria;

        try {
            const produtosPromoPorCategoria = await produtoEmPromo.find ({ "categoria.nome": categoriaNome}); 
            res.status(200).json(produtosPromoPorCategoria);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na busca`})
        }
    }
};



export default ProdutoPromoController;