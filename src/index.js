const dns = require('node:dns/promises');
dns.setServers(['1.1.1.1', '8.8.8.8']); // Cloudflare and Google DNS

require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT;

const cors = require("cors");


const todosRouter = require("./routes/todos");

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Failed to connect to MongoDB", err));  
app.use(express.json());
app.use(cors());

app.use('/api', todosRouter);

app.use('/', (req, res) => {
  res.send('Welcome to the ToDo API');
});

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});




app.listen(port, () => {
  console.log(`ToDo App listening on port ${port}`);
});


function middleware(req, res, next) {
  console.log("Middleware executed");
  next();
}