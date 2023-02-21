const {Schema, model} = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        reacions: [reactionSchema]
    },
    {
        toJSON:{
            getters: true,
            virtuals: true
        }
    }
)

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reacions.length
})