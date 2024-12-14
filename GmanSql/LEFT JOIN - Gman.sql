 SELECT 
Funcionarios.nome_funcionario AS Nome,
EquipesDeManutencao.regiaoEquipe AS Regiao
  
  FROM
  Funcionarios

  LEFT JOIN

  EquipesDeManutencao ON Funcionarios.idEquipeFuncionario = id_equipesDeManutencao;