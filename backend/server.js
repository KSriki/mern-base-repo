const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;

//database name
const DB = "";

app.use(cors());
app.use(bodyParser.json());


// Local MongoDB 
mongoose.connect(`mongodb://127.0.0.1:27017/${DB}`, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

// External MongoDB
//connect to mongodb through mongoose
//gets back an async promise!! AJAX
// mongoose
//     .connect(db)
//     .then(() => console.log("MongoDB connected"))
//     .catch((error) => console.log(error))




app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});