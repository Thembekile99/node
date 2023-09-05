const express = require('express');
const port = 3030;

const dotenv = require('dotenv');
dotenv.config();



const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: false}))
const connectDB = require('./config/db');

connectDB();


app.use('/api/todos', require('./routes/todoRoutes'))

const { errorHandler } = require('./middlewares/errorMiddleware');

app.use(errorHandler);
app.listen(port, () => {

  console.log(`Server started on port ${port}`);
});
