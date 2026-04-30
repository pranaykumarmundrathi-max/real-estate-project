const express = require("express");
const router = express.Router();
const multer = require("multer");
const Visit = require("../models/Visit");

// storage
const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});

const upload = multer({ storage });

// API
router.post(
    "/visit",
    upload.fields([
        { name: "audio" },
        { name: "selfie" }
    ]),
    async (req, res) => {
        try {
            const visit = new Visit({
                customerId: req.body.customerId,
                employeeId: req.body.employeeId,
                audio: req.files["audio"]?.[0]?.filename,
                selfie: req.files["selfie"]?.[0]?.filename,
                time: new Date()
            });

            await visit.save();

            res.json({
                message: "Visit saved"
            });

        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Upload failed"
            });
        }
    }
);

module.exports = router;