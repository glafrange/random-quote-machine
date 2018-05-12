const quoteBody = $("#quote-body");
const quoteBottom = $("#quote-bottom");

function getQuote() {
  $.getJSON("https://talaikis.com/api/quotes/random/", ({ quote, author }) => {
    quoteBody[0].innerHTML = "<p class='text-light text-center'>" + '"' + quote + '"' + "</p>";
    quoteBottom[0].innerHTML = "<p class='text-light text-center'>" +  " - " + author + "</p>";
  });
  
}

getQuote();