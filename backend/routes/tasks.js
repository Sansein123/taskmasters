const express = require('express');
const router = express.Router();

// Simulated database for illustration
let tasks = [
    { id: 1, title: 'Task 1', description: 'Description of Task 1' },
    { id: 2, title: 'Task 2', description: 'Description of Task 2' }
];

// GET all tasks
router.get('/', (req, res) => {
    res.json(tasks);
});

// POST a new task
router.post('/', (req, res) => {
    const { title, description } = req.body;
    const newTask = { id: tasks.length + 1, title, description };
    tasks.push(newTask);
    res.status(201).send(newTask);
});

// GET a single task by id
router.get('/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) res.status(404).send('Task not found');
    else res.json(task);
});

// PUT to update a task
router.put('/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) {
        res.status(404).send('Task not found');
    } else {
        const { title, description } = req.body;
        task.title = title;
        task.description = description;
        res.send(task);
    }
});

// DELETE a task
router.delete('/:id', (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex === -1) res.status(404).send('Task not found');
    else {
        tasks.splice(taskIndex, 1);
        res.status(204).send();
    }
});

module.exports = router;
