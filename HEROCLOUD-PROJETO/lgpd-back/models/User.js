import { DataTypes } from "sequelize";
import sequelize from "./utils/database.js";

//declaração de constantes de usuário que veio do banco de dados definido pelo nome da tabela
const User = sequelize.define("users",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    first_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: DataTypes.STRING,
    gender: DataTypes.STRING
}, { underscored: true })

export default User;