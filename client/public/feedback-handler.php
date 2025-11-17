<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if(isset($_POST['rating'])){
    $rating = $_POST['rating'] ?? 'Not provided';
    $didNotLike = $_POST['didNotLike'] ?? 'Not provided';
    $whyNoQuote = $_POST['whyNoQuote'] ?? 'Not provided';
    $missingInfo = $_POST['missingInfo'] ?? 'Not provided';
    $name = $_POST['name'] ?? 'Anonymous';
    $email = $_POST['email'] ?? 'Not provided';
    $company = $_POST['company'] ?? 'Not provided';

    require 'PHPMailer/Exception.php';
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';

    $mail = new PHPMailer(true);
    
    try {
        $mail->SMTPDebug = 0;
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'dharshit265@gmail.com';
        $mail->Password = 'nfbvcjkehoxobapp';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setFrom('dharshit265@gmail.com', 'Powerton Engineering');
        $mail->addAddress('dharshit265@gmail.com', 'Dharshit');
        
        if($email !== 'Not provided' && filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $mail->addReplyTo($email, $name);
        }

        $stars = str_repeat('⭐', intval($rating));
        
        $mail->isHTML(true);
        $mail->Subject = "🎯 EXIT FEEDBACK - Rating: $stars ($rating/5) - $name";
        $mail->Body = "
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
                .rating { font-size: 32px; margin: 20px 0; text-align: center; }
                .section { margin: 20px 0; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #667eea; }
                .label { font-weight: bold; color: #667eea; margin-bottom: 8px; }
                .value { color: #555; margin-left: 10px; }
                .contact-info { background: #e8eaf6; padding: 15px; border-radius: 8px; margin-top: 20px; }
                .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #999; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h1>🎯 New Website Feedback Received</h1>
                    <p>A visitor has shared their experience with your website</p>
                </div>
                <div class='content'>
                    <div class='rating'>
                        $stars
                        <br>
                        <span style='font-size: 18px; color: #666;'>Rating: $rating out of 5</span>
                    </div>
                    
                    <div class='section'>
                        <div class='label'>💬 What didn't they like about the website?</div>
                        <div class='value'>" . nl2br(htmlspecialchars($didNotLike)) . "</div>
                    </div>
                    
                    <div class='section'>
                        <div class='label'>❓ Why didn't they request a quote?</div>
                        <div class='value'>" . nl2br(htmlspecialchars($whyNoQuote)) . "</div>
                    </div>
                    
                    <div class='section'>
                        <div class='label'>🔍 What information were they looking for?</div>
                        <div class='value'>" . nl2br(htmlspecialchars($missingInfo)) . "</div>
                    </div>
                    
                    <div class='contact-info'>
                        <h3 style='margin-top: 0; color: #667eea;'>📞 Contact Information</h3>
                        <p><strong>Name:</strong> $name</p>
                        <p><strong>Email:</strong> $email</p>
                        <p><strong>Company:</strong> $company</p>
                    </div>
                    
                    <div class='footer'>
                        <p>This feedback was submitted from powertonengineering.com</p>
                        <p>Timestamp: " . date('Y-m-d H:i:s') . "</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
        ";

        $mail->AltBody = "
Website Feedback Received
=========================

Rating: $rating/5 stars

What didn't they like:
$didNotLike

Why no quote:
$whyNoQuote

Missing information:
$missingInfo

Contact Information:
- Name: $name
- Email: $email
- Company: $company

Timestamp: " . date('Y-m-d H:i:s') . "
        ";

        $mail->send();
        
        echo json_encode([
            'success' => true, 
            'message' => 'Feedback submitted successfully'
        ]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Message could not be sent. Error: ' . $mail->ErrorInfo
        ]);
    }
} else {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request']);
}
