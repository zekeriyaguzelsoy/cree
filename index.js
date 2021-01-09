const User = require('./user');
const Movie = require('./movie');
const Movies = require('./movies');

const movies = new Movies()
movies.add('Action', '2020', '8.1');
movies.add('Comedy', '2019', '8.5');
movies.add('Drama', '2017', '8.4');
movies.add('Hirror', '2015', '8.3');
movies.add('Adventure', '2013', '8.2');

const result = movies.search('Action', '2020', '8.1');

console.log(result);
console.log("test");