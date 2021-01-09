const Movie = require('./movie')

class Movies{
  constructor(){
    this.list = []
  }

  add(genres, year, rate) {
    this.list.push(new Movie(genres, year, rate))
  }

  search(keyword, key){

    function searchMovie(movie) {
      return movie[key] === keyword;
    }

    const value = this.list.find(searchMovie)
    return value
  }
  
}

module.exports = Movies