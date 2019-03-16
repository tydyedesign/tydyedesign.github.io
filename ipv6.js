$.getJSON("http://jsonip.com?callback=?", function (response) {
$("#ip").text(response.ip);
});