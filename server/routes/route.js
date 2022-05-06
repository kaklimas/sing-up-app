const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModels.js')


router.post('/signup', (req, res) => {
    const signedUser = new signUpTemplateCopy({

    })
})

module.exports = router