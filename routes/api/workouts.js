var express = require('express');
var router = express.Router();
const workoutsCtrl = require('../../controllers/workouts');

router.get('/', workoutsCtrl.index);
router.post('/', workoutsCtrl.create);
router.delete('/:id', workoutsCtrl.delete);
router.put('/:id', workoutsCtrl.update);

module.exports = router;