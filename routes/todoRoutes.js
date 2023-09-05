const express = require('express');
const router = express.Router();
const {getTodos, setTodo, updateTodo, deleteTodo} = require('../controllers/todosController')


router.get('/get', getTodos)
router.post('/post', getTodos)

router.put('update/:id', updateTodo)
router.delete('delete/:id',deleteTodo)



module.exports = router;