const router = require("express").Router();
const User = require("../models/User");

router.post("/", async (req, res) => {
  try {
    console.log("BODY:", req.body);

    if (!req.body.email || !req.body.password) {
      return res.json({ error: "Missing data" });
    }

    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password
    });

    console.log("USER:", user);

    if (!user) {
      return res.json({ error: "Invalid login" });
    }

    res.json(user);

  } catch (err) {
    console.log("FULL ERROR:", err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;