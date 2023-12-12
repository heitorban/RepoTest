import { DataTypes } from "sequelize";
import sequelize from "./utils/database.js";

//declaração de constantes de usuário que veio do banco de dados definido pelo nome da tabela
const Teacher = sequelize.define("teachers",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
}, { underscored: true })

export default Teacher;