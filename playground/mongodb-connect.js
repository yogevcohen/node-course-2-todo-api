//const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable To Connect mongoDB', err);
    }
    console.log('Connected mongoDB');
    // db.collection('Todos').insertOne({
    //     text: 'Somthing to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });


    // db.collection('Users').insertOne({
    //     name: 'Yogev Cohen',
    //     age: 23,
    //     location: 'TelAviv'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert', err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });


    db.close();
});