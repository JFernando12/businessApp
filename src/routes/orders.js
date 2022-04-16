const express = require("express");
const router = express.Router();
const { addOrder, showOrder, deleteOrder } = require("../sql/orders");

router.get("/", async(req, res) => {
    const orders = await showOrder();
    res.render("orders/all.hbs", {orders})
})

router.get("/add", (req, res) => {
    res.render("orders/add.hbs")
})

router.post("/add", async(req, res) => {
    const order = req.body;
    console.log(order)
    await addOrder(order)
    res.redirect("/orders")
})

router.get("/delete/:order_id", async(req, res) => {
    await deleteOrder(req.params.order_id),
    res.redirect("/orders")
})

module.exports = router;