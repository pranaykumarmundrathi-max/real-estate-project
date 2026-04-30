// routes/attendance.js

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
    employeeName: String,
    email: String,
    loginTime: String,
    logoutTime: String,
    date: {
        type: String,
        default: () => new Date().toLocaleDateString()
    }
});

const Attendance = mongoose.model("Attendance", AttendanceSchema);

// ➕ Save Attendance
router.post("/attendance", async (req, res) => {
    try {
        const data = new Attendance(req.body);
        await data.save();

        res.json({
            message: "✅ Attendance Saved Successfully"
        });

    } catch (err) {
        res.status(500).json({
            message: "❌ Error Saving Attendance",
            error: err.message
        });
    }
});

// 📋 Get Attendance List
router.get("/attendance", async (req, res) => {
    try {
        const data = await Attendance.find();
        res.json(data);

    } catch (err) {
        res.status(500).json({
            message: "❌ Error Loading Attendance",
            error: err.message
        });
    }
});

module.exports = router;