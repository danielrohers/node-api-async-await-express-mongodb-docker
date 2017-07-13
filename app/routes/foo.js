const express = require('express');
const controller = require('../controllers/foo');

const router = express.Router();

router
  .route('/')
  .get(controller.list)
  .post(controller.create);

router
  .route('/:id')
  .get(controller.findOne)
  .put(controller.update)
  .delete(controller.delete);

module.exports = router;
