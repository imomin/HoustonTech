<?php

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $firstName = strip_tags(trim($_POST["firstname"]));
		$firstName = str_replace(array("\r","\n"),array(" "," "),$firstName);

		$lastName = strip_tags(trim($_POST["lastname"]));
		$lastName = str_replace(array("\r","\n"),array(" "," "),$lastName);

		$phone = strip_tags(trim($_POST["phone"]));
		$phone = str_replace(array("\r","\n"),array(" "," "),$phone);

		$company = strip_tags(trim($_POST["company"]));
		$company = str_replace(array("\r","\n"),array(" "," "),$company);

		$workstations = strip_tags(trim($_POST["workstations"]));
		$workstations = str_replace(array("\r","\n"),array(" "," "),$workstations);

		$servers = strip_tags(trim($_POST["servers"]));
		$servers = str_replace(array("\r","\n"),array(" "," "),$servers);

		$users = strip_tags(trim($_POST["users"]));
		$users = str_replace(array("\r","\n"),array(" "," "),$users);

		$offices = strip_tags(trim($_POST["offices"]));
		$offices = str_replace(array("\r","\n"),array(" "," "),$offices);

        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);

        // Check that data was sent to the mailer.
        if ( empty($firstName) OR
        		empty($lastName) OR
        			empty($phone) OR
        				empty($company) OR
        					empty($workstations) OR
        						empty($users) OR
        							empty($offices) OR 
        								empty($message) OR 
        									!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            header("HTTP/1.0 404 Not Found");
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "imomin@gmail.com";

        // Set the email subject.
        $subject = "New contact from $firstname $lastname";

        //" Here are the details:\n Name: $first_name $last_name \n Phone: $phone \n email: $email_address\n company: $company\n workstations: $workstations\n Servers: $servers \n users: $users \n offices: $offices \n Message \n $message"; 
        // Build the email content.
        $email_content = "Name: $firstname $lastname\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Phone: $phone\n";
        $email_content .= "Company: $company\n";
        $email_content .= "Workstations: $workstations\n";
        $email_content .= "Users: $users\n";
        $email_content .= "Offices: $offices\n\n";
        $email_content .= "Message:\n$message\n";

        // Build the email headers.
        $email_headers = "From: $firstname $lastname <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            header("HTTP/1.1 200 Ok");
            echo "Thank You! Your message has been sent.";
        } else {
            // Set a 500 (internal server error) response code.
            header("http/1.1 500 internal server error")
            echo "Oops! Something went wrong and we couldn't send your message.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        header("http/1.1 403 forbidden");
        echo "There was a problem with your submission, please try again.";
    }

?>