//middleware / index.js
import mysql from 'mysql2/promise';

//npm i mysql2
export default defineEventHandler(async (event) => {
    event.context.db = await mysql.createConnection({
        host: 'svc.sel3.cloudtype.app',
        user: 'root',
        password: '1234',
        port: '31264',
        database: 'greendb'
    })
})