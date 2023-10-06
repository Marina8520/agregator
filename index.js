$(function(){

    let api = 'api.php'

let updateUsdCourse = function() {
    request = {'url': "https://cbr.ru"}
    $.get(api, request, function(response) {
        $(respose)
       // document.querySelector('._dollar + div')
    })
}

});