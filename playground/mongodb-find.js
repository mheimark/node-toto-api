// const MongoClient = require('mongodb').MongoClient;
const {
  MongoClient,
  ObjectID
} = require('mongodb');


var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to server.');
  }
  console.log('Connected to mongodb');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5b17bbd030bf25ada603b7be')
  // }).toArray().then((docs) => {
  //   console.log(`Todos`);
  //   console.log(docs);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });


  db.collection('Users').find({name: 'Nacho'}).toArray().then((user) => {
    console.log(user);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  db.close();
});
