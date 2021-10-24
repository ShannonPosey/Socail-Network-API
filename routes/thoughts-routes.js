const router = require('express').Router();

const {
    getThoughts,
    getThoughtsById,
    createThoughts,
    updateThoughts,
    deleteThoughts,
    createReaction,
    removeReaction
} = require('../controllers/thoughts-controllers');

// GET all thoughts, POST at /api/thoughts
router.route('/')
    .get(getThoughts)
    .post(createThoughts);

// GET one thoughts, PUT, DELETE at /api/thoughts/:id
router.route('/:id')
    .get(getThoughtsById)
    .put(updateThoughts)
    .delete(deleteThoughts);

// POST thoughts, at /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
    .post(createReaction);

// DELETE reactions, at /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;