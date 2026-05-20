const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors({
    origin: "*"
}));

app.use(express.json());
mongoose.connect("mongodb+srv://pranaykumarmundrathi345_db_user:Pranay12345@cluster0.eifyyg1.mongodb.net/realestate?retryWrites=true&w=majority")

.then(() => {
    console.log("DB Connected");
})
.catch((err) => {
    console.log(err);
});

const employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String
});

const Employee = mongoose.model("Employee", employeeSchema);

app.get("/", (req, res) => {
    res.send("Server Running");
});

app.post("/addEmployee", async (req, res) => {

    try {

        const { name, email, password, role } = req.body;

        const newEmployee = new Employee({
            name,
            email,
            password,
            role
        });

        await newEmployee.save();

        res.json({
            message: "Employee Added Successfully"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });
    }
});

app.get("/employees", async (req, res) => {

    try {

        const employees = await Employee.find();

        res.json(employees);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`);
});