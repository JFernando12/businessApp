const mysql = require("mysql");
const { database } = require("./keys");

const connection = mysql.createConnection(database);

const connect = () => {
    connection.connect(err => {
        if(err) throw err
        console.log("Conected");
    })
}

const addProduct = (product) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO products SET sku="${product.sku}", name="${product.name}", description="${product.description}", image="${product.image}", width=${product.width}, height=${product.height}, personalized=${product.personalized}, price=${product.price}, price_5=${product.price_5}, price_10=${product.price_10}, price_50=${product.price_50}, status=${product.status}`;
        connection.query(sql, (err, row, fields) => {
            (err)
            ? reject(err)
            : resolve(row)
        })
    })
}

const showProducts = () => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM products`;
        connection.query(sql, (err, row, fields) => {
            (err)
            ? reject(err)
            : resolve(row);
        })
    })
}

const deleteProduct = (sku) => {
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM products WHERE sku="${sku}"`;
        connection.query(sql, (err, row, fields) => {
            (err)
            ? reject(err)
            : resolve(row)
        })
    })
}

module.exports = (
    {
        addProduct,
        showProducts,
        deleteProduct
    }
)