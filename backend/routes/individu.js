const express = require('express');
const router = express.Router();
const individuCtrl = require ('../controllers/individu');


router.get('/',individuCtrl.getAll);
router.post('/',individuCtrl.createSb);
router.delete('/', individuCtrl.sup);


module.exports = router;