<?php
    require_once('utility.php');

    $message=[];

    if (empty($_POST['nickname'])) {
        $message['error'] ='未輸入暱稱，請重新輸入';
    } else {
        $nickname = htmlspecialchars($_POST['nickname']);
        $username = htmlspecialchars($_SESSION['username']);
        $sql = "update a_u_z_users set nickname = ? where username = ?";
        $update_nickname = $connect -> prepare($sql);
        $update_nickname -> bind_param('ss',$nickname, $username);
        $update_nickname_result = $update_nickname -> execute();
        !$update_nickname_result ? die('err'): $message['ok'] = '恭喜！暱稱更改成功';
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
        <form id="formIndex" action="index.php" method="POST">
            <input type="hidden" name="message" value="<?php print_r($message['error']) ?>">
        </form>
        <script type="text/javascript">
            document.getElementById('formIndex').submit(); // SUBMIT FORM
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