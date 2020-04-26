const express = require('express');

const signInRoutes = require('./signInRoutes/signInRoutes');
const signUpRoutes = require('./signUpRoutes/signUpRoutes');
const componentRoutes = require('./componentRoutes/componentRoutes');

const router = express.Router();

router.use('/signin', signInRoutes);
router.use('/signup', signUpRoutes);
router.use('/components', componentRoutes);

module.exports = router;
