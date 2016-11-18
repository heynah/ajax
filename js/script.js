
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var streetStr = $("#street").val();
    var cityStr = $("#city").val();

    var address = streetStr+", "+cityStr;
    // console.log(streetStr+cityStr+address)
    var srcURL = "http://maps.googleapis.com/maps/api/streetview?size=600x300&location="+address+"";
    console.log(srcURL);

    // YOUR CODE GOES HERE!

    $('body').append('<img class="bgimg" src='+srcURL+'></img>')

    return false;
};

$('#form-container').submit(loadData);
