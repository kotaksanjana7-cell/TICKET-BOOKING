const express = require ("express");
const router =express.Router();
const userroute=require("./user");
router.use("/user",userroute);

module.exports=router;