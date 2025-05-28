# SinaCards Mern Flashcards App ㊙🈷

This project is a web-based application built using the MERN stack (MongoDB, Express, React, Node.js) that allows users to manage a collection of words as flashcards. Users can perform CRUD (Create, Read, Update, Delete) operations on the words, search for specific words, and export the list of words.

## Features

- Import words from a JSON file.
- Search functionality to filter words.
- Display words as flashcards.
- Add new words or edit existing ones.
- Export the list of words to a JSON file.

## Project Structure

```
mern-flashcards-app
├── client                # React frontend
│   ├── public
│   │   └── index.html    # Main HTML file
│   ├── src
│   │   ├── components     # React components
│   │   │   ├── FlashcardList.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   └── WordForm.jsx
│   │   ├── App.jsx        # Main application component
│   │   ├── index.js       # Entry point for React app
│   │   └── api
│   │       └── words.js   # API calls for CRUD operations
│   ├── package.json       # Client dependencies and scripts
│   └── README.md          # Client documentation
├── server                 # Node.js backend
│   ├── src
│   │   ├── controllers     # Controllers for handling requests
│   │   │   └── wordController.js
│   │   ├── models          # Mongoose models
│   │   │   └── Word.js
│   │   ├── routes          # API routes
│   │   │   └── wordRoutes.js
│   │   ├── app.js         # Entry point for server app
│   │   └── utils          # Utility functions
│   │       └── importExport.js
│   ├── package.json       # Server dependencies and scripts
│   └── README.md          # Server documentation
├── .gitignore             # Git ignore file
└── README.md              # General project documentation
```

### Prerequisites

- Node.js
- MongoDB

--

🔺Required files: 
.env
node_modules
--

❗ Don't forget to install node_modules locally! 🔺
--

Made with love by Gergana ™
