const request = require('request')

const newsfetch = (callback) => {
    const url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=f9a38182923546b8be370365f65f8556&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        }else {
            callback(undefined, {
                title:body.articles[0].title
            })
        }
    })
}

module.exports = newsfetch