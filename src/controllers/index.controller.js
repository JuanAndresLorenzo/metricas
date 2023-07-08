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

module.exports = {
    getTasks,
    getTaskById,
    createTasks
};