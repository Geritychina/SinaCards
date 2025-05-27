# MERN Flashcards App

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

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the client directory and install dependencies:
   ```
   cd client
   npm install
   ```

3. Navigate to the server directory and install dependencies:
   ```
   cd ../server
   npm install
   ```

### Running the Application

1. Start the MongoDB server.

2. Start the server:
   ```
   cd server
   npm start
   ```

3. Start the client:
   ```
   cd ../client
   npm start
   ```

The application should now be running on `http://localhost:3000`.

## Contributing

Feel free to submit issues or pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License.