const express = require('express');
const sql = require('mssql');
const app = express();


//Configure databse
const config = {
    type: "mssql",
    user: "aditya",
    password: "dotnet@123",
    server: "VAIO",
    database: "ManagementDB",
    port: 1433,
    synchronize: true,
    options: {"trustServerCertificate": true}   
};


//set the "Access-Control-Allow-Origin" header from server side
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });
  

//GET method to get all users data
app.get('/api/users', async (req, res) => {
    try {
        await sql.connect(config); 
        const result = await sql.query`SELECT * FROM UserDetails`;
        const response = {
            isSuccess: false,
            data : [],
            errorMessages : ['Record not found.']
        }
        if(result.recordset>0){
            response = {
                isSuccess: true,
                data : result.recordset,
                errorMessages : []
            }
            res.json(response);
        }
        res.json(response);
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: 'Something failed, AD' });
    }
});


//GET method to get user by id
app.get('/api/user/:id', async (req, res) => {
    try {
        await sql.connect(config); 
        const result = await sql.query`SELECT * FROM UserDetails`;
        res.json(result.recordset);
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: 'Something failed, AD' });
    }
});


//POST method to create new user in the databse
app.post('/api/user', async (req, res) => {
    try {
        await sql.connect(config); 
        const result = await sql.query`SELECT * FROM UserDetails`;
        res.json(result.recordset);
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: 'Something failed, AD' });
    }
});


//PUT method to update the details of the user
app.put('/api/user', async (req, res) => {
    try {
        await sql.connect(config); 
        const result = await sql.query`SELECT * FROM UserDetails`;
        res.json(result.recordset);
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: 'Something failed, AD' });
    }
});


//DELETE method to delete the user by id
app.delete('/api/user', async (req, res) => {
    try {
        await sql.connect(config); 
        const result = await sql.query`SELECT * FROM UserDetails`;
        res.json(result.recordset);
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: 'Something failed, AD' });
    }
});


//port configuration
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`API running on port ${port}`);
});