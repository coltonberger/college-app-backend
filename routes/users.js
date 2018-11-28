var express = require('express');
var router = express.Router();
const knex = require('../db/knex');

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex('users')
  .then((users) => {
    // obj remove keys: created_at and updated_at
    let newUsersArr = users.map((user) => {
      // console.log('user is', user)
      return user;
    })
    res.status(200).send(newUsersArr); // 200 = ok
  })
  .catch((err) => {
    console.log('err', err);
    res.status(500).send({error: {message: 'Something went wrong!'}}) // if can't find the req
  })
});

module.exports = router;
