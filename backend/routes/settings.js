const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/settings", async (req, res) => {
    try {
        const user = await User.findOne();

        if (!user) {
            return res.json({
                name: "",
                email: "",
                password: ""
            });
        }

        res.json({
            name: user.name,
            email: user.email,
            password: user.password
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Failed to load settings"
        });
    }
});

module.exports = router;