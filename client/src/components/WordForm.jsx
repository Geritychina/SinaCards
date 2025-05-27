import React, { useState, useEffect } from 'react';
import { addWord, updateWord } from '../api/words';

const WordForm = ({ currentWord, setCurrentWord, isEditing, setIsEditing }) => {
    const [word, setWord] = useState('');

    useEffect(() => {
        if (isEditing && currentWord) {
            setWord(currentWord.word);
        } else {
            setWord('');
        }
    }, [currentWord, isEditing]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            updateWord(currentWord._id, { word })
                .then(() => {
                    setCurrentWord(null);
                    setIsEditing(false);
                });
        } else {
            addWord({ word })
                .then(() => {
                    setWord('');
                });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={word}
                onChange={(e) => setWord(e.target.value)}
                placeholder="Enter a word"
                required
            />
            <button type="submit">{isEditing ? 'Update' : 'Add'} Word</button>
        </form>
    );
};

export default WordForm;