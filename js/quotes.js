const quotes = [
    {
        quote: "hello",
        author: "chaei",
    },
    {
        quote: "hi",
        author:"ji",   
    },
    {
        quote:"red",
        author:"apple",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function selectQuote(){
    const num = quotes[Math.floor(Math.random()*quotes.length)];
    quote.innerText=num.quote;
    author.innerText=num.author;
}

selectQuote();
setInterval(selectQuote,5000);
