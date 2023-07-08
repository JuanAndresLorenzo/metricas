const {Router} = require('express');
const router = Router();
const {getTasks, createTasks, getTaskById, deleteTask} = require("../controllers/index.controller")

router.get('/tasks', getTasks)
router.get('/tasks/:id', getTaskById)
router.post('/tasks', createTasks)
router.delete('/tasks/:id', deleteTask)

module.exports = router;