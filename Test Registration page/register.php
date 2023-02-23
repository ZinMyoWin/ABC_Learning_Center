<?php
if ($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['name']) && isset($_GET['email']) && isset($_GET['password'])) {
  $name = $_GET['name'];
  $email = $_GET['email'];
  $password = $_GET['password'];
  
  echo "<p>Name: " . $name . "</p>";
  echo "<p>Email: " . $email . "</p>";
  echo "<p>Password: " . $password . "</p>";
} else if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['name']) && isset($_POST['email']) && isset($_POST['password'])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $password = $_POST['password'];
  
  echo "<p>Name: " . $name . "</p>";
  echo "<p>Email: " . $email . "</p>";
  echo "<p>Password: " . $password . "</p>";
} else {
  echo "Error: Invalid request.";
}
?>