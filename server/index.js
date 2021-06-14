const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser());

const URI = process.env.MONGO_URI;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully !');
});

const storyRouter = require('./controllers/StoryController');
app.use('/story', storyRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started running on port ${PORT}`));
