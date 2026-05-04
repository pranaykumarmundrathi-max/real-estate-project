const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/test", (req, res) => {
    res.send("user route working");
});

router.post("/addEmployee", async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        await User.create({
            name,
            email,
            password,
            role
        });

        res.send("Employee Added");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error");
    }
});

router.get("/employees", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error");
    }
});
User.create({
    name: "Admin",
    email: "admin@gmail.com",
    password: "1234",
    role: "admin"
});
module.exports = router;