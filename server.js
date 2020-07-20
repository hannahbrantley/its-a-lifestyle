const express = require('express');
const path = require('path');
const logger = require('morgan');
const favicon = require('serve-favicon');

const app = express();

require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

const usersRoutes = require('./routes/api/users');
const competitionRoutes = require('./routes/api/competitions');
const workoutRoutes = require('./routes/api/workouts');


// Put API routes here, before the "catch all" route
app.use('/api/users', usersRoutes);

app.use(require('./config/auth'));
app.use('/api/competitions', competitionRoutes);
app.use('/api/workouts', workoutRoutes);

// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work 
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});