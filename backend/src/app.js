//importando express para as routes e os middlewares
const express = require("express");
//inicializando a aplicação express
const app = express();
//definição de localhost
const PORT = process.env.PORT || 3000;
//verificando com rota inicial
app.get("/", (req, res) => {
  res.send("Server rodando!");
});

app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});
