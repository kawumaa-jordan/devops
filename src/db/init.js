import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
import { SetDatabaseIfNotExist, SetUsersTable } from './setup.js'
dotenv.configDotenv()

async function init(){
    const {
        db_host,
        db_port,
        db_user,
        db_password,
        db_name,
    } = process.env
    const pool = mysql.createPool({
        host:db_host,
        port:db_port,
        user:db_user,
        password:db_password,
        database:db_name,

    })

    await  SetDatabaseIfNotExist()

    const dropAndRecreate = true

    await SetUsersTable(pool,dropAndRecreate)

pool.end()

}
init().catch(error=>{
        console.log('Error initializing database:', error);
   
})