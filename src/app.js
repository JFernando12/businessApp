const express = require("express");
const bodyParser = require("body-parser")
const morgan = require("morgan")
const path = require("path");
const { engine } = require("express-handlebars");

const app = express();

//Settings
app.set("port", 3000);
app.set("AppName", "The Dream Gift");
app.set("views", path.resolve(__dirname, "views"));
app.engine(".hbs", engine({
    defaultLayout: "main",
    layoutsDir: path.resolve(app.get("views"), "layouts"),
    partialsDir: path.resolve(app.get("views"), "partials"),
    extname: ".hbs",
    helpers: require("./lib/handlebars")
}))

//Middleware
app.use(morgan("dev"));
app.use(express.json());

//Use req.body
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

//Routes
app.use(require("./routes/index"));
app.use("/products", require("./routes/products"));
app.use("/clients", require("./routes/clients"))
app.use("/orders", require("./routes/orders"));
app.use("/personalization", require("./routes/personalization"));

//Public
app.use(express.static(path.resolve(__dirname, "public")))

//Start server
app.listen(app.get("port"), () => {
    console.log("Server on port" + app.get("port"));
})