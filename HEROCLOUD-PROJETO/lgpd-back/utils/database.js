import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    //nome do banco de dados
    "lgpd-database",
    //usuario:
    "postgres",
    //senha:
    "postgres",
    {
        //configurações da conexão
        host:"localhost",
        dialect: "postgres",
        port: 5432,
        define: {
            //desativa data de createdAt e updatedAt
            timestamps: false
        }
    }

);

export default sequelize;