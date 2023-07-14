const { Pool } = require('pg')

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "Sc4ryM0vie.",
    database: "postgres",
    port: '5432' 
});

const getTasks = async (req, res) => {
    const response = await pool.query('SELECT * FROM public."Task"');
    res.status(200).json(response.rows);
};

const getTaskById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM public."Task" WHERE task_id = $1', [id]);
    res.json(response.rows);
};

const createTasks = async (req, res) => {
    const { id, name } = req.body;

    const response = await pool.query('INSERT INTO public."Task" (task_id, task_name) VALUES ($1, $2)', [id, name]);
    console.log(response);
    res.json({
        message: 'task created succesfully',
        body: {
            task: {id, name}
        }
    });
};

const deleteTask = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM public."Task" WHERE task_id = $1', [id]);
    res.json({
        message: 'task deleted succesfully',
        body: {
            task: {id}
        }
    });
}

const getActivity = async (req, res) => {
    const response = await pool.query('SELECT * FROM public."Activity"');
    res.status(200).json(response.rows);
};

const getActivityByDateRange = async (req, res) => {
    const dateFrom = req.params.dateFrom;
    const dateTo = req.params.dateTo;
    const response = await pool.query('SELECT * FROM public."Activity" WHERE  activity_start_date_time >= $1 and activity_end_date_time <= $2', [dateFrom, dateTo]);
    res.json(response.rows);
};

const createActivity = async (req, res) => {
    const { task_id } = req.body;

    const response = await pool.query('INSERT INTO public."Activity" (activity_start_date_time, task_id) VALUES ($1, NOW())', [task_id]);
    console.log(response);
    res.json({
        message: 'task created succesfully',
        body: {
            task: {start_time, task_id}
        }
    });
};

const setFinishTime  = async (req, res) => {
    const { id } = req.body;

    const response = await pool.query('UPDATE public."Activity" SET activity_end_date_time = NOW() WHERE activity_id = $1', [id]);
    console.log(response);
    res.json({
        message: 'task created succesfully',
        body: {
            task: {id}
        }
    });
};

const deleteActivity = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM public."Task" WHERE task_id = $1', [id]);
    res.json({
        message: 'task deleted succesfully',
        body: {
            task: {id}
        }
    });
}

module.exports = {
    getTasks,
    getTaskById,
    createTasks,
    deleteTask,
    getActivity,
    setFinishTime,
    createActivity,
    deleteActivity,
    getActivityByDateRange   
};