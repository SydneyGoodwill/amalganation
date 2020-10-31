const express = require("express");
const db = require("../models");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
  db;
});

router.get("/register", (req, res) => {
  console.log(req.body);
  console.log(db.user);
  res.render("register");
});

router.post("/register", async (req, res) => {
  try {
    console.log("POST ", req.body);
    await db.User.create(req.body);
    res.redirect("/login");
  } catch (err) {
    res.status(500);
  }
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;