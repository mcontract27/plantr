const Sequelize = require('sequelize')
const {db, Gardener, Plot, Vegetable} = require('./models.js')

db.sync({force: true})
    .then(() => {
        console.log('Database synced')
    })
    .then(() => {
        const veg1 = Vegetable.create({name: 'squash', color: 'yellow', planted_on: new Date()});
        const veg2 = Vegetable.create({name: 'eggplant', color: 'purple', planted_on: new Date()});
        const veg3 = Vegetable.create({name: 'beets', color: 'red', planted_on: new Date()});
        return Promise.all([veg1, veg2, veg3])
    })
    .then(veg => {
        const gard1 = Gardener.create({name: 'Bob', age: 55, favoriteVegetableId: veg[0].id})
        return Promise.all([gard1, ...veg]);
    })
    .catch(err => {
        console.log('Database sync failed');
        console.error(err);
    })
    .finally(() => db.close())