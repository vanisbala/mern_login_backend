const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser= require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

//connect to db
mongoose.connect(process.env.DATABASE, {
   
})
.then(() => console.log('DB connected'))
.catch(err => console.log('DB_CONNECTION_ERROR:', err));

//import routes

const authRoutes =  require('./routes/auth');
const userRoutes =  require('./routes/user');


//app middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
//app.use(cors()); //allows cross origins (for example server runs in 5000 and client runs in 3000 this is not allowed )
if(process.env.NODE_ENV= 'development'){
    app.use(cors({origin: `http://localhost:3000`}));
}


//middleware

app.use('/api',authRoutes);
app.use('/api',userRoutes);


const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});