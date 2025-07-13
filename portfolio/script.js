document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message, Parmpreet will get back to you soon!");
  this.reset();
});
