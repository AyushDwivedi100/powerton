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

    // Array to capture all debug messages
    $debugMessages = [];
    $stepCounter = 0;
    
    try {
        // STEP 1: Initialize PHPMailer settings
        $debugMessages[] = "STEP 1: Initializing PHPMailer with SMTP configuration";
        
        // Enable MAXIMUM debug output (SMTP::DEBUG_SERVER = 4 shows everything including low-level)
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;
        
        // Capture ALL debug output in our array
        $mail->Debugoutput = function($str, $level) use (&$debugMessages) {
            $levelNames = ['', 'ERROR', 'CLIENT', 'SERVER', 'CONNECTION'];
            $levelName = $levelNames[$level] ?? 'UNKNOWN';
            $debugMessages[] = "[$levelName] $str";
        };
        
        $debugMessages[] = "STEP 2: Setting up SMTP connection parameters";
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $debugMessages[] = "  - SMTP Host: smtp.gmail.com (Gmail)";
        
        $mail->SMTPAuth = true;
        $debugMessages[] = "  - SMTP Auth: Enabled";
        
        $mail->Username = 'dharshit265@gmail.com';
        $debugMessages[] = "  - Username: dharshit265@gmail.com";
        
        $mail->Password = 'Ayush@2003';
        $debugMessages[] = "  - Password: " . str_repeat('*', strlen('Ayush@2003')) . " (length: " . strlen('Ayush@2003') . " chars)";
        $debugMessages[] = "  - ⚠️  WARNING: Using Gmail requires App Password or 'Less secure app access'";
        
        $mail->SMTPSecure = 'tls';
        $debugMessages[] = "  - Encryption: TLS (recommended for Gmail)";
        
        $mail->Port = 587;
        $debugMessages[] = "  - Port: 587 (Gmail TLS port)";
        
        // Additional debug settings
        $debugMessages[] = "STEP 3: Configuring SSL verification options";
        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );
        $debugMessages[] = "  - SSL peer verification: Disabled (for debugging)";
        $debugMessages[] = "  - SSL peer name verification: Disabled (for debugging)";
        $debugMessages[] = "  - Allow self-signed certificates: Enabled";

        $debugMessages[] = "STEP 4: Setting email headers";
        $mail->setFrom('dharshit265@gmail.com', 'Powerton Engineering Feedback');
        $debugMessages[] = "  - From: dharshit265@gmail.com (Powerton Engineering Feedback)";
        
        $mail->addAddress('ayushd100@gmail.com', 'Ayush');
        $debugMessages[] = "  - To: ayushd100@gmail.com";
        
        if($email !== 'Not provided' && filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $mail->addReplyTo($email, $name);
            $debugMessages[] = "  - Reply-To: $email ($name)";
        }

        $debugMessages[] = "STEP 5: Preparing email content";
        $stars = str_repeat('⭐', intval($rating));
        
        $mail->isHTML(true);
        $mail->Subject = "Website Feedback - Rating: $stars ($rating/5)";
        $debugMessages[] = "  - Subject set: Website Feedback - Rating: $rating/5";
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

        $debugMessages[] = "STEP 6: Attempting to send email via SMTP...";
        $debugMessages[] = "========================================";
        $debugMessages[] = "STARTING SMTP CONNECTION AND AUTHENTICATION";
        $debugMessages[] = "========================================";
        
        $mail->send();
        
        $debugMessages[] = "========================================";
        $debugMessages[] = "✅ EMAIL SENT SUCCESSFULLY!";
        $debugMessages[] = "========================================";
        
        echo json_encode([
            'success' => true, 
            'message' => 'Feedback submitted successfully',
            'debug_messages' => $debugMessages,
            'total_steps' => count($debugMessages)
        ]);
    } catch (Exception $e) {
        $debugMessages[] = "========================================";
        $debugMessages[] = "❌ SMTP ERROR OCCURRED!";
        $debugMessages[] = "========================================";
        $debugMessages[] = "Error Type: " . get_class($e);
        $debugMessages[] = "Error Message: " . $e->getMessage();
        $debugMessages[] = "PHPMailer ErrorInfo: " . $mail->ErrorInfo;
        $debugMessages[] = "========================================";
        
        // Analyze the error to provide helpful suggestions
        $suggestions = [];
        $errorMsg = strtolower($e->getMessage() . ' ' . $mail->ErrorInfo);
        
        if (strpos($errorMsg, 'could not authenticate') !== false) {
            $suggestions[] = "Authentication failed. Possible causes:";
            $suggestions[] = "  1. Incorrect password for info@powertonengineering.com";
            $suggestions[] = "  2. Email account doesn't exist in Hostinger";
            $suggestions[] = "  3. Two-factor authentication is enabled (need app password)";
            $suggestions[] = "  4. Account is locked or suspended";
        }
        
        if (strpos($errorMsg, 'could not connect') !== false) {
            $suggestions[] = "Connection failed. Possible causes:";
            $suggestions[] = "  1. Port 465 is blocked by server firewall";
            $suggestions[] = "  2. SMTP host 'smtp.hostinger.com' is incorrect";
            $suggestions[] = "  3. Try port 587 with TLS instead of SSL";
        }
        
        if (strpos($errorMsg, 'tls') !== false || strpos($errorMsg, 'ssl') !== false) {
            $suggestions[] = "SSL/TLS issue. Try these alternatives:";
            $suggestions[] = "  1. Change to TLS on port 587 instead of SSL on 465";
            $suggestions[] = "  2. Check if server supports SSL/TLS connections";
        }
        
        // Detailed error information
        $errorDetails = [
            'success' => false,
            'error_summary' => "SMTP Authentication Failed",
            'message' => "Message could not be sent. Error: {$mail->ErrorInfo}",
            'debug_messages' => $debugMessages,
            'smtp_configuration' => [
                'host' => $mail->Host,
                'port' => $mail->Port,
                'encryption' => $mail->SMTPSecure,
                'username' => $mail->Username,
                'smtp_auth_enabled' => $mail->SMTPAuth ? 'Yes' : 'No'
            ],
            'error_details' => [
                'exception_class' => get_class($e),
                'exception_message' => $e->getMessage(),
                'phpmailer_error' => $mail->ErrorInfo,
                'error_file' => $e->getFile(),
                'error_line' => $e->getLine()
            ],
            'suggestions' => $suggestions,
            'total_debug_lines' => count($debugMessages)
        ];
        
        // Log to PHP error log
        error_log("=== SMTP ERROR DETAILS ===");
        error_log(print_r($errorDetails, true));
        
        echo json_encode($errorDetails, JSON_PRETTY_PRINT);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request']);
}
