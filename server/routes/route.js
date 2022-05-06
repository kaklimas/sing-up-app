const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModels.js')
const bcrypt = require('bcrypt');
const { default: mongoose, Schema } = require('mongoose');
const { json } = require('express');

router.post('/signup', async (req, res) => {
    
    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(req.body.password, saltPassword)

    const signedUser = new signUpTemplateCopy({
        fullName:req.body.fullName,
        username: req.body.username,
        email: req.body.email,
        password: securePassword,
    })
    signedUser.save()
        .then(data => {
            res.json(data)
        })
        .catch(error => res.json(error))
})
router.get('/users', async (req, res) => {
    const all = await signUpTemplateCopy.find({});
    res.json(all);
})


module.exports = router