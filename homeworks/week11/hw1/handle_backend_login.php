<?php
    require_once 'utility.php';
    $username = htmlspecialchars($_POST['username']);
    $password = htmlspecialchars($_POST['password']);
    if (empty($username) || empty($password)) {
        header('Location:login.php?errCode=1');
        die();
    }
    $get_user_data_result = get_user_data($username);
    $role = $get_user_data_result['role'];
    $message = [];
    
    if (!$get_user_data_result) { // 如果查無資料，代表帳號錯誤
        $message['error'] = '帳號或是密碼錯誤，請再輸入一次';
    }else if (!verify($password, $get_user_data_result)) { // 用驗證功能
        $message['error'] = '帳號或是密碼錯誤，請再輸入一次'; // 輸出 -> 帳號或是密碼錯誤
    } else {  
        $_SESSION['username'] = $username;
        $role !== '2' ? 
            $message['loginNormal'] = '尚無權限，為您登入一般模式':
            $message['ok'] ='恭喜登入後台成功';
        
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
        <form id="formRegister" action="register.php" method="POST">
            <input type="hidden" name="message" value="<?php print_r($message['error']) ?>">
        </form>
        <script type="text/javascript">
            document.getElementById('formRegister').submit(); // SUBMIT FORM
        </script>
    <?php } else if (!empty($message['loginNormal'])) {?>
        <form id="formIndex" action="index.php" method="POST">
            <input type="hidden" name="message" value="<?php print_r($message['loginNormal']) ?>">
        </form>
        <script type="text/javascript">
            document.getElementById('formIndex').submit(); // SUBMIT FORM
        </script>
    <?php } else {?>
        <form id="formBackEnd" action="backend.php" method="POST">
            <input type="hidden" name="message" value="<?php print_r($message['ok']) ?>">
        </form>
        <script type="text/javascript">
            document.getElementById('formBackEnd').submit(); // SUBMIT FORM
        </script>
    <?php } ?>
</body>
</html>

    