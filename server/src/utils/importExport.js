const fs = require('fs');
const path = require('path');

const importWords = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return reject(err);
            }
            try {
                const words = JSON.parse(data);
                resolve(words);
            } catch (parseError) {
                reject(parseError);
            }
        });
    });
};

const exportWords = (words, filePath) => {
    return new Promise((resolve, reject) => {
        const json = JSON.stringify(words, null, 2);
        fs.writeFile(filePath, json, 'utf8', (err) => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
};

module.exports = {
    importWords,
    exportWords,
};