const {Router} = require('express');
const router = Router();
const {getTasks, createTasks, getTaskById} = require("../controllers/index.controller")

router.get('/tasks', getTasks)
router.get('/tasks/:id', getTaskById)
router.post('/tasks', createTasks)

module.exports = router;