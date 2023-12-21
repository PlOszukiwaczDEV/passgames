function checkPassword() {
    var enteredPassword = document.getElementById("password").value;
    var correctPassword = "password"; // Replace with your actual password
  
    if (enteredPassword === correctPassword) {
      document.getElementById("password-form").style.display = "none";
      document.getElementById("games").style.display = "block";
    } else {
      alert("Incorrect password. Try again.");
    }
  }