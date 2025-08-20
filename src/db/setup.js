import mysql from "mysql2/promise"

import dotenv from 'dotenv'
dotenv.config()

export async function SetDatabaseIfNotExist() {
    const {
        DB_HOST: db_host,
        DB_PORT: db_port,
        DB_USER: db_user,
        DB_PASSWORD: db_password,
        DB_NAME: db_name
    } = process.env;

// contection to database
const connection = mysql.createConnection({
    host:db_host,
    port:db_port,
    user:db_user,
    password:db_password,
})


try {
   (await connection).query(`CREATE DATABASE IF NOT EXISTS ${db_name}`);

} catch (error) {
    console.error('Error creating database:', error);
    throw error;

}finally{
    (await connection).end()


}

}

// users tables

export async function SetUsersTable(pool,dropAndRecreate){
    if(dropAndRecreate){
        const sql = `Drop table if exists users`
try {
    console.log('creating users table');
    
    await pool.query(sql)
} catch (error) {
    console.log('User table drop error:',error);
    throw error;
    
}

    }
  

    try{
        console.log('creating  table users');
        await pool.query(`Create Table  if not exists Users  (
            id int not null auto_increment,
            name varchar(255),
            email varchar(255),
            password varchar(255),
            primary key(id)
        )
        `)
        console.log('users table created');        
    }catch(error){
        console.log('User table create error:',error);
        throw error;
    }finally{
        console.log('users table creation finished');
   
    }

}