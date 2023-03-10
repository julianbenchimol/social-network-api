const {Schema, model} = require('mongoose');

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
    },
    {
        toJSON:{
            getters: true,
            virtuals: true
        }
    }
)

const Thought = model('thought', thoughtSchema);
module.exports = Thought;