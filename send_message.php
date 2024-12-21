<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $address = htmlspecialchars($_POST['address']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    // Your email address where the messages will be sent
    $to = "mabdullahbaloch90@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";

    // Compose email
    $emailBody = "
        Name: $name\n
        Email: $email\n
        Address: $address\n
        Phone: $phone\n
        Message: $message
    ";

    // Email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $subject, $emailBody, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message. Please try again later.";
    }
} else {
    echo "Invalid request.";
}
?>
