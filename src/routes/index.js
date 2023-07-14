const {Router} = require('express');
const router = Router();
const { getTasks, getTaskById, createTasks, deleteTask, getActivity, setFinishTime, createActivity, deleteActivity, getActivityByDateRange } = require("../controllers/index.controller")

router.get('/tasks', getTasks)
router.get('/tasks/:id', getTaskById)
router.post('/tasks', createTasks)
router.delete('/tasks/:id', deleteTask)
router.get('/activity' , getActivity)
router.put('/activity/:id' , setFinishTime)
router.post('/activity' , createActivity)
router.delete('/activity/:id' , deleteActivity)
router.get('/activity' , getActivityByDateRange)

module.exports = router;