const path = require('path');
const router = require("express").Router();

let publicPath = path.join(__dirname, '../public');

// Home page
router.get("/", (req, res) => {
    res.sendFile('/index.html', { root: publicPath });
})

// Dashboard page
router.get("/stats", (req, res) => {
    res.sendFile('/stats.html', { root: publicPath });
})

// Workout pages
router.get("/exercise", (req, res) => {
    res.sendFile('/exercise.html', { root: publicPath });
})

module.exports = router;