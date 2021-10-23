const router = require("express").Router();
// const {} = require("../../controllers/user-controllers")

// GET all user and POST at /api/users
router
.route("/")
.get() 
.post();

// GET one, PUT, and DELETE at /api/users/:id
router
.get("/:id")
.put()
.delete();

// POST and DELETE at /api/users/:userId/friends/:friendId
router
.route()
.post()
.delete();

module.exports = router;