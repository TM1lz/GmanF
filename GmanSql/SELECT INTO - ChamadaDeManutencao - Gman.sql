USE Gman;



INSERT INTO ChamadaDeManutencao(tipoDeManutencao, regiaoCliente, dataManutencao, reagendamentoManutencao, pagamentoManutencao, id_cliente, id_equipeManu)
VALUES(
'preventiva', 'Sul', '2024/11/10', NULL, '150.00',

(SELECT id_cliente FROM Cliente WHERE nome_cliente = 'Condessa'),
(SELECT id_equipesDeManutencao FROM EquipesDeManutencao  WHERE regiaoEquipe = 'Sul'));
