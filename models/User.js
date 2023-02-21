const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
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
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
)

const User = mongoose.model('user', userSchema);
module.exports = User;