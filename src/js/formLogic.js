const form = document.getElementById("contact-form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const messageSent = document.getElementById("message-sent");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  // Validate fields
  if (name.value === "" || email.value === "" || message.value === "") {
    alert("Please complete all fields");
    return;
  }

  // Submit form
  const data = {
    name: name.value,
    email: email.value,
    message: message.value
  };

  // Simulate sending data with console.log
  console.log(data);

  // Show success message
  messageSent.innerHTML = "Thank you for your message! We'll be in touch soon.";
  messageSent.style.display = "block";

  // Clear form
  form.reset();
});