// configuración de mysql y la base de datos 

import mysql from "promise-mysql";
import config from "../config.js";

const connection = mysql.createConnection({
    host:config.host,
    user:config.user,
    password:config.password,
    database: config.database,
    port :config.port
},{multipleStatement:true});


const getConnection = () =>{
    return connection;
}
module.exports = {
    getConnection
}