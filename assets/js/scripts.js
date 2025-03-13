document.addEventListener('DOMContentLoaded', function () {
    // Initialize SideNav
    const sideNav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sideNav);
  
    // Initialize Slider 
    const slider = document.querySelectorAll('.slider');
    M.Slider.init(slider, {
      indicators: true,
      transition: 600,
      interval: 4000
    });
  
    // Initialize Parallax
    const parallax = document.querySelectorAll('.parallax');
    M.Parallax.init(parallax);
  
    // Initialize ScrollSpy
    const scroll = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(scroll, {
      scrollOffset: 60
    });
  
    // Initialize Material Box (Portfolio)
    const materialbox = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(materialbox);
});
  
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-box");

  form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form from submitting by default
      
      let valid = true;

      // Get form values
      const firstName = document.getElementById("ijowk").value.trim();
      const lastName = document.getElementById("indfi").value.trim();
      const email = document.getElementById("ipmgh").value.trim();
      const phoneNumber = document.getElementById("2546").value.trim();
      const message = document.getElementById("i5vyy").value.trim();

      // Clear previous errors
      document.querySelectorAll(".error-message").forEach(el => el.remove());

      // Validation Functions
      function showError(input, message) {
          let error = document.createElement("p");
          error.className = "error-message";
          error.style.color = "red";
          error.style.fontSize = "12px";
          error.innerText = message;
          input.parentNode.appendChild(error);
      }

      function isValidEmail(email) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      }

      function isValidPhone(phone) {
          return /^[0-9]{10,15}$/.test(phone); // Allows 10-15 digit numbers
      }

      // Check Fields
      if (firstName === "") {
          showError(document.getElementById("ijowk"), "First name is required.");
          valid = false;
      }
      if (lastName === "") {
          showError(document.getElementById("indfi"), "Last name is required.");
          valid = false;
      }
      if (email === "" || !isValidEmail(email)) {
          showError(document.getElementById("ipmgh"), "Enter a valid email.");
          valid = false;
      }
      if (phoneNumber === "" || !isValidPhone(phoneNumber)) {
          showError(document.getElementById("2546"), "Enter a valid phone number (10-15 digits).");
          valid = false;
      }
      if (message === "") {
          showError(document.getElementById("i5vyy"), "Please enter your message.");
          valid = false;
      }

      // If all fields are valid, proceed (you can add AJAX submission here)
      if (valid) {
          alert("Form submitted successfully! (Needs backend to process)");
          // Uncomment below line to allow form submission
          // form.submit();
      }
  });
});
  