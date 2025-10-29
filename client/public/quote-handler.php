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
    // Contact Information
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $company = $_POST['company'] ?? '';
    $designation = $_POST['designation'] ?? 'Not specified';
    
    // Project Information
    $projectTitle = $_POST['projectTitle'] ?? '';
    $projectType = $_POST['projectType'] ?? '';
    $budget = $_POST['budget'] ?? 'Not specified';
    $timeline = $_POST['timeline'] ?? '';
    $industryType = $_POST['industryType'] ?? 'Not specified';
    $projectScale = $_POST['projectScale'] ?? 'Not specified';
    
    // Services (handle array)
    $services = isset($_POST['services']) ? (is_array($_POST['services']) ? implode(', ', $_POST['services']) : $_POST['services']) : 'Not specified';
    
    // Technical Requirements
    $specifications = $_POST['specifications'] ?? '';
    $additionalRequirements = $_POST['additionalRequirements'] ?? 'None';
    $preferredBrands = $_POST['preferredBrands'] ?? 'None specified';

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
        $mail->addAddress('powertoneng@gmail.com', 'Admin');
        $mail->addReplyTo($email, $name);

        // Content
        $mail->isHTML(true);
        $mail->Subject = "Quote Request - " . $projectTitle;
        $mail->Body = "
        <table style='width: 100%; border-collapse: collapse; font-family: Arial, sans-serif;'>
        <tr>
            <td colspan='2' style='padding: 15px; border: 1px solid #ccc; background: #1e3a8a; color: white; text-align: center;'>
                <h2>New Quote Request Submission</h2>
            </td>
        </tr>
        
        <!-- Contact Information Section -->
        <tr>
            <td colspan='2' style='padding: 10px; border: 1px solid #ccc; background: #e3f2fd; font-weight: bold; text-align: center;'>
                CONTACT INFORMATION
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
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Designation:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>$designation</td>
        </tr>
        
        <!-- Project Information Section -->
        <tr>
            <td colspan='2' style='padding: 10px; border: 1px solid #ccc; background: #e8f5e8; font-weight: bold; text-align: center;'>
                PROJECT INFORMATION
            </td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Project Title:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>$projectTitle</td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Project Type:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>$projectType</td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Budget Range:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>$budget</td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Timeline:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>$timeline</td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Industry Type:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>$industryType</td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Project Scale:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>$projectScale</td>
        </tr>
        
        <!-- Services Section -->
        <tr>
            <td colspan='2' style='padding: 10px; border: 1px solid #ccc; background: #fff3e0; font-weight: bold; text-align: center;'>
                REQUIRED SERVICES
            </td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Selected Services:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>$services</td>
        </tr>
        
        <!-- Technical Specifications Section -->
        <tr>
            <td colspan='2' style='padding: 10px; border: 1px solid #ccc; background: #fce4ec; font-weight: bold; text-align: center;'>
                TECHNICAL SPECIFICATIONS
            </td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Detailed Requirements:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>" . nl2br(htmlspecialchars($specifications)) . "</td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Preferred Brands:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>$preferredBrands</td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Additional Requirements:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>" . nl2br(htmlspecialchars($additionalRequirements)) . "</td>
        </tr>
        
        <!-- Footer -->
        <tr>
            <td colspan='2' style='padding: 10px; border: 1px solid #ccc; background: #1e3a8a; color: white; text-align: center;'>
                <strong>This quote request was sent from Powerton Engineering website.</strong><br>
                <small>Submitted on: " . date('Y-m-d H:i:s') . " | Priority: High</small>
            </td>
        </tr>
        </table>";

        $mail->send();
        
        // Return JSON success response
        header('Content-Type: application/json');
        echo json_encode(['success' => true, 'message' => 'Quote request submitted successfully']);
        
    } catch (Exception $e) {
        // Return JSON error response
        header('Content-Type: application/json');
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Quote request could not be sent: ' . $mail->ErrorInfo]);
    }
} else {
    // Return error for invalid request
    header('Content-Type: application/json');
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request']);
}
?>