const express = require('express');
const app = express();
const tasks = require('./routes/tasks')

// middleware
app.use(express.json())

// routes
app.get("/", (req, res) => {
  res.send("Task Manager");
});

app.use('/api/v1/tasks', tasks)

const port = 3000;

app.listen(port, console.log(`Port: - ${port}`));
