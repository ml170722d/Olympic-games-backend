import mongoose from 'mongoose';

import { Schema } from 'mongoose';

const Nationality = new Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    name: {
        type: String,
        unique: true
    }
});

export default mongoose.model('Nationality', Nationality, 'nationality');