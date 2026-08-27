const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');
const mongoose = require('mongoose');
const { getTodos, getTodoById, updateTodo, createTodo, deleteTodo } = require('../controllers/todo.Controller');

router.get('/todos',getTodos); 

router.get('/todos/:id', getTodoById);

router.put('/todos/:id', updateTodo);

router.post('/todos', createTodo);

router.delete('/todos/:id', deleteTodo);




module.exports = router;