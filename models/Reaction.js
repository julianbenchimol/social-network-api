const { ObjectID } = require('bson')
const {Schema, model} = require('mongoose')

const reactionSchema = new Schema(
    {
        reactionId: {
            type: ObjectID,
            default: new ObjectID
        },
        reactionBody:{
            type: String,
            maxLength: 280,
            required: true
        },
        username: {
            type: String,
            required: true
        }
    },
    {
        toJSON:{
            getters: true
        }
    }
)