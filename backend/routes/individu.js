const express = require('express');
const router = express.Router();
const individuCtrl = require ('../controllers/individu');


router.get('/',individuCtrl.getAll);
router.get('/:id',individuCtrl.getOne);
router.post('/',individuCtrl.createSb);
router.delete('/:id', individuCtrl.sup);
router.put('/:id',individuCtrl.modify);


module.exports = router;