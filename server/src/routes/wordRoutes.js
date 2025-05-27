const express = require('express');
const router = express.Router();
const WordController = require('../controllers/wordController');

router.post('/', WordController.createWord);
router.get('/', WordController.getWords);
router.get('/:id', WordController.getWordById);
router.put('/:id', WordController.updateWord);
router.delete('/:id', WordController.deleteWord);

module.exports = router;