const express = require('express');
const router = express.Router();
const individuCtrl = require ('../controllers/individu');


router.get('/',individuCtrl.getAll);


module.exports = router;