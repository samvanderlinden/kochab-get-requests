console.log('javascript is sourced');

$(document).ready(onReady);

function onReady() {
    console.log('jquery sourced');
    getAllQuotes();
    $('#newQuoteButton').on('click', addNew);
}

function getAllQuotes() {
    $.ajax({
        method: 'GET',
        url: '/all-quotes'
    })
        .then(function (randomNumber) {
            console.log(randomNumber);
            $('#quotes').empty();
            randomNumber.forEach(function (randomNumbers) {
                $('#quotes').append(
                    '<li>' + randomNumbers.quote + ' - ' + randomNumbers.author + '</li>' 
                );
            });
            // $('#quotes').append('<li>' + randomNumber[0].quote + '</li>');
            // $('#quotes').append('<li>' + randomNumber[1].quote + '</li>');
            // $('#quotes').append('<li>' + randomNumber[2].quote + '</li>');
        });

    $('#quoteButton').on('click', function () {
        console.log('button clicked');
        $.ajax({
            type: 'GET',
            url: '/quote'
        })
            .then(function (randomNumber) {
                console.log(randomNumber)
                $('#randomQuote').text(randomNumber.quote);
            });
    });

}

// this is the start of POST request

function addNew() {

    console.log('newQuote button clicked');
    const newQuote = {
        quote: $('textarea').val(),
        author: $('#authorInput').val()
    };
    console.log('new quote object:', newQuote);
    $.ajax({
        method: 'POST',
        url: '/add-quote',
        data: newQuote
    })
        .then(function (quotes) {
            console.log('new random quote:', quotes);
            getAllQuotes();
        });
}
