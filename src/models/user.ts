import mongoose from 'mongoose';

import { Schema } from 'mongoose';

const UserShema = new Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
        minlength: 8,
        maxlength: 12
    },
    name: {
        type: String
    },
    surname: {
        type: String
    },
    nationality: {
        type: Schema.Types.String,
        ref: 'Nationality'
    },
    email: {
        type: String
    },
    type: {
        type: Schema.Types.String,
        ref: 'UserType'
    }
});

UserShema.index({
    username: 1
}, {
    unique: true
});

const User = mongoose.model('users', UserShema);
export { User }