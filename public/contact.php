<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Read raw JSON input
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    // Fallback to $_POST
    $data = $_POST;
}

$name = isset($data['name']) ? trim(strip_tags($data['name'])) : '';
$email = isset($data['email']) ? trim(filter_var($data['email'], FILTER_SANITIZE_EMAIL)) : '';
$subject = isset($data['subject']) ? trim(strip_tags($data['subject'])) : 'New Portfolio Inquiry';
$message = isset($data['message']) ? trim(strip_tags($data['message'])) : '';

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address.']);
    exit;
}

// Recipient Email (Dhruv Mulani)
$to = 'dhruvkumarmulani@gmail.com';

$emailSubject = "[Portfolio Transmission] " . $subject;

$emailBody = "You have received a new secure transmission from your portfolio website (Dhruvvv.py):\n\n";
$emailBody .= "=================================================\n";
$emailBody .= "Name:    " . $name . "\n";
$emailBody .= "Email:   " . $email . "\n";
$emailBody .= "Subject: " . $subject . "\n";
$emailBody .= "Date:    " . date('Y-m-d H:i:s') . "\n";
$emailBody .= "=================================================\n\n";
$emailBody .= "Message:\n" . $message . "\n\n";
$emailBody .= "-------------------------------------------------\n";
$emailBody .= "Sent from: https://" . ($_SERVER['HTTP_HOST'] ?? 'dhruvmulani.com') . "\n";

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/plain; charset=UTF-8';
$headers[] = 'From: noreply@' . ($_SERVER['HTTP_HOST'] ?? 'dhruvmulani.com');
$headers[] = 'Reply-To: ' . $email;
$headers[] = 'X-Mailer: PHP/' . phpversion();

$sent = @mail($to, $emailSubject, $emailBody, implode("\r\n", $headers));

if ($sent) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Transmission successfully dispatched to Dhruv Mulani.']);
} else {
    // If mail function fails on local dev or unconfigured mail server, return helpful message
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Transmission received. (Direct fallback to dhruvkumarmulani@gmail.com enabled)',
        'fallbackMailto' => 'mailto:' . $to . '?subject=' . rawurlencode($emailSubject) . '&body=' . rawurlencode($emailBody)
    ]);
}
?>
