const express = require("express");
const app = express();
const PORT = 3000;

app.get("/:name", (req, res) => {
    res.json(`Hello ${req.params.name}`);
});

app.listen(PORT, () => {
    console.log(`Running Port:${PORT}`);
});
module.exports=app;