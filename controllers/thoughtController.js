const {ObjectId} = require('mongoose').Types
const Thought = require('../models/Thought');
const {Reaction} = require('../models/Reaction');

module.exports = {
    getThoughts(req, res){
        Thought.find()
        .then(async (thoughts) =>{
            const thoughtObject = {
                thoughts
            }
            return res.json(thoughtObject)
        })
        .catch((err)=>{
            console.log(err)
            res.status(500).json(err)
        })
    },
    getOneThought(req, res){
        Thought.findOne({_id: req.params.thoughtId})
        .select('-__v')
        .then(async(thought) =>{
            !thought
                ? res.status(404).json({message: "This thought does not exist"})
                : res.json({thought})
        })
        .catch((err)=>{
            console.log(err)
            res.status(500).json(err)
        })
    },
    createThought(req, res){
        Thought.create(req.body)
        .then((thought) => res.json(thought))
        .catch((err)=> res.status(500).json(err))
    },
    updateThought(req, res){
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$set: req.body},
            {runValidators: true, new: true}
        )
        .then((thought) =>
            !thought
                ? res.status(404).json({message: "This thought does not exist"})
                : res.json(thought)
        )
        .catch((err) => res.status(500).json(err))
    },
    deleteThought(req, res){
        Thought.findOneAndDelete({_id: req.params.thoughtId})
        .then((thought) =>{
            res.json({message: "Thought deleted"})
        })
        .catch((err) => res.status(500).json(err))
    }
};