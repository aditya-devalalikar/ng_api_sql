const express = require('express');
const sql = require('mssql');
const app = express();

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

// app.METHOD(PATH, HANDLER)
app.get('/api/data', async (req, res) => {
    try {
        await sql.connect(config); 
        const result = await sql.query`SELECT * FROM UserDetails`;
        res.json(result.recordset);
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: 'Something failed, AD' });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`API running on port ${port}`);
});
