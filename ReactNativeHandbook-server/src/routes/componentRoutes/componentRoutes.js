const express = require('express');

const requireAuth = require('../../middlewares/requireAuth');
const componentController = require('../../controllers/componentController');

const router = express.Router();

router.route('/')
    .get(componentController.get)
    .post(requireAuth, componentController.create)
    .put(requireAuth, componentController.update)
    .delete(requireAuth, componentController.remove);

module.exports = router;
