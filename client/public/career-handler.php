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
    // Personal Information
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $residingAddress = $_POST['residingAddress'] ?? '';
    
    // Professional Information
    $specialization = $_POST['specialization'] ?? 'Not specified';
    $experience = $_POST['experience'] ?? 'Not specified';
    $education = $_POST['education'] ?? '';
    $currentCompany = $_POST['currentCompany'] ?? 'Not specified';
    $expectedSalary = $_POST['expectedSalary'] ?? 'Not specified';
    $joiningTime = $_POST['joiningTime'] ?? 'Not specified';
    
    // Technical Information
    $skills = $_POST['skills'] ?? '';
    $coverLetter = $_POST['coverLetter'] ?? '';
    
    // Handle resume file upload
    $resumeAttached = false;
    $resumeFileName = '';
    if (isset($_FILES['resume']) && $_FILES['resume']['error'] === UPLOAD_ERR_OK) {
        $allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        $maxSize = 5 * 1024 * 1024; // 5MB
        
        $fileType = $_FILES['resume']['type'];
        $fileSize = $_FILES['resume']['size'];
        $fileName = $_FILES['resume']['name'];
        
        if (in_array($fileType, $allowedTypes) && $fileSize <= $maxSize) {
            $resumeAttached = true;
            $resumeFileName = $fileName;
        }
    }

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
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'info.powerton@gmail.com';
        $mail->Password = 'qlhyognuikudpdda';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Recipients
        $mail->setFrom('info.powerton@gmail.com', 'Powerton Engineering');
        $mail->addAddress('dharshit265@gmail.com', 'Dharshit');
        $mail->addReplyTo($email, $name);
        
        // Attach resume if uploaded
        if ($resumeAttached) {
            $mail->addAttachment($_FILES['resume']['tmp_name'], $resumeFileName);
        }

        // Content
        $mail->isHTML(true);
        $mail->Subject = "CAREER APPLICATION - " . $name;
        $mail->Body = "
        <table style='width: 100%; border-collapse: collapse; font-family: Arial, sans-serif;'>
        <tr>
            <td colspan='2' style='padding: 15px; border: 1px solid #ccc; background: #1e3a8a; color: white; text-align: center;'>
                <h2>New Career Application Submission</h2>
            </td>
        </tr>
        
        <!-- Personal Information Section -->
        <tr>
            <td colspan='2' style='padding: 10px; border: 1px solid #ccc; background: #e3f2fd; font-weight: bold; text-align: center;'>
                PERSONAL INFORMATION
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
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Address:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>" . nl2br(htmlspecialchars($residingAddress)) . "</td>
        </tr>
        
        <!-- Professional Information Section -->
        <tr>
            <td colspan='2' style='padding: 10px; border: 1px solid #ccc; background: #e8f5e8; font-weight: bold; text-align: center;'>
                PROFESSIONAL INFORMATION
            </td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Specialization:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>$specialization</td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Experience:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>$experience</td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Education:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>$education</td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Current Company:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>$currentCompany</td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Expected Salary:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>$expectedSalary</td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Joining Time:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>$joiningTime</td>
        </tr>
        
        <!-- Technical Skills Section -->
        <tr>
            <td colspan='2' style='padding: 10px; border: 1px solid #ccc; background: #fff3e0; font-weight: bold; text-align: center;'>
                TECHNICAL SKILLS & QUALIFICATIONS
            </td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Technical Skills:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>" . nl2br(htmlspecialchars($skills)) . "</td>
        </tr>
        
        <!-- Cover Letter Section -->
        <tr>
            <td colspan='2' style='padding: 10px; border: 1px solid #ccc; background: #fce4ec; font-weight: bold; text-align: center;'>
                COVER LETTER & MOTIVATION
            </td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Cover Letter:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>" . nl2br(htmlspecialchars($coverLetter)) . "</td>
        </tr>
        
        <!-- Resume Section -->
        <tr>
            <td colspan='2' style='padding: 10px; border: 1px solid #ccc; background: #f3e5f5; font-weight: bold; text-align: center;'>
                CV/RESUME ATTACHMENT
            </td>
        </tr>
        <tr>
            <td style='padding: 10px; border: 1px solid #ccc; background: #f5f5f5; font-weight: bold;'>Resume Status:</td>
            <td style='padding: 10px; border: 1px solid #ccc;'>" . 
                ($resumeAttached ? 
                    "<span style='color: #28a745; font-weight: bold;'>✓ Attached - " . htmlspecialchars($resumeFileName) . "</span>" : 
                    "<span style='color: #dc3545;'>✗ No resume uploaded</span>") . 
            "</td>
        </tr>
        
        <!-- Footer -->
        <tr>
            <td colspan='2' style='padding: 10px; border: 1px solid #ccc; background: #1e3a8a; color: white; text-align: center;'>
                <strong>This career application was sent from Powerton Engineering website.</strong><br>
                <small>Submitted on: " . date('Y-m-d H:i:s') . " | Priority: Low</small>
            </td>
        </tr>
        </table>";

        $mail->send();
        
        // Return JSON success response
        header('Content-Type: application/json');
        echo json_encode(['success' => true, 'message' => 'Career application submitted successfully']);
        
    } catch (Exception $e) {
        // Return JSON error response
        header('Content-Type: application/json');
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Career application could not be sent: ' . $mail->ErrorInfo]);
    }
} else {
    // Return error for invalid request
    header('Content-Type: application/json');
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request']);
}
?>