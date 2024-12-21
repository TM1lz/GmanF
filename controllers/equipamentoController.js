const equipamentoModel = require('../models/equipamento'); // Importa o modelo Equipamento

const equipamentoController = {
    // Listar todos os equipamentos
    listarEquipamentos: async (req, res) => {
        try {
            const equipamentos = await equipamentoModel.findAll();
            res.status(200).json(equipamentos); // Retorna todos os equipamentos
        } catch (error) {
            console.error("Erro ao listar equipamentos:", error);
            res.status(500).send("Erro ao listar equipamentos.");
        }
    },

    // Criar um novo equipamento
    criarEquipamento: async (req, res) => {
        try {
            const { nome_equipamento, modelo_equipamento, data_ultima_manutencao, data_proxima_manutencao } = req.body;

            // Cria um novo equipamento no banco de dados
            const novoEquipamento = await equipamentoModel.create({
                nome_equipamento,
                modelo_equipamento,
                data_ultima_manutencao,
                data_proxima_manutencao
            });

            res.status(201).json(novoEquipamento); // Retorna o equipamento criado
        } catch (error) {
            console.error("Erro ao criar equipamento:", error);
            res.status(500).send("Erro ao criar equipamento.");
        }
    },

    // Editar um equipamento
    editarEquipamento: async (req, res) => {
        try {
            const { id_equipamento } = req.params;
            const { nome_equipamento, modelo_equipamento, data_ultima_manutencao, data_proxima_manutencao } = req.body;

            // Busca o equipamento pelo ID
            const equipamento = await equipamentoModel.findByPk(id_equipamento);
            if (!equipamento) {
                return res.status(404).send("Equipamento não encontrado.");
            }

            // Atualiza o equipamento
            await equipamento.update({
                nome_equipamento,
                modelo_equipamento,
                data_ultima_manutencao,
                data_proxima_manutencao
            });

            res.status(200).json({ message: "Equipamento atualizado com sucesso!" });
        } catch (error) {
            console.error("Erro ao editar equipamento:", error);
            res.status(500).send("Erro ao editar equipamento.");
        }
    },

    // Deletar um equipamento
    deletarEquipamento: async (req, res) => {
        try {
            const { id_equipamento } = req.params;

            // Busca o equipamento pelo ID
            const equipamento = await equipamentoModel.findByPk(id_equipamento);
            if (!equipamento) {
                return res.status(404).send("Equipamento não encontrado.");
            }

            // Deleta o equipamento
            await equipamento.destroy();

            res.status(200).json({ message: "Equipamento deletado com sucesso!" });
        } catch (error) {
            console.error("Erro ao deletar equipamento:", error);
            res.status(500).send("Erro ao deletar equipamento.");
        }
    }
};

module.exports = equipamentoController;
