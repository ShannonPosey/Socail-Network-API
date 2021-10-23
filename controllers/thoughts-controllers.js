const {User, Thoughts} = require("../models");


const thoughtController = {
// get all thoughts
getThoughts(req, res) {
    Thoughts.find({})
    .populate({
        path: "reactions",
        select: "-__v"
    })
    .select("-__v")
    .then(dbThoughtData => res.json(dbThoughtData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
},
// get thoughts by id
getThoughtsById({param}, res) {
    Thoughts.findOne({_id: param.id})
    .populate({
        path: "reactions",
        select: "-__v"
    })
    .select("-__v")
    .then(dbThoughtData => {
        if (!dbThoughtData) {
            res.status(404).json({message: "No thought found with that id!"});
        return;
        }
        res.json(dbThoughtData);
    }) 
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
},
// create thoughts
createThoughts({body}, res) {
    Thoughts.create(body)
    .then(({username, _id}) => {
        return User.findOneAndUpdate(
            {username: username},
            {$push: {thoughts: _id}},
            {new: true, runValidators: true}
        )
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({message: "No user found with that id!"});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
},
// update thoughts
updateThoughts({body, params}, res) {
    Thoughts.findOneAndUpdate({_id: params.id}, body,
        {new: true, runValidators: true}
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({message: "No thought found with that id!"});
            }
            res.json(dbThoughtData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    );
},
// delete thoughts
deleteThoughts({params}, res) {
    Thoughts.findOneAndDelete({_id: params.id})
    .then(({username}) => {
        return User.findOneAndUpdate(
            {username: username},
            {$push: {reactions: body}},
            {new: true, runValidators: true}
        )
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({message: "No user found with that id!"});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
},
createReaction({params, body}, res) {
    Thoughts.findOneAndUpdate(
        {_id: params.thoughtId},
        {$push: {reactions: body}},
        {new: true, runValidators: true}
    )
    .then(dbThoughtData => {
        if (!dbThoughtData) {
            res.status(404).json({message: "No thought found with that id!"});
            return;
        }
        res.json(dbThoughtData);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
},
removeReaction({param}, res) {
    Thoughts.findOneAndUpdate(
        {_id: params.thoughtId},
        {$pull: {reactions: {reactionId: params.reactionId}}},
        {new: true}
    )
    .then(dbThoughtData => {
        if (!dbThoughtData) {
            res.status(404).json({message: "No thoughts found with that id!"});
            return;
        }
        res.json(dbThoughtData);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
}
};

module.exports = thoughtController;

