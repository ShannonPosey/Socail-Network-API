const router = require("express").Router();
const {getThoughts, getThoughtsById, createThoughts, updateThoughts, deleteThoughts, createReaction, removeReaction} = require("../../controllers/thoughts-controllers");

// GET all thoughts and POST at /api/thoughts
router
.route("/")
.get(getThoughts)
.post(createThoughts);

// GET one thought, PUT, and DELETE at /api/thoughts/:id
router
.route("/:id")
.get(getThoughtsById)
.put(updateThoughts)
.delete(deleteThoughts);

// POST at /api/thoughts/:thoughtId/reactions
router
.route("/:thoughtId/reactions")
.post(createReaction);

// DELETE at /api/thoughts/:thoughtId/reactions/:reactionId
router
.route("/:thoughtId/reactions/:reactionId")
.delete(removeReaction);

module.exports = router;