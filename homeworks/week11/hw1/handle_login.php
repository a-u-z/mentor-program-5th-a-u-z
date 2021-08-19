<?php
    require_once 'utility.php';
    $username = htmlspecialchars($_POST['username']);
    $password = htmlspecialchars($_POST['password']);
    $message = [];
    $get_user_data_result = get_user_data($username);
    if (empty($username) || empty($password)) {
        $message['error'] = '資料不齊全，請再輸入一次';
    } else if (!$get_user_data_result) { // 如果查無資料，代表帳號錯誤
        $message['error'] = '帳號或是密碼錯誤，請再輸入一次'; // 輸出 -> 帳號或是密碼錯誤
    } else if (!verify($password, $get_user_data_result)) {
        $message['error'] = '帳號或是密碼錯誤，請再輸入一次'; // 輸出 -> 帳號或是密碼錯誤
    } else {
        $_SESSION['username'] = $username;
        $message['ok'] = '恭喜！登入成功';
    }
    function verify($password, $get_user_data_result) {
        return password_verify($password, $get_user_data_result['password']);
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php if(!empty($message['error'])) {?>
        <form id="formLogin" action="login.php" method="POST">
            <input type="hidden" name="message" value="<?php print_r($message['error']) ?>">
        </form>
        <script type="text/javascript">
            document.getElementById('formLogin').submit(); // SUBMIT FORM
        </script>
    <?php } else {?>
        <form id="formIndex" action="index.php" method="POST">
            <input type="hidden" name="message" value="<?php print_r($message['ok']) ?>">
        </form>
        <script type="text/javascript">
            document.getElementById('formIndex').submit(); // SUBMIT FORM
        </script>
    <?php } ?>
</body>
</html>

    