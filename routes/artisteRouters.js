const express = require('express');
const { createArtiste, getAllArtiste, getOneArtiste, updateOneArtiste, deleteOneArtiste } = require('../controllers/artisteController');

const router = express.Router();

router.post('/artiste', createArtiste);

router.get('/artiste', getAllArtiste);

router.get('/artiste/:id', getOneArtiste);

router.put('/artiste/:id', updateOneArtiste);

router.delete('/artiste/:id', deleteOneArtiste);

module.exports = router;
