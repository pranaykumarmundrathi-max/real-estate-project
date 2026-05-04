const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://username:password@cluster.mongodb.net/realestate")
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

app.use("/login", require("./routes/auth"));
app.use("/", require("./routes/users"));
app.use("/", require("./routes/customers"));
app.use("/", require("./routes/visits"));
app.use("/", require("./routes/settings"));
app.use("/", require("./routes/attendance"));



app.get("/", (req, res) => {
    res.send("Server Running");
});

app.listen(5000, () => {
    console.log("Server running on 5000");
});