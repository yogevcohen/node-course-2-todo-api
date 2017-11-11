const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable To Connect mongoDB', err);
    }
    console.log('Connected mongoDB');

    // db.collection('Todos').find({
    //     _id:new ObjectID('5a0700d27352ee285431ddce')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // })

    // db.collection('Todos').find({
    //     _id: new ObjectID('5a0700d27352ee285431ddce')
    // }).count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });


    db.collection('Users').find({
        name:'Yogev Cohen'
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch Todos', err);
    });

    //db.close();
});