const express = require("express");
const cors = require("cors");
const ApiError = require("./app/api.error");

const app = express();

const productRouter = require("./app/routes/product.routes");
const customerRouter = require("./app/routes/customer.routes");

app.use(express.json());
app.use(cors());

app.use("/api/products", productRouter);
app.use("/api/customers", customerRouter);

app.get("/", (req, res) => {
    res.send({ msg: "Welcome to vietnamese pho application" });
});

app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        msg: err.message || "Internal Server Error",
    });
});

module.exports = app;
