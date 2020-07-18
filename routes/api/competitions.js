var express = require('express');
var router = express.Router();
const competitionsCtrl = require('../../controllers/competitions');

router.get('/', competitionsCtrl.index);
router.get('/:id', competitionsCtrl.show);
router.post('/', competitionsCtrl.create);
router.delete('/:id', competitionsCtrl.delete);
router.put('/:id', competitionsCtrl.update);

module.exports = router;