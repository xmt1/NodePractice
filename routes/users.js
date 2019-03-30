const express = require('express');
const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
  res.render('add-user');
});

router.get('/users', (req, res, next) => {
  res.render('view-users', { users: users});
});

router.post('/add-user', (req, res, next) => {
  users.push(req.body.userName);
  res.redirect('/users')
});

exports.routes = router;
exports.users = users;