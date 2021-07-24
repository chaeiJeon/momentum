const request = require("request");

const express = require('express');
const quote = document.querySelector("#quote span");
const app = express();
const id = "Q8kAHsIYiXfN1ftjy3vF";
const secret = "Fxlvo_18hB";
const apiURL = "https://openapi.naver.com/v1/papago/n2mt";

function selectQuote(){
    fetch("https://api.adviceslip.com/advice")
        .then(Response=>Response.json())
        .then(data=>{
            const query=data.slip.advice;
        });
    app.get('/translate',function(req,res){
        const request = require('request');
        const options = {
            url: apiURL,
            form: { 'source':'en', 'target':'ko', 'text':query},
            headers: {'X-Naver-Client-Id':id, 'X-Naver-Client-Secret': secret}
        };
        request.post(options, function(error, response, body){
            if(!error && response.statusCode==200){
                res.writeHead(200, {'Content-Type':'text/json;charset=utf-8'});
                res.end(body);
            }else{
                res.status(response.statusCode).end();
                console.log('error = '+response.statusCode);
            }
        });
    });
}


getTranslation(word,"en","ko");

selectQuote();
