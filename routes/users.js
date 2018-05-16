var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, username: "user1"},
    {id: 2, username: "user2"},
    {id: 3, username: "user3"},
    {id: 4, username: "user4"},
  ]);
});

module.exports = router;
