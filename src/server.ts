import express from "express";

//@types/express
const app = express();

//Rotas

/**
 * GET    => Busca uma informação
 * POST   => Inserir (criar) uma informação
 * PUT    => Altera uma informação
 * DELETE => Remover um dado
 * PATCH  => Altera uma informação específica
 */

/**
 * Tipos de parâmetros
 * Router Params => http://localhost:3000/produtos/7874512136516
 * Query Params => http://localhost:3000/produtos?name=teclado&description=tecladobom&
 * 
 * Body Params =>{              //usado POST, PUT, PATCH
 * "name": "teclado",
 * "description": "teclado bom"
 * }
 */

app.get("/test", (request, response) => {
  

  //Request => Entrando
  //Response => Saindo
  return response.send("Olá NLW metódo GET");
});

app.post("/test-post", (request, response) => {
  return response.send("Ola NLW metódo POST");
});

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));



