const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Import of the model Recipe from './models/Recipe'
const data = require('./data.js');  // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose.connect('mongodb://localhost/recipeApp', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

/* Recipe.create({title: 'Kartoffelsalat', level: 'Amateur Chef', cuisine: 'german'})
  .then(recipeFromDb => console.log(recipeFromDb.title))
  .catch(error => console.log('hat nicht geklappt: ${error}')); */

/* Recipe.insertMany(data)
  .then(recipes => recipes.map(obj => console.log(obj.title)))
  .catch(err => console.log('Error: ${err}')); */

Recipe.updateOne( {title: 'Rigatoni alla Genovese'}, {duration: 100} )
  .then(recipeFromDb => console.log('successfully updated recipegit'))
  .catch(err => console.log('Error: ${err}'));
