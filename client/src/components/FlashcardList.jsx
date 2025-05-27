import React, { useEffect, useState } from 'react';
import Flashcard from './Flashcard';
import { fetchWords } from '../api/words';

const FlashcardList = () => {
    const [words, setWords] = useState([]);

    useEffect(() => {
        const getWords = async () => {
            const data = await fetchWords();
            setWords(data);
        };
        getWords();
    }, []);

    return (
        <div className="flashcard-list">
            {words.map((word) => (
                <Flashcard key={word.id} word={word} />
            ))}
        </div>
    );
};

export default FlashcardList;