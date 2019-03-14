const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser');
const server = express();
server.use(express.static('dist'));


const dbRoute = 'mongodb+srv://edel:Thehomeshow10.@react-ca2-5eh1m.mongodb.net/test?retryWrites=true';
const dbName = 'Accessibility';
let db;

MongoClient.connect(dbRoute, { useNewUrlParser: true }, (err, client) => {
  if (err) throw err;
  db = client.db(dbName);
  server.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
});

// bodyParser, parses the request body to be a readable json format
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// define the various endpoints

// ------------------------------------------------- //
// ---------------- TIPS -------------------------- //
// ------------------------------------------------- //


// retrieve all user objects from DB
server.get('/api/tips', (req, res) => {
  db.collection('tips').find().toArray((err, result) => {
    if (err) throw err;

    console.log(result);
    res.send(result);
  });
});
// ------------------------------------------------- //
// ---------------- USERS -------------------------- //
// ------------------------------------------------- //



// retrieve all user objects from DB
server.get('/api/users', (req, res) => {
  db.collection('users').find().toArray((err, result) => {
    if (err) throw err;

    console.log(result);
    res.send(result);
  });
});

// retrieve user with specific ID from DB
server.get('/api/users/:id', (req, res) => {
  db.collection('users').findOne({_id: new ObjectID(req.params.id) }, (err, result) => {
    if (err) throw err;

    console.log(result);
    res.send(result);
  });
});

// delete user with specific ID from DB
server.delete('/api/users', (req, res) => {
  db.collection('users').deleteOne( {_id: new ObjectID(req.body.id) }, err => {
    if (err) return res.send(err);

    console.log('deleted from database');
    return res.send({ success: true });
  });
});

// create new user based on info supplied in request body
server.post('/api/users', (req, res) => {
  db.collection('users').insertOne(req.body, (err, result) => {
    if (err) throw err;

    console.log('created in database');
    res.redirect('/');
  });
});

// update user based on info supplied in request body
server.put('/api/users', (req, res) => {
  // get the ID of the user to be updated
  const id  = req.body._id;
  // remove the ID so as not to overwrite it when updating
  delete req.body._id;
  // find a user matching this ID and update their details
  db.collection('users').updateOne( {_id: new ObjectID(id) }, {$set: req.body}, (err, result) => {
    if (err) throw err;

    console.log('updated in database');
    return res.send({ success: true });
  });
});
