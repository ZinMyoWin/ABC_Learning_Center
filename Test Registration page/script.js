const form = document.getElementById("registration-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "register.php");

  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const output = document.getElementById("output");
      output.innerHTML = this.responseText;
    }
  };

  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send(`name=${name}&email=${email}&password=${password}`);
});
