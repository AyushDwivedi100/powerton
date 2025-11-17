<?php
// Set CORS headers for React frontend
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if(isset($_POST['name']) || isset($_POST['email'])){
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $company = $_POST['company'] ?? 'Not specified';
    $subject = $_POST['subject'] ?? '';
    $message = $_POST['message'] ?? '';
    $serviceType = $_POST['serviceType'] ?? 'Not specified';

    // Load Composer's autoloader
    require 'PHPMailer/Exception.php';
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';

    // Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->SMTPDebug = 0; // Disable debug output for production
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'info@powertonengineering.com';
        $mail->Password = 'Powerton@123';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        // Recipients
        $mail->setFrom('info@powertonengineering.com', 'Powerton Engineering');
        $mail->addAddress('dharshit265@gmail.com', 'Admin');
        $mail->addReplyTo($email, $name);

        // Content
        $mail->isHTML(true);
        $mail->Subject = "Contact Form Inquiry - " . $subject;
        $mail->Body = "
        <table style='width: 100%; border-collapse: collapse; font-family: Arial, sans-serif;'>
        <tr>
            <td colspan='2' style='padding: 15px; border: 1px solid #ccc; background: #1e3a8a; color: white; text-align: center;'>
                <h2>New Contact Form Submission</h2>
            </td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold; width: 30%;'>Full Name:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>$name</td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Email:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>$email</td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Phone:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>$phone</td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Company:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>$company</td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Service Interest:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>$serviceType</td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Subject:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>$subject</td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Message:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>$message</td>
        </tr>
        <tr>
            <td colspan='2' style='padding: 10px; border: 1px solid #ccc; background: #1e3a8a; color: white; text-align: center;'>
                <strong>This e-mail was sent from the contact form on Powerton Engineering website.</strong><br>
                <small>Submitted on: " . date('Y-m-d H:i:s') . "</small>
            </td>
        </tr>
        </table>";

        $mail->send();
        
        // Return JSON success response
        header('Content-Type: application/json');
        echo json_encode(['success' => true, 'message' => 'Message sent successfully']);
        
    } catch (Exception $e) {
        // Return JSON error response
        header('Content-Type: application/json');
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Message could not be sent: ' . $mail->ErrorInfo]);
    }
} else {
    // Return error for invalid request
    header('Content-Type: application/json');
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request']);
}
?>