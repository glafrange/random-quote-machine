const quoteBody = $("#quote-body");
const quoteFooter = $("#quote-footer");

function getQuote() {
  $.getJSON("https://talaikis.com/api/quotes/random/", function(data) {
    console.log($("#quote-div")[0].innerHTML);
    quoteBody[0].innerHTML = "<p class='text-light text-center'>" + data.quote + "</p>";
    quoteFooter[0].innerHTML = "<p class='text-light text-center'>" +  " - " + data.author + "</p>";
  });
  
}

getQuote();