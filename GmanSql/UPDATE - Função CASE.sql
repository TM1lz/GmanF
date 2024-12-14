USE Gman;

UPDATE EquipesDeManutencao
SET supervisorEquipe = CASE
    WHEN regiaoEquipe = 'Sul' THEN 'Caio'
    WHEN regiaoEquipe = 'Norte' THEN 'Alisson'
    WHEN regiaoEquipe = 'Oeste' THEN 'Vinicius'
    WHEN regiaoEquipe = 'Centro' THEN 'Eledilson'
    END
WHERE regiaoEquipe IN ('Sul', 'Norte', 'Oeste', 'Centro');
