require('dotenv').config();
const express = require('express');
const app = express();
var cors = require('cors');
const PORT = process.env.PORT || 4000;
const mongoose = require('mongoose')

const userRoutes = require('./routes/usersRouter')
const carsRoutes = require('./routes/carsRouter')


//middleware
app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
});

//routes
app.use('/api/users', userRoutes)
app.use('/api/cars', carsRoutes)


mongoose.connect(process.env.MONGO_URI)
.then(() => {
        app.listen(PORT, ()=>{
            console.log('db is connected & server is running on', PORT);
        });
    })
    .catch((error) => console.log(error))


