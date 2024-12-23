import { DataSource } from "typeorm";
import { Departamento } from "../entities/Departamento";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "password",  // Substitua pela sua senha do MySQL
  database: "minimundo", // Nome do seu banco de dados
  synchronize: true,
  logging: false,
  entities: [Departamento],
  migrations: [],
  subscribers: [],
});
