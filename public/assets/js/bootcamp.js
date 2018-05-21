$(".list-group-item").on('click', function () {
  var templatePath = $(this).attr("data-link");
  // templatePath = "01.html";
  var pageTitle = $(this).text();
  $("#page-name").text(pageTitle);

  $.get("./assets/templates/" + templatePath, function(pageHTML) {
    console.log(pageHTML);
    $(".content-body").html(pageHTML);
  })
})