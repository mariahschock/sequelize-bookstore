const { Router } = require('express');
const db = require('../models');


module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const user = await db.User.create(req.body);
      res.json(user);
    } catch (e) {
      next(e);
    }
  });
