import express from "express";

//@types/express
const app = express();

/**
 * GET    => Busca uma informação
 * POST   => Inserir (criar) uma informação
 * PUT    => Altera uma informação
 * DELETE => Remover um dado
 * PATCH  => Altera uma informação específica
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



