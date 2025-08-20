const express = require('express');

const sequelize = require('./database/database');
const PORT = 5050;
const router = require('./routes/artisteRouters');

const app = express();

app.use(express.json());

app.use(router);


const database = async () =>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database', error)
    }
}

database();


app.listen (PORT, ()=>{
    console.log(`Server is listening to PORT: ${PORT}`);
});