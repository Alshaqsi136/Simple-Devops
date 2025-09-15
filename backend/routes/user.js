const express = require('express');
const router = express.Router();
const pass=require('../controllers/user');

router.post('/user',pass.postuser);
router.get('/', (req, res) => {
  res.send('Hello World!')
})
router.get('/r', (req, res) => {
  res.send('Hi')
})
module.exports = router;