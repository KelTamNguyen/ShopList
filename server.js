const express = require('express');
const mongoose = require('mongoose');
const app = express();
const config = require('config')

app.use(express.json());

// DB config
const db = config.get('mongoURI');

// connect to mongoDB w/ Mongoose
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items',  require('./routes/api/items'));
app.use('/api/users',  require('./routes/api/users'));
app.use('/api/auth',  require('./routes/api/auth'));

const port = process.env.PORT || 5000;

app.listen(port, () => {console.log(`Server started on port ${port}`)});