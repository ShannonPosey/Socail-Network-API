const router = require("express").Router();
const {} = require("../../controllers/thoughts-controllers");

// GET all thoughts and POST at /api/thoughts
router
.route("/")
.get()
.post();

// GET one thought, PUT, and DELETE at /api/thoughts/:id
router
.route("/:id")
.put()
.delete();

// POST at /api/thoughts/:thoughtId/reactions
router
.route("/:thoughtId/reactions")
.post();

// DELETE at /api/thoughts/:thoughtId/reactions/:reactionId
router
.route("/:thoughtId/reactions/:reactionId")
.delete();