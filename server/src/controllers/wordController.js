const Word = require('../models/Word');

exports.getAllWords = async (req, res) => {
    try {
        const words = await Word.find();
        res.status(200).json(words);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createWord = async (req, res) => {
    const word = new Word(req.body);
    try {
        const savedWord = await word.save();
        res.status(201).json(savedWord);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateWord = async (req, res) => {
    try {
        const updatedWord = await Word.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedWord);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteWord = async (req, res) => {
    try {
        await Word.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};