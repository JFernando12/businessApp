const mysql = require("mysql");
const { database } = require("./keys");

const connection = mysql.createConnection(database);

const connect = () => {
    connection.connect(err => {
        if(err) throw err
        console.log("Conected");
    })
}

const addOrder = (order) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO orders SET order_number=${order.order_number}, product_sku="${order.product_sku}", asesor="${order.asesor}", origin="${order.origin}", username="${order.username}"`;
        connection.query(sql, (err, row, fields) => {
            (err)
            ? reject(err)
            : resolve(row)
        })
    })
}

const showOrder = () => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM orders`;
        connection.query(sql, (err, row, fields) => {
            (err)
            ? reject(err)
            : resolve(row);
        })
    })
}

const deleteOrder = (order_id) => {
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM orders WHERE order_id="${order_id}"`;
        connection.query(sql, (err, row, fields) => {
            (err)
            ? reject(err)
            : resolve(row)
        })
    })
}

const clientOrder = (order_id) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT client_id FROM orders WHERE order_id=${order_id}`;
        connection.query(sql, (err, row, fields) => {
            (err)
            ? reject(err)
            : resolve(row);
        })
    })
}

const addClientOrder = (order_id, client_id) => {
    return new Promise((resolve, reject) => {
        const sql = `UPDATE orders SET client_id=${client_id} WHERE order_id=${order_id}`;
        console.log(sql)
        connection.query(sql, (err, row, fields) => {
            (err)
            ? reject(err)
            : resolve(row);
        })
    })
}

const showClientOrder = (client_id) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM clients WHERE client_id=${client_id}`;
        connection.query(sql, (err, row, fields) => {
            (err)
            ? reject(err)
            : resolve(row);
        })
    })
}

module.exports = (
    {
        addOrder,
        showOrder,
        deleteOrder,
        clientOrder,
        addClientOrder,
        showClientOrder
    }
)