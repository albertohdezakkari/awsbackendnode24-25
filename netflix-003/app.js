const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/compras", (req, res) => {
  res.send("Bienvenido a las compras. ");
  //DFSA
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});