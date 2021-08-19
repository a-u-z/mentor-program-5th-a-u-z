
<?php
    require_once 'utility.php';
    $nickname = htmlspecialchars($_POST['nickname']);
    $username = htmlspecialchars($_POST['username']);
    $password = htmlspecialchars($_POST['password']);
    $password2 = htmlspecialchars($_POST['password2']);
    $message = [];
    $get_user_data_result = get_user_data($username); // 在 utility 裡面的功能
    if (empty($nickname) ) {
        $message['error'] = '暱稱未輸入，請輸入暱稱';
    }else if (strlen($username) < 5) {
        $message['error'] = '帳號未輸入滿六碼，請加長長度';
    } else if (strlen($password) < 5) {
        $message['error'] = '密碼未輸入滿六碼，請加長長度';
    } else if (!isNumAndAlphabet($username)) {
        $message['error'] = '帳號只能由英文字母或是數字組成，請重新輸入';
    } else if (!isNumAndAlphabet($password)) {
        $message['error'] = '密碼只能由英文字母或是數字組成，請重新輸入';
    }else if ($password !== $password2) {
        $message['error'] = '兩次密碼輸入不一致，請再輸入一次';
    } else if ($get_user_data_result) { // 如果抓的到資料，代表已經此帳號已存在
        $message['error'] = '帳號已存在，請換一個試試看';
    }else {
        $password_hash = password_hash($password, PASSWORD_DEFAULT);
        $sql = "insert into a_u_z_users(nickname, username, password) values(?, ?, ?) ";
        $register_username = $connect -> prepare($sql);
        $register_username -> bind_param('sss',$nickname, $username, $password_hash);
        $register_username_result = $register_username ->execute();
        if ($register_username_result) { // 有結果就導回 index.php
            $_SESSION['username'] = $username;
            $message['ok'] = '註冊成功，已完成登入';
        }
    }
    function isNumAndAlphabet($str) { // 判斷是否由英文及數字組成
        if (preg_match('/^\w+$/', $str)) {
            return true;
        }
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
        <form id="formRegister" action="register.php" method="POST">
            <input type="hidden" name="message" value="<?php print_r($message['error']) ?>">
        </form>
        <script type="text/javascript">
            document.getElementById('formRegister').submit(); // SUBMIT FORM
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