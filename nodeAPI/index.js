const express = require('express');
const sql = require('mssql');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))


//Configure databse
const config = {
    type: "mssql",
    user: "aditya",
    password: "dotnet@123",
    server: "VAIO",
    database: "ManagementDB",
    port: 1433,
    synchronize: true,
    options: { "trustServerCertificate": true }
};


//GET method to get all users data
app.get('/api/users', async (req, res) => {
    try {
        await sql.connect(config);
        const result = await sql.query`SELECT * FROM UserDetails where Active=1`;
        let response = {
            isSuccess: false,
            data: [],
            errorMessages: ['Record not found, AD.']
        }
        if (result.recordset.length > 0) {
            response = {
                isSuccess: true,
                data: result.recordset,
                errorMessages: []
            }
            res.json(response);
        } else {
            res.json(response);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: 'Something failed, AD' });
    }
});


//GET method to get user by id
app.get('/api/user/:id', async (req, res) => {
    try {
        await sql.connect(config);
        var id = req.params.id;
        const query = sql.query`SELECT * FROM UserDetails WHERE Id=${id} and Active=1`;
        console.log(query);
        const result = await query;
        console.log(result);
        let response = {
            isSuccess: false,
            data: [],
            errorMessages: ['Record not found.']
        }
        if (result.recordset.length > 0) {
            response = {
                isSuccess: true,
                data: result.recordset,
                errorMessages: []
            }
            res.json(response);
        } else {
            res.json(response);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: 'Something failed, AD' });
    }
});


//POST method to create new user in the databse
app.post('/api/user', async (req, res) => {
    try {
        await sql.connect(config);

        let response = {
            isSuccess: false,
            data: [],
            errorMessages: ['Record not found.']
        }

        const lastIdResult = await sql.query`SELECT MAX(Id) FROM UserDetails`;

        const lastId = Object.values(lastIdResult.recordset[0])[0];

        const result = await sql.query`INSERT INTO UserDetails (Id, UserName, Email, Password, Role, CollegeName, UniversityName, Active) VALUES (${lastId} + 1, ${req.body.UserName}, ${req.body.Email}, ${req.body.Password}, ${req.body.Role}, ${req.body.CollegeName}, ${req.body.UniversityName}, 1)`;

        let finalResult = [];

        if (result.rowsAffected.find(item => item == 1)) {
            finalResult = await sql.query`SELECT * from UserDetails WHERE Id=${lastId}`

            if (finalResult.recordset.length > 0) {
                response = {
                    isSuccess: true,
                    data: finalResult.recordset,
                    errorMessages: []
                }
                res.json(response);
            } else {
                res.json(response);
            }
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: 'Something failed, AD' });
    }
});


//PUT method to update the details of the user
app.put('/api/user', async (req, res) => {
    try {
        await sql.connect(config);
        let response = {
            isSuccess: false,
            data: [],
            errorMessages: ['Record not found.']
        }

        const result = await sql.query`UPDATE UserDetails SET UserName = ${req.body.UserName}, Email = ${req.body.Email}, Password = ${req.body.Password}, Role = ${req.body.Role}, CollegeName = ${req.body.CollegeName}, UniversityName = ${req.body.UniversityName} WHERE Id = ${req.body.Id}`

        if (result.rowsAffected.find(item => item == 1)) {
                response = {
                    isSuccess: true,
                    data: result.recordset,
                    errorMessages: []
                }
                res.json(response);
            } else {
                res.json(response);
            }
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: 'Something failed, AD' });
    }
});


//DELETE method to delete the user by id
app.delete('/api/user', async (req, res) => {
    try {
        await sql.connect(config);
        console.log(res.body);
        const id = req.body.Id;
        const result = await sql.query`UPDATE UserDetails SET active=0 WHERE Id=${id}`;
        let response = {
            isSuccess: false,
            data: [],
            errorMessages: ['Record not found.']
        }
        console.log(result);
        if (result.rowsAffected.find(item => item == 1)) {
            response = {
                isSuccess: true,
                data: result.recordset,
                errorMessages: []
            }
            res.json(response);
        } else {
            res.json(response);
        }
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