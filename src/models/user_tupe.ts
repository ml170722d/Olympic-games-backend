import mongoose from 'mongoose';

import { Schema } from 'mongoose';

const UserType = new Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    name: {
        type: String,
        unique: true
    },
});

export default mongoose.model('UserType', UserType, 'user_type');