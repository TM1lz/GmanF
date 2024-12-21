const chamadaDeManutencaoModel = require('../models/chamadaDeManutencao.js'); // Modelo ChamadaDeManutencao
const clienteModel = require('../models/cliente.js'); // Modelo Cliente
const equipesDeManutencaoModel = require('../models/equipesDeManutencao.js'); // Modelo EquipesDeManutencao

const chamadaDeManutencaoController = {
    // Listar todas as chamadas de manutenção ou com parâmetros filtrados
    listarChamadaDeManutencao: async (req, res) => {
        try {
            let { id_cliente } = req.params; // Captura o id_cliente da URL
            let whereCondition = {};
    
            // Condição para filtrar pela id_cliente, se fornecido
            if (id_cliente) {
                whereCondition.id_cliente = id_cliente;
            }
    
            const chamadas = await chamadaDeManutencaoModel.findAll({
                where: whereCondition,
                include: [
                    { model: clienteModel, as: "Cliente", attributes: ["id_cliente"] },
                    { model: equipesDeManutencaoModel, as: "EquipeDeManutencao", attributes: ["id_equipesDeManutencao", "supervisorEquipe"] },
                ],
                attributes: {
                    exclude: ['regiaoCliente'],
                },
            });
    
            res.status(200).json(chamadas);
        } catch (error) {
            console.error("Erro ao listar chamadas:", error);
            res.status(500).send("Erro ao listar chamadas de manutenção.");
        }
    },
    
    
    
    
    // Criar uma nova chamada de manutenção
    criarChamadaDeManutencao: async (req, res) => {
        try {
            const { id_cliente, id_equipeManu, tipoDeManutencao, dataManutencao, reagendamentoManutencao, pagamentoManutencao } = req.body;
    
            // 1. Buscar o cliente no banco de dados
            const cliente = await clienteModel.findByPk(id_cliente);
            if (!cliente) {
                return res.status(404).json({ error: "Cliente não encontrado!" });
            }
    
            // 2. Buscar a equipe de manutenção pelo ID fornecido
            const equipe = await equipesDeManutencaoModel.findByPk(id_equipeManu);
            if (!equipe) {
                return res.status(404).json({ error: "Equipe de manutenção não encontrada!" });
            }
    
            // 3. Criar a chamada de manutenção
            const chamadaDeManutencao = await chamadaDeManutencaoModel.create({
                id_cliente,
                id_equipeManu, // Associar a equipe pelo ID
                tipoDeManutencao,
                dataManutencao,
                reagendamentoManutencao,
                pagamentoManutencao
            });
    
            res.status(201).json(chamadaDeManutencao); // Retorna a chamada criada
        } catch (error) {
            console.error("Erro ao criar chamada de manutenção:", error);
            res.status(500).send("Erro ao criar chamada de manutenção: " + error);
        }
    },

    // Editar uma chamada de manutenção existente
    editarChamadaDeManutencao: async (req, res) => {
        try {
            const { id_manutencao } = req.params; // ID da chamada de manutenção passado na URL
            const { tipoDeManutencao,  dataManutencao, reagendamentoManutencao, pagamentoManutencao } = req.body;

            // Busca a chamada de manutenção pelo ID
            const chamadaDeManutencao = await chamadaDeManutencaoModel.findByPk(id_manutencao);

            if (!chamadaDeManutencao) {
                return res.status(404).send("Chamada de manutenção não encontrada!"); // Caso a chamada de manutenção não exista
            }

            // Atualiza os dados da chamada de manutenção
            await chamadaDeManutencaoModel.update(
                { tipoDeManutencao,  dataManutencao, reagendamentoManutencao, pagamentoManutencao },
                { where: { id_manutencao } }
            );

            res.status(200).json({ message: "Chamada de manutenção atualizada com sucesso!" });
        } catch (error) {
            res.status(500).send("Erro ao atualizar chamada de manutenção: " + error);
        }
    },

    // Deletar uma chamada de manutenção
    deletarChamadaDeManutencao: async (req, res) => {
        try {
            const { id_manutencao } = req.params; // ID da chamada de manutenção passado na URL

            // Busca a chamada de manutenção pelo ID
            const chamadaDeManutencao = await chamadaDeManutencaoModel.findByPk(id_manutencao);

            if (!chamadaDeManutencao) {
                return res.status(404).send("Chamada de manutenção não encontrada!"); // Caso a chamada de manutenção não exista
            }

            // Deleta a chamada de manutenção
            await chamadaDeManutencaoModel.destroy({ where: { id_manutencao } });

            res.status(200).json({ message: "Chamada de manutenção excluída com sucesso!" });
        } catch (error) {
            res.status(500).send("Erro ao excluir chamada de manutenção: " + error);
        }
    }
};

module.exports = chamadaDeManutencaoController;
