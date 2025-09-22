const express = require('express');
const fs = require('fs');
const router = express.Router();

router.post("/frontend/userInfo", (req, res) => {
    const { name, email, subject, message } = req.body; //<-- get data from form

    const userData = { name, email, subject, message, date: new Date().toISOString() };
    const filePath = "./data.json";
    let existingData = [];

    if (fs.existsSync(filePath)) {
        const rawData = fs.readFileSync(filePath, "utf-8");
        if (rawData) {
            existingData = JSON.parse(rawData);
        }
    }
    existingData.push(userData);
    try {
        fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
    } catch (err) {
        console.log(err);
    }
    res.json({ message: "Form submitted and saved!", user: userData });
});

module.exports = router;