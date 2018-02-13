$.ajaxSetup ({
    // Disable caching of AJAX responses
    cache: false
});

$(document).ready(function() {
  
// ========== LOCATION ==========

  // https://forum.freecodecamp.com/t/how-to-get-info-after-using-json-stringify-with-an-api/23118/5
  $.getJSON("http://ip-api.com/json", function(json) {
    var lat = json.lat;
    var lon = json.lon;
    $("#location").html(json.city + ", " + json.countryCode);
    $(".message").html(JSON.stringify(json));

    getWeather(lat, lon);
  });

  // ========== WEATHER ==========

  function getWeather (lat, lon) {
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric&APPID=119d083c8575f0b96bfc936e758113dd", function(x) {
      $("#tempValC").html(Math.round(JSON.stringify(x.main.temp)));
      $("#tempValF").html(Math.round(JSON.stringify(x.main.temp * 9 / 5 + 32)))
      $("#weather").attr("src", "http://openweathermap.org/img/w/" + x.weather[0].icon + ".png")
      $("#desc").html(x.weather[0].description);
      $(".message2").html(JSON.stringify(x));
  })}; // getWeather

  // ========== C / F BUTTON ==========

  $("#tempUnitC").on("click", function () {
    $("#allC").css("display", "none");
    $("#allF").css("display", "block");
  });
  
  $("#tempUnitF").on("click", function () {
    $("#allF").css("display", "none");
    $("#allC").css("display", "block");
  });
  
}); //doc ready