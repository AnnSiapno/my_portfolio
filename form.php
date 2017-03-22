<?php
if(empty($_POST['submit']))
{

echo "Form is not submitted!";
exit;

}

if(empty($_POST["name"]) ||
empty($_POST["number"])) ||
empty($_POST["email"])) ||
empty($_POST["message"]))
{

echo "Please fill the form";
exit;

}

$name = $_POST["name"];
$number = $_POST["number"];
$email = $_POST["email"];
$message = $_POST["message"];

mail( 'ann.n.siapno@gmail.com' , 'New form submission' ,
"New form submission: Name: $name, Number: $number, Email: $email, Message: $message"  );
// header('Location: thank-you.html');
?>
