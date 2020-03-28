const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); //antes de todas as requisições, ele converte todos os JSON para um objeto em JavaScript do Insomnia
app.use(routes);
/** 
 * Rota / Recursos
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação) Ex: /users?name=Diego&page=1 
   * Route Params: Parâmetros utilizados para identificar recursos de um único usuário (users/:id)
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    *   SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    *   NoSQL: MongoDB, CouchDB, ect
    * 
    *   Driver: SELECT * FROM users
    *   Query Builder: table('users').select('*').where()
    * 
    *   Para utilizarmos o Query Builder utilizamos uma ferramenta chamada Knex e baixamos o banco de dados dentro da 
    *   nossa aplicação. Para instalá-lo digite npm install knex em seguida instala o banco de dados usando o npm install sqlite3
    *   
    *   npx knex init -> cria um arquivo onde ficam as configurações de acesso do banco de dados
    */



app.listen(3333);