-- 03_SQL/01_create_schemas.sql
-- Schémas pour organiser le DW
CREATE SCHEMA stg; -- Zone de staging
CREATE SCHEMA dw;  -- Data Warehouse proprement dit
CREATE SCHEMA util; -- Utilitaires (fonctions, logs)

-- Commentaires
COMMENT ON SCHEMA stg IS 'Zone de staging - données brutes';
COMMENT ON SCHEMA dw IS 'Data Warehouse - modèle étoile';
COMMENT ON SCHEMA util IS 'Fonctions utilitaires et logs';

-- Donner les droits
GRANT USAGE ON SCHEMA stg TO dw_user;
GRANT USAGE ON SCHEMA dw TO dw_user;
GRANT USAGE ON SCHEMA util TO dw_user;

-- Créer table de suivi des jobs
CREATE TABLE util.job_execution_log (
    job_id SERIAL PRIMARY KEY,
    job_name VARCHAR(100),
    start_time TIMESTAMP,
    end_time TIMESTAMP,
    rows_processed INT,
    status VARCHAR(20), -- 'SUCCESS', 'ERROR', 'WARNING'
    error_message TEXT
);