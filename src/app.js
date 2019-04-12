const express = require('express')
const app = express()
const path = require("path");
// const newsfetch=require('./newsfetch')
app.use(express.static(path.join(__dirname,'../public')))
const request = require('request')
var url = 'https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=f9a38182923546b8be370365f65f8556&limit=7'
app.set('view engine','hbs')
var title1=''
var content1=''
var fnews=[];
var fnewsi=[];
var url1=''
var url2=''
var desc1=''
// var fcontent=[];
app.get('',(req,res)=>{
    res.render('front')
})

app.get('/int',(req,res)=>{
    request({url:url,json:true},(error,res)=>{
        for(var i=0;i<res.body.articles.length;i++){
            title1=res.body.articles[i].title
    content1=res.body.articles[i].content
    url1=res.body.articles[i].url
    url2=res.body.articles[i].urlToImage
    desc1=res.body.articles[i].description
    var arr={
        title:title1,
        content:content1,
        url:url1,
        urlimage:url2,
        desc:desc1
    }
            // console.log(res.body.articles[i].title+'\n '+res.body.articles[i].content)
            fnews.push(arr);
        }
    // title1=res.body.articles[0].title
    // content1=res.body.articles[0].content
    // console.log(fnews)
        })
res.render('index',{
    shownews: fnews
})
})

app.get('/in',(req,res)=>{
    
const url9 = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=f9a38182923546b8be370365f65f8556&limit=7'
    request({url:url9,json:true},(error,res)=>{
        for(var i=0;i<res.body.articles.length;i++){
            title1=res.body.articles[i].title
    content1=res.body.articles[i].content
    url1=res.body.articles[i].url
    url2=res.body.articles[i].urlToImage
    desc1=res.body.articles[i].description
    var arr={
        title:title1,
        content:content1,
        url:url1,
        urlimage:url2,
        desc:desc1
    }
            // console.log(res.body.articles[i].title+'\n '+res.body.articles[i].content)
            fnewsi.push(arr);
        }
    // title1=res.body.articles[0].title
    // content1=res.body.articles[0].content
    // console.log(fnews)
        })
res.render('index',{
    shownews: fnewsi
})
})



app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})