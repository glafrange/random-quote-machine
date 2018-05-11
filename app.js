const quoteDiv = $("#quoteDiv");

function getQuote() {
  $.getJSON("https://talaikis.com/api/quotes/random/", function(data) {
    //data[0].content = data[0].content.substr(3, data[0].content.length-8);
    console.log(data);
    quoteDiv.append("<p class='text-light text-center'>" + data.quote + "</p>" + "<p class='text-light text-center'>" +  " - " + data.author + "</p>");
  });
  
}

getQuote()