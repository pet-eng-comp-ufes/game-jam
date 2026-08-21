-- Torna o username unico.
--
-- Conferido no banco de producao antes de escrever esta migracao: 3 usuarios,
-- 3 usernames distintos. Nao ha duplicado para resolver, entao o indice sobe
-- sem perda de dado.
CREATE UNIQUE INDEX `users_username_key` ON `users`(`username`);
