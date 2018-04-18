console.log('javascript is sourced');

$(document).ready(onReady);

function onReady() {
    console.log('jquery sourced');
    $.ajax({
        type: 'GET',
        url: '/all-quotes'
    })
    .then(function(randomNumber) {
        console.log(randomNumber);
        $('#quotes').append('<li>' + randomNumber[0].quote + '</li>');
        $('#quotes').append('<li>' + randomNumber[1].quote + '</li>');
        $('#quotes').append('<li>' + randomNumber[2].quote + '</li>');
    })

    $('#quoteButton').on('click', function(){
        console.log('button clicked');
            $.ajax({
                type: 'GET',
                url: '/quote'
            })
            .then(function(randomNumber) {
                console.log(randomNumber)
                $('#randomQuote').text(randomNumber.quote);
            })
    })
}