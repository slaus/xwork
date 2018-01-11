<?php
// Email Submit
// Note: filter_var() requires PHP >= 5.2.0
if ( isset($_POST['email']) && isset($_POST['name']) && isset($_POST['tel']) && isset($_POST['subject']) && isset($_POST['message']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ) {

	// detect & prevent header injections
	$test = "/(content-type|bcc:|cc:|to:)/i";
	foreach ($_POST as $key => $val) {
		if (preg_match($test, $val)) {
			exit;
		}
	}

	$to = "admin@xwork.site";	// receiver of the email
        $subject = "Сообщение с сайта xwork.site.";			// subject of the email
	$message = '
	<html>
		<head>
    			<meta charset="utf-8">
			<title>Контактная форма с сайта</title>
		</head>
		<body>
			<h3>Имя: <span style="font-weight: normal;">' . $_POST['name'] . '</span></h3>
			<h3>Email: <span style="font-weight: normal;">' . $_POST['email'] . '</span></h3>
			<h3>Телефон: <span style="font-weight: normal;">' . $_POST['tel'] . '</span></h3>
			<h3>Тема сообщения: <span style="font-weight: normal;">' . $_POST['subject'] . '</span></h3>
			<div>
				<h3 style="margin-bottom: 5px;">Comment:</h3>
				<div>' . $_POST['message'] . '</div>
			</div>
		</body>
	</html>';

	$headers  = "Content-type: text/html; charset=utf-8 \r\n";

	// E-mail sending function
	mail($to, $subject, $message, $headers);

}
?>