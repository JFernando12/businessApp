const express = require("express");
const router = express.Router();
const { addClient, showClients, deleteClients } = require("../sql/clients")

router.get("/", async(req, res) => {
    const clients = await showClients();
    res.render("clients/all.hbs", {clients})
})

router.get("/add", (req, res) => {
    res.render("clients/add.hbs")
})

router.post("/add", async(req, res) => {
    const clients = req.body;
    await addClient(clients)
    res.redirect("/clients")
})

router.get("/delete/:client_id", async(req, res) => {
    await deleteClients(req.params.client_id),
    res.redirect("/clients")
})

module.exports = router;