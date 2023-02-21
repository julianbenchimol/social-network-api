const {Schema, model} = require ('mongoose');
const thoughtSchema = require('./Thought');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            match: /.+\@.+\..+/,
            unique: true
        },
        friends: [userSchema],
        thoughts: [thoughtSchema]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
)

userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
})

const User = model('user', userSchema);
module.exports = User;