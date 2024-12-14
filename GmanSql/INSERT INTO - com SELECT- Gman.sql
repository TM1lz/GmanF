USE Gman;

ALTER TABLE Funcionarios ADD CONSTRAINT UC_NomeFuncionario UNIQUE (nome_funcionario);


INSERT INTO Funcionarios( nome_funcionario, funcao_funcionario, telefone_funcionario, email_funcionario, senha_funcionario, idEquipeFuncionario)
VALUES(
'Oscar Silva','Mecânico','19980000000', 'oscar@gmail.com', '123456789',

(SELECT id_equipesDeManutencao
	FROM EquipesDeManutencao
	WHERE regiaoEquipe = 'Sul'));


	INSERT INTO Funcionarios( nome_funcionario, funcao_funcionario, telefone_funcionario, email_funcionario, senha_funcionario, idEquipeFuncionario)
VALUES(
'Manuel Machado', 'Mecânico', '19985236541', 'manoel@gmail.com','111111112',

(SELECT id_equipesDeManutencao
	FROM EquipesDeManutencao
	WHERE regiaoEquipe = 'Norte'));


INSERT INTO Funcionarios( nome_funcionario, funcao_funcionario, telefone_funcionario, email_funcionario, senha_funcionario, idEquipeFuncionario)
VALUES(
'Alexandre Rocha', 'Mecânico', '19985236542', 'alexandre@gmail.com','111111113',

(SELECT id_equipesDeManutencao
	FROM EquipesDeManutencao
	WHERE regiaoEquipe = 'Oeste'));


INSERT INTO Funcionarios( nome_funcionario, funcao_funcionario, telefone_funcionario, email_funcionario, senha_funcionario, idEquipeFuncionario)
VALUES(
'Gilberto Gutemberg', 'Mecânico', '19855663322','gilberto@gmail.com', '111111114',

(SELECT id_equipesDeManutencao
	FROM EquipesDeManutencao
	WHERE regiaoEquipe = 'Centro'));


SELECT * FROM Funcionarios;
