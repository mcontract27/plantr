const db = require('./models.js')

db.sync({force: true})
    .then(() => console.log('Database synced'))
    .catch(err => {
        console.log('Database sync failed');
        console.error(err);
    })
    .finally(() => db.close())