const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    return res.status(200).send("mint");
  })

module.exports = router;