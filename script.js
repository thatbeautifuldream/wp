// collecting data from form and sending to whatsapp web/app using wa.me/<number> using js
let form = document.getElementById("form");
// event listener for submit
form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevents from autosubmitting
  // getting data from form
  let phone = document.getElementById("mobile").value;
  let message = document.getElementById("message").value;
  // sending data to whatsapp web/app
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank"); // window.open is used open the url in a new tab
});
