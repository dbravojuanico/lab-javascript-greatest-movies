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
    let newArray = [...moviesArray]
    let titleArray = newArray.map(function(object){
        return object.title
    })
    titleArray.sort(function (a, b){
        if (a > b) {
            return 1
        } if (a < b) {
            return -1
        } else {
            return 0
        }
    })
    if (titleArray.length > 20){
        titleArray.length = 20
    }
    return titleArray
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray) {
    let newArray = JSON.parse(JSON.stringify(moviesArray))
    
    newArray.forEach(function(movie){
        let durationNoH = movie.duration.replace("h", "");
        let durationNoMin = durationNoH.replace("min", "");
        let durationSplitted = durationNoMin.split(" ")
        let timeMinutes 
        if (durationSplitted.length > 1){
            timeMinutes = Number(durationSplitted[0])*60 + Number(durationSplitted[1])
        } else {
            timeMinutes = Number(durationSplitted[0])*60
        }
        movie.duration = timeMinutes
    })
    return newArray
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0){
        return null
    }

    let tempArray = []
    let bestAverage = 0
    let bestYear

    for (let i=1920; i < 2023;i++ ){
        tempArray = []
        moviesArray.forEach(function(movie){
            if (movie.year === i){
                tempArray.push(movie)              
            }     
        })
        let scoreArray = tempArray.map(function(object){
            return object.score
        })
        console.log("array with all year scores " + scoreArray)

        let globalScore =  scoreArray.reduce(function(accumulator, currentValue){
                    return (accumulator + currentValue)
            
        },0)

        console.log("sum of year scores is " + globalScore)

        let movieAverage = globalScore / scoreArray.length

        console.log("current movie avarage is " + movieAverage)
        console.log("best movie average is " + bestAverage)
        console.log("current movie year is " + i)
        console.log("best year is " + bestYear)
         if ( movieAverage > bestAverage) {
            bestAverage = movieAverage
            bestYear = i
         }
    }
    return `The best year was ${bestYear} with an average score of ${bestAverage}`
}
