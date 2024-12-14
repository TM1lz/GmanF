// controllers/funcionarioController.js
const funcionarioModel = require('../models/funcionario.js'); // Importando o modelo Funcionario

const funcionarioController = {
    // Listar todos os Funcionarios
    listarFuncionarios: async (req, res) => {
        try {
            const funcionarios = await funcionarioModel.findAll(); // Retorna todos os funcionarios
            res.status(200).json(funcionarios); // Retorna os funcionarios em formato JSON
        } catch (error) {
            res.status(500).send("Erro ao listar funcionarios: " + error); // Caso ocorra algum erro
        }
    },

    // Criar um novo funcionario
    criarFuncionario: async (req, res) => {
        try {
            const { nome_funcionario, funcao_funcionario, telefone_funcionario, email_funcionario, login_funcionario, idEquipeFuncionario  } = req.body; // Extrai os dados do corpo da requisição

            // Cria um novo funcionario
            const funcionario = await funcionarioModel.create({
                nome_funcionario,
                funcao_funcionario,
                telefone_funcionario,
                email_funcionario,
                login_funcionario,
                idEquipeFuncionario,
                
                
                
            });

            res.status(201).json(funcionario); // Retorna o funcionario criado
        } catch (error) {
            res.status(500).send("Erro ao criar funcionario: " + error); // Caso ocorra algum erro
        }
    },
 
    // Editar um funcionario existente
    editarFuncionario: async (req, res) => {
        try {
            const { id_funcionario } = req.params; // ID do funcionario passado na URL
            const { nome_funcionario, funcao_funcionario, telefone_funcionario, email_funcionario, login_funcionario  } = req.body; // Dados atualizados do corpo da requisição

            // Busca o funcionario pelo ID
            const funcionario = await funcionarioModel.findByPk(id_funcionario);

            if (!funcionario) {
                return res.status(404).send("Funcionario não encontrado!"); // Caso o funcionario não exista
            }

            // Atualiza os dados do funcionario
            await funcionarioModel.update({ nome_funcionario, funcao_funcionario, telefone_funcionario, email_funcionario, login_funcionario  }, { where: { id_funcionario } });

            res.status(200).json({ message: "Funcionario atualizado com sucesso!" }); // Retorna a mensagem de sucesso
        } catch (error) {
            res.status(500).send("Erro ao atualizar funcionario: " + error); // Caso ocorra algum erro
        }
    },

    // Deletar um funcionario
    deletarFuncionario: async (req, res) => {
        try {
            const { id_funcionario } = req.params; // ID do funcionario passado na URL

            // Busca o funcionario pelo Id 
            const funcionario = await funcionarioModel.findByPk(id_funcionario);

            if (!funcionario) {
                return res.status(404).send("Funcionario não encontrado!"); // Caso o funcionario não exista
            }

            // Deleta o funcionario
            await funcionarioModel.destroy({ where: { id_funcionario } });

            res.status(200).json({ message: "Funcionario excluído com sucesso!" }); // Retorna a mensagem de sucesso
        } catch (error) {
            res.status(500).send("Erro ao excluir funcionario: " + error); // Caso ocorra algum erro
        }
    }
};

module.exports = funcionarioController;
