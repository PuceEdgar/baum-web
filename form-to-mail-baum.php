<?php 

$errors = '';
$myemail = 'tintacar.edgar@gmail.com';
if (empty($_POST['Name']) ||
	empty($_POST['Email']) || 
	empty($_POST['Subject']) ||
	empty($_POST['Message']))
{
	$errors .= "\n Error: all fields required";
}


$name = $_POST['Name'];
$email_address = $_POST['Email'];
$subject = $_POST['Subject'];
$message = $_POST['Message'];
if (!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", $email_address))
{
	$errors .= "\n Error: Invalid email address";
}


if (empty($errors)) 
{
$to = $myemail;
$email_subject = "Salon de Car: Contact form submitted from: $name";
$email_body = 	"You have received a new message.\n ".
"From: $name \n ".
"Email: $email_address\n Subject \n $subject\n Message \n $message";
$headers = "From: $myemail\n";
$headers .="Reply-To: $email_address";
mail($to, $email_subject, $email_body, $headers);

$message = "Thank you!";
echo "<script type='text/javascript'>alert('$message');</script>";
header('Location: index.html');
}

 ?>


