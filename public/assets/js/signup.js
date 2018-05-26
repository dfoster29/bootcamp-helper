$(document).ready(function () {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var firstNameInput = $("input#first-name");
  var lastNameInput = $("input#last-name");
  var accessTokenInput = $("input#access-token-input");
  // var accessToken = "76E78CC63BA7B4E6";

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function (event) {
    event.preventDefault();
    console.log(accessTokenInput);
    // Use FormData constructor to build a new multipart form (for handling images)
    var formData = new FormData();
    // append first name
    formData.append("first_name", firstNameInput.val().trim());
    // append last name
    formData.append("last_name", lastNameInput.val().trim());
    // append email to form (email: 'alex@alex.com')
    formData.append("email", emailInput.val().trim());
    // append password to form (password: '12345')
    formData.append("password", passwordInput.val().trim());

    // if (!userData.email || !userData.password) {
    //   return;
    // }
    // If we have an email and password, and the correct access token, run the signUpUser function
    if (accessTokenInput.val().trim() !== "76E78CC63BA7B4E6") {
      alert("invalid access token");
      return;
    } else {
      signUpUser(formData);
      emailInput.val("");
      passwordInput.val("");
      firstNameInput.val("");
      lastNameInput.val("");
      accessTokenInput.val("");
    }
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(formData) {
    $.ajax({
      url: "/api/signup",
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      method: 'POST',
    }).then(function (data) {
      console.log(data);
      window.location.replace(data)
      // If there's an error, handle it by throwing up a bootstrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    console.log(err);
    $("#alert .msg").text(err);
    $("#alert").fadeIn(500);
  }
});