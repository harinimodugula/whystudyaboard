document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting
  
  // Get values from the form
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  
  // Simple validation
  if (name === "" || email === "" || phone === "") {
    document.getElementById("message").textContent = "Please fill out all fields.";
    document.getElementById("message").style.color = "red";
  } else {
    document.getElementById("message").textContent = "Form submitted successfully!";
    document.getElementById("message").style.color = "green";
    // Reset form
    document.getElementById("contactForm").reset();
  }
});

  