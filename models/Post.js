const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users', 
        
    },
    text: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    avatar: {
        type: String
    },

    likes: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }
    }],
    
    likes: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        text: {
            type: String,
            required:false
        },
        name: {
            type: String
        },
        avatar: {
            type: String
        },
    }],
    date: {
        type:Date,
        default: Date.now
    }

});

module.exports = Post = mongoose.model('post', PostSchema);