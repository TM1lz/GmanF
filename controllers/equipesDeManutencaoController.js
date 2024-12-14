// controllers/equipesDeManutencaoController.js
const equipesDeManutencaoModel = require('../models/equipesDeManutencao.js'); // Importando o modelo Equipes de manutenção

const equipesDeManutencaoController = {
    // Listar todos as Equipes de manutenção
    listarEquipesDeManutencao: async (req, res) => {
        try {
            const equipesDeManutencao = await equipesDeManutencaoModel.findAll(); // Retorna todos os Equipes de manutenção
            res.status(200).json(equipesDeManutencao); // Retorna as equipes de manutenção em formato JSON
        } catch (error) {
            res.status(500).send("Erro ao listar Equipes de manutencao: " + error); // Caso ocorra algum erro
        }
    },

    // Criar uma nova Equipe de manutencao
    criarEquipesDeManutencao: async (req, res) => {
        try {
            const { regiaoEquipe, supervisorEquipe, statusEquipe } = req.body; // Extrai os dados do corpo da requisição

            // Cria um nova Equipe de manutenção
            const equipesDeManutencao = await equipesDeManutencaoModel.create({
                regiaoEquipe,
                supervisorEquipe,
                statusEquipe
               
                
                
            });

            res.status(201).json(equipesDeManutencao); // Retorna a Equipe de manutenção criado
        } catch (error) {
            res.status(500).send("Erro ao criar Equipes de Manutenção: " + error); // Caso ocorra algum erro
        }
    },
 
    // Editar uma Equipe de manutenção existente
    editarEquipesDeManutencao: async (req, res) => {
        try {
            const { id_equipesDeManutencao } = req.params; // ID das Equipes de manutenção passado na URL
            const { regiaoEquipe,   supervisorEquipe, statusEquipe} = req.body; // Dados atualizados do corpo da requisição

            // Busca as Equipes de manutenção pelo ID
            const equipesDeManutencao = await equipesDeManutencaoModel.findByPk(id_equipesDeManutencao);

            if (!equipesDeManutencao) {
                return res.status(404).send("Equipes de manutenção não encontrado!"); // Caso as Equipes de manutenção não exista
            }

            // Atualiza os dados das Equipes de manutenção
            await equipesDeManutencaoModel.update({ regiaoEquipe, supervisorEquipe,  statusEquipe }, { where: { id_equipesDeManutencao } });

            res.status(200).json({ message: "Equipes de manutenção atualizadas com sucesso!" }); // Retorna a mensagem de sucesso
        } catch (error) {
            res.status(500).send("Erro ao atualizar Equipes de manutenção: " + error); // Caso ocorra algum erro
        }
    },

    // Deletar Equipes de manutenção
    deletarEquipesDeManutencao: async (req, res) => {
        try { 
            const { id_equipesDeManutencao } = req.params; // ID das Equipes de manutenção passado na URL

            // Busca as Equipes de manutenção pelo ID
            const equipesDeManutencao = await equipesDeManutencaoModel.findByPk(id_equipesDeManutencao);

            if (!equipesDeManutencao) {
                return res.status(404).send("Equipes de manutencao não encontrado!"); // Caso as eEquipes de manutenção não exista
            }

            // Deleta as Equipes de manutenção
            await equipesDeManutencaoModel.destroy({ where: { id_equipesDeManutencao } });

            res.status(200).json({ message: "Equipes de manutencao excluídas com sucesso!" }); // Retorna a mensagem de sucesso
        } catch (error) {
            res.status(500).send("Erro ao excluir Equipes de manutencao: " + error); // Caso ocorra algum erro
        }
    }
};

module.exports = equipesDeManutencaoController;
