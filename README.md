# MERN BASE REPO

Srikant Kumar Kalaputapu

Base REPO that contains instructions for setup, configuration files etc. for creating a MERN application from scratch quickly.

Study materials/sources:
- https://codingthesmartway.com/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-1/
- Checkout Sails for a Rails-like Node MVC framework.
- Udemy MERN stack course

## MongoDB (Local)

MongoDB is accessed through the mongoose javascript library:

#### Install mongodb locally
brew install mongodb

#### Make a db folder for mongodb
sudo mkdir -p /data/db

#### Run mongodb (make sure the folders have read/write permissions for the current user!!)
sudo mongod

This starts mongodb on port 27017.

#### Create database 

Make sure MongoDB is installed correctly! Then:

mongo
use [insert database name here] // creates Database

Replace "DB" in server.js with the Database name. In this example I use Todo schema

#### Schema for model

Create a file with name, modelname.model.js.
Create a mongoose schema like the example given and export it.


## Routes

Add routes to the server.js for the model:
// Routes
const todoRoutes = express.Router();


// get the model
let Todo = require('./todo.model');

example route:
// index
todoRoutes.route('/').get(function(req, res) {
    Todo.find(function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

Finally add the all the routes to the app:

app.use('/todos', todoRoutes);

## Connect front to back using axios:

Add axios to frontend:
yarn add axios

Then in a component that submits a form (hits a backend endpoint to create new model object):
import axios from 'axios';

axios.post('http://localhost:4000/todos/add', newTodo)
    .then(res => console.log(res.data));

Axios is similiar to using Promise and fetches however has a little more!