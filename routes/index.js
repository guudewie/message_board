const express = require("express");
const { format } = require("morgan");
const router = express.Router();
const db = require("../db/queries");

function formatDate(date) {
  return date.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/* GET home page. */
router.get("/", async function (req, res, next) {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

/* GET reset messages. */
router.get("/reset", async function (req, res, next) {
  await db.deleteAllMessages();
  res.redirect("/");
});

/* POST form submission. */
router.post("/new", async function (req, res, next) {
  let text = req.body.text;
  let user = req.body.user;
  await db.insertMessage(user, text);
  res.redirect("/");
});

module.exports = router;
