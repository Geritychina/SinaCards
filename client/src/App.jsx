import React, { useState, useEffect } from 'react';
import FlashcardList from './components/FlashcardList';
import SearchBar from './components/SearchBar';
import WordForm from './components/WordForm';
import { fetchWords, addWord, updateWord, deleteWord } from './api/words';

const App = () => {
    const [words, setWords] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedWord, setSelectedWord] = useState(null);

    useEffect(() => {
        const loadWords = async () => {
            const fetchedWords = await fetchWords();
            setWords(fetchedWords);
        };
        loadWords();
    }, []);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleAddWord = async (newWord) => {
        const addedWord = await addWord(newWord);
        setWords([...words, addedWord]);
    };

    const handleUpdateWord = async (updatedWord) => {
        const updated = await updateWord(updatedWord);
        setWords(words.map(word => (word._id === updated._id ? updated : word)));
        setSelectedWord(null);
    };

    const handleDeleteWord = async (id) => {
        await deleteWord(id);
        setWords(words.filter(word => word._id !== id));
    };

    const filteredWords = words.filter(word => 
        word.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <h1>Flashcard App</h1>
            <SearchBar onSearch={handleSearch} />
            <WordForm 
                onAddWord={handleAddWord} 
                onUpdateWord={handleUpdateWord} 
                selectedWord={selectedWord} 
                setSelectedWord={setSelectedWord} 
            />
            <FlashcardList 
                words={filteredWords} 
                onDeleteWord={handleDeleteWord} 
                onSelectWord={setSelectedWord} 
            />
        </div>
    );
};

export default App;