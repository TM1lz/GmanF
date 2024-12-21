// controllers/equipesDeManutencaoController.js
const equipesDeManutencaoModel = require('../models/equipesDeManutencao'); // Importando o modelo Equipes de Manutenção

const equipesDeManutencaoController = {
    // Listar todas as equipes de manutenção
    listarEquipesDeManutencao: async (req, res) => {
        try {
            const equipesDeManutencao = await equipesDeManutencaoModel.findAll(); // Retorna todas as equipes de manutenção
            res.status(200).json(equipesDeManutencao); // Retorna as equipes de manutenção em formato JSON
        } catch (error) {
            res.status(500).send("Erro ao listar equipes de manutenção: " + error); // Caso ocorra algum erro
        }
    },

    // Criar uma nova equipe de manutenção
    criarEquipesDeManutencao: async (req, res) => {
        try {
            const { regiaoEquipe, supervisorEquipe, statusEquipe } = req.body; // Extrai os dados do corpo da requisição

            // Cria uma nova equipe de manutenção
            const equipesDeManutencao = await equipesDeManutencaoModel.create({
                regiaoEquipe,
                supervisorEquipe,
                statusEquipe
            });

            res.status(201).json(equipesDeManutencao); // Retorna a equipe de manutenção criada
        } catch (error) {
            res.status(500).send("Erro ao criar equipe de manutenção: " + error); // Caso ocorra algum erro
        }
    },

    // Editar uma equipe de manutenção existente
    editarEquipesDeManutencao: async (req, res) => {
        try {
            const { id_equipesDeManutencao } = req.params; // ID da equipe de manutenção passado na URL
            const { regiaoEquipe, supervisorEquipe, statusEquipe } = req.body; // Dados atualizados do corpo da requisição

            // Busca a equipe de manutenção pelo ID
            const equipeDeManutencao = await equipesDeManutencaoModel.findByPk(id_equipesDeManutencao);

            if (!equipeDeManutencao) {
                return res.status(404).send("Equipe de manutenção não encontrada!"); // Caso a equipe não exista
            }

            // Atualiza os dados da equipe de manutenção
            await equipesDeManutencaoModel.update({ regiaoEquipe, supervisorEquipe, statusEquipe }, { where: { id_equipesDeManutencao } });

            res.status(200).json({ message: "Equipe de manutenção atualizada com sucesso!" }); // Retorna a mensagem de sucesso
        } catch (error) {
            res.status(500).send("Erro ao atualizar equipe de manutenção: " + error); // Caso ocorra algum erro
        }
    },

    // Deletar uma equipe de manutenção
    deletarEquipesDeManutencao: async (req, res) => {
        try {
            const { id_equipesDeManutencao } = req.params; // ID da equipe de manutenção passado na URL

            // Busca a equipe de manutenção pelo ID
            const equipeDeManutencao = await equipesDeManutencaoModel.findByPk(id_equipesDeManutencao);

            if (!equipeDeManutencao) {
                return res.status(404).send("Equipe de manutenção não encontrada!"); // Caso a equipe não exista
            }

            // Deleta a equipe de manutenção
            await equipesDeManutencaoModel.destroy({ where: { id_equipesDeManutencao } });

            res.status(200).json({ message: "Equipe de manutenção excluída com sucesso!" }); // Retorna a mensagem de sucesso
        } catch (error) {
            res.status(500).send("Erro ao excluir equipe de manutenção: " + error); // Caso ocorra algum erro
        }
    }
};

module.exports = equipesDeManutencaoController;
