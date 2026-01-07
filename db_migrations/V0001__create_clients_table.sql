CREATE TABLE IF NOT EXISTS clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_clients_phone ON clients(phone);

COMMENT ON TABLE clients IS 'Таблица клиентов флористического магазина';
COMMENT ON COLUMN clients.name IS 'Имя клиента';
COMMENT ON COLUMN clients.phone IS 'Номер телефона клиента';