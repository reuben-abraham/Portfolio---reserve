<?php
    $name = $_POST['form-name'];
    $email = $_POST['form-email'];
    $message = $_POST['form-message'];
    $to = 'hello@reubenabraham.com'; 
    $subject = 'Hello';
   
    $body = "From: $name\n E-Mail: $email\n Message:\n $message";
				
    if ($_POST['submit'] ) {				 
        if (mail ($to, $subject, $body, $from)) { 
	    echo '<p>Your message has been sent!</p>';
	} else { 
	    echo '<p>Something went wrong, go back and try again!</p>'; 
	} 
    } 
?>