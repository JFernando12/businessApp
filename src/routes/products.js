const express = require("express");
const { addProduct, showProducts, deleteProduct } = require("../sql/products")

const router = express.Router();

router.get("/", async(req, res) => {
    const products = await showProducts();
    res.render("products/all.hbs", {products})
})

router.get("/add", (req, res) => {
    res.render("products/add.hbs")
})

router.post("/add", async(req, res) => {
    const product = req.body;
    await addProduct(product);
    res.redirect("/products");
})

router.get("/delete/:sku", async(req, res) => {
    const sku = req.params.sku
    await deleteProduct(sku);
    res.redirect("/products");
})

module.exports = router;