const { Router } = require('express');
const router = new Router();
const _ctrl = require('../controllers/pokemon-controller');

router.get('/', _ctrl.get);
router.get('/:id', _ctrl.getById);
router.post('/', _ctrl.post);
router.put('/:id', _ctrl.put);
router.delete('/:id', _ctrl.delete);

module.exports = router;
