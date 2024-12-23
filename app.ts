import express, { Express } from "express";
import { AppDataSource } from "./config/database";
import { router } from "./routes/departamentoRoutes";

const app: Express = express();
app.use(express.json());
app.use(router);

AppDataSource.initialize()
  .then(() => {
    console.log("Conectado ao banco de dados!");
    app.listen(3000, () => {
      console.log("Servidor rodando na porta 3000");
    });
  })
  .catch((error) => console.log("Erro na conexão com o banco de dados:", error));
