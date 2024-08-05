const express = require("express");
const { format } = require("morgan");
const router = express.Router();

let messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: formatDate(new Date()),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: formatDate(new Date()),
  },
];

function formatDate(date) {
  return date.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

/* POST reset messages. */
router.post("/reset", function (req, res, next) {
  messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: formatDate(new Date()),
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: formatDate(new Date()),
    },
  ];
});

/* POST form submission. */
router.post("/new", function (req, res, next) {
  let text = req.body.text;
  let user = req.body.user;
  messages.push({ text: text, user: user, added: formatDate(new Date()) });
  console.log(messages);
  console.log("body", req);
  res.redirect("/");
});

module.exports = router;
