import { DataTypes } from "sequelize";
import sequelize from "./utils/database.js";

//declaração de constantes de usuário que veio do banco de dados definido pelo nome da tabela
const Evaluation = sequelize.define("evaluations",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    concept:{
        type: DataTypes.STRING,
        allowNull: false,
    },
}, { underscored: true })

export default Evaluation;