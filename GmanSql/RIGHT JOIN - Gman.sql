 SELECT 
Funcionarios.nome_funcionario AS Nome,
Funcionarios.id_funcionario AS ID,
EquipesDeManutencao.regiaoEquipe AS Regiao,
EquipesDeManutencao.supervisorEquipe AS Supervisor,
EquipesDeManutencao.id_equipesDeManutencao AS IDEquipe
  
  FROM
  Funcionarios
  

  RIGHT JOIN

  EquipesDeManutencao ON Funcionarios.idEquipeFuncionario = id_equipesDeManutencao;