const mysql = require("mysql");
const { database } = require("./keys");

const connection = mysql.createConnection(database);

const connect = () => {
    connection.connect(err => {
        if(err) throw err
        console.log("Conected");
    })
}

const addClient = (client) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO clients SET fullname="${client.fullname}", zip_code=${client.zip_code}, city="${client.city}", colony="${client.colony}", street="${client.street}", number=${client.number}, reference="${client.reference}", cellphone="${client.cellphone}", email="${client.email}"`;
        connection.query(sql, (err, row, fields) => {
            (err)
            ? reject(err)
            : resolve(row)
        })
    })
}

const showClients = () => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM clients`;
        connection.query(sql, (err, row, fields) => {
            (err)
            ? reject(err)
            : resolve(row);
        })
    })
}

const deleteClients = (client_id) => {
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM clients WHERE client_id="${client_id}"`;
        connection.query(sql, (err, row, fields) => {
            (err)
            ? reject(err)
            : resolve(row)
        })
    })
}

module.exports = (
    {
        addClient,
        showClients,
        deleteClients
    }
)