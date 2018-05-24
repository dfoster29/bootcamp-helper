$(".list-group-item").on('click', function () {
  $(".content-body").empty();
  var templatePath = $(this).attr("data-link");
  // templatePath = "01.html";
  var pageTitle = $(this).text();
  $("#page-name").text(pageTitle);
  $.ajax({
    url: "/api/loginCheck",
    method: "GET"
  }).then(function(isLoggedIn) {
    if (!isLoggedIn) {
      window.location.href= "/";
    } else {
      $.get("./assets/templates/" + templatePath, function(pageHTML) {
        console.log(pageHTML);
        $(".content-body").html(pageHTML);
      })
    }
  });
  
});

$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    console.log(data);
    $("#username-display").text("Welcome, " + data.first_name + " " + data.last_name);

  });
});