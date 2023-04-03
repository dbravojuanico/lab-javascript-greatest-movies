// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    let allDirectorsArray = moviesArray.map((currentMovie, index, wholeArray) => {
        return currentMovie.director
    })
    return allDirectorsArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
    let spilbergArray = moviesArray.filter(function(movie){
        return movie.director === 'Steven Spielberg';
    })
    let dramaSpilbergArray = spilbergArray.filter(function(movie){
        return movie.genre.includes('Drama')
    })
    return dramaSpilbergArray.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0
    }
    let scoresArray = moviesArray.map(function(object){
        return object.score
    })
    let sumScores = scoresArray.reduce(function(accumulator, currentValue){
        if (typeof currentValue !== "number"){
            return accumulator
        } else {
                return (accumulator + currentValue)
        }
    },0)
    return Number((sumScores/moviesArray.length).toFixed(2))
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
   
    let dramaArray = moviesArray.filter(function(movie){
        return movie.genre.includes("Drama")
    }) 
    let scoresArray = dramaArray.map(function(object){
        return object.score
    })
    let sumScores = scoresArray.reduce(function(accumulator, currentValue){
        if (typeof currentValue !== "number"){
            return accumulator
        } else {
                return (accumulator + currentValue)
        }
    },0)
    if (dramaArray.length === 0){
        return 0
    } else {
        return Number((sumScores/dramaArray.length).toFixed(2))
    }
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
    let byYearArray = [...moviesArray]
    byYearArray.sort(function(a,b){
        if(a.year > b.year) {
            return 1;
        } else if(a.year < b.year){
            return -1;
        } else if (a.year === b.year && a.title > b.title){
            return 1;
        } else if (a.year === b.year && a.title < b.title){
            return -1;
        } else {
            return 0;
        }
    })
    return byYearArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray) {

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function bestYearAvg(moviesArray) {

}
