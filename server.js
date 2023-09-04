const express = require('express');
const port = 3030;

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/todos', require('./routes/todoRoutes'))

const { errorHandler } = require('./middleware/errorMiddleware');


app.use(errorHandler);
app.listen(port, () => {

  console.log(`Server started on port ${port}`);
});
