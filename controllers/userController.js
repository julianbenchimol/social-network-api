const { ObjectId} = require ('mongoose').Types;
const User = require('../models/User');

module.exports = {
    getUsers(req, res){
        User.find({})
        .then(async (users) =>{
            const userObject = {
                users
            }
            return res.json(userObject)
        })
        .catch((err) =>{
            console.log(err);
            return res.status(500).json(err)
        })
    },
    getOneUser(req, res){
        User.findOne({_id: req.params.userId})
        .select('-__v')
        .then(async (user)=>{
            !user
            ?res.status(404).json({message: "No User Exists with this ID."})
            : res.json({user})
        })
        .catch((err)=>{
            console.log(err);
            return res.status(500).json(err)
        })

    },
    createNewUser(req, res){
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err)=> res.status(500).json(err))
    },
    updateUser(req, res){
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$set: req.body},
            {runValidators: true, new: true}
        )
        .then((user) =>
            !user  
            ? res.status(404).json({message: "This User does not Exist"})
            : res.json(user)
        )
        .catch((err)=> res.status(500).json(err))
    },
    deleteUser(req, res){
        User.findOneAndDelete({_id: req.params.userId},
        (err, result) => {

            if(result){
                res.status(200).json(result)
            }
            else {
                res.status(500).json({message: "Something went wrong"})
            }
        })
    }
};