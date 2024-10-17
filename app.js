// app.js

const express = require('express'); // importando express para o projeto
const path = require('path');
const characterRoutes = require('./routes/characterRoutes'); // puxando as rotas

const app = express();
const PORT = process.env.PORT || 3000; // Criando a porta do server


app.use(express.static('./public'));

// Rota da API
app.use('/api', characterRoutes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
