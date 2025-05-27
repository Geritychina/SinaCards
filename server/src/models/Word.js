import mongoose from 'mongoose';

const wordSchema = new mongoose.Schema({
    word: {
        type: String,
        required: true,
        unique: true
    },
    definition: {
        type: String,
        required: true
    },
    example: {
        type: String,
        required: false
    }
}, { timestamps: true });

const Word = mongoose.model('Word', wordSchema);

export default Word;