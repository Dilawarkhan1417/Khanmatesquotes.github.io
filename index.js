const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const apiUrl = "https://api.quotable.io/random";

async function getQuote(){

    try{
    btnEl.innerText = "Loading...";
    btnEl.disabled = true;
    quoteEl.innerText = "Updating...";
    authorEl.innerText = "Updating...";
    quoteEl.disabled = true;
    authorEl.disabled = true;
    const response = await fetch(apiUrl);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    quoteEl.innerText = quoteContent;
    authorEl.innerText = "~" + quoteAuthor;
    btnEl.innerText = "Get a Quote";
    btnEl.disabled = false;

    }catch(error){
        quoteEl.innerText = "An error happened, try again later";

    }

}


getQuote();

btnEl.addEventListener("click", getQuote);