const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

// get all articles
router.get("/", articleController.get_all_articles);

// get three first articles
router.get("/three_first_articles", articleController.get_three_first_articles);

// get five articles
router.get("/five_articles", articleController.get_five_articles);

// get one article
router.get("/:id", articleController.get_one_article);

// add comment to an article
router.post("/addComment", articleController.add_comment_artice);

module.exports = router;