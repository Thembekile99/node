const asyncHanlder = require('express-async-handler');
const Todo = require('../models/todoModel');




const getTodos = asyncHanlder(async (req, res) => {
  const todos = await Todo.find();
  res.status(200).json(todos)
});

const setTodo = asyncHanlder(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add text field');
  }
  const todo = await Todo.create({
    text: req.body.text,
  });
  res.status(200).json(todo);
})

const updateTodo = asyncHanlder(async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    res.status(400);
    throw new Error('Todo not found');
  }

  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedTodo);
})

const deleteTodo = asyncHanlder(async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    res.status(400);
    throw new Error('Todo not found');
  }

  await todo.remove();

  res.status(200).json({ id: req.params.id });
})

module.exports = {
  getTodos,
  setTodo,
  updateTodo,
  deleteTodo
}