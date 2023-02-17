const emailInput = document.getElementById('email-input');

  emailInput.addEventListener('input', function() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = emailInput.value.trim();
    if (emailRegex.test(email)) {
      emailInput.setCustomValidity('');
      // if input is valid, remove any custom error message
    } else {
      emailInput.setCustomValidity('Please enter a valid email address');
      // if input is invalid, set custom error message
    }
  });