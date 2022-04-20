const express = require("express");
const router = express.Router();
const { addOrder, showOrder, deleteOrder, clientOrder, addClientOrder, showClientOrder } = require("../sql/orders");
const { showClients} = require("../sql/clients");

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

router.get("/client/:order_id", async(req, res) => {
    const client = await clientOrder(req.params.order_id);
    const order_id = req.params.order_id;
    var clients = null;
    if (client[0].client_id == null) {
        clients = await showClients(client[0].client_id);
    }
    else {
        var client_order = await showClientOrder(client[0].client_id);
        console.log(client_order)
    }
    res.render("orders/client.hbs", {clients, order_id, client: client_order})
})

router.get("/client/:order_id/:client_id", async(req, res) => {
    const order_id = req.params.order_id;
    const client_id = req.params.client_id;
    console.log(order_id, client_id)
    await addClientOrder(order_id, client_id);
    res.send("actualizado")
    
})

module.exports = router;