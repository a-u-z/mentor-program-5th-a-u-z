<?php
    require_once('utility.php');
    $access = htmlspecialchars($_GET['action']);
    $username = htmlspecialchars($_GET['username']);
    print_r($access);
    print_r($username);
    $message = [];
    if ($access == 'suspended') { // 停權
        $access = 0;
        $sql = "update a_u_z_users set role = ? where username = ?";
        $suspend = $connect -> prepare($sql);
        $suspend ->bind_param('is', $access, $username);
        $suspend_result = $suspend -> execute();
        $message['ok'] = '恭喜！權限設定成功';
    } else if ($access == 'admin') {
        $access = 2;
        $sql = "update a_u_z_users set role = ? where username = ?";
        $suspend = $connect -> prepare($sql);
        $suspend ->bind_param('is', $access, $username);
        $suspend_result = $suspend -> execute();
        $message['ok'] = '恭喜！權限設定成功';
    } else if ($access == 'normal') {
        $access = 1;
        $sql = "update a_u_z_users set role = ? where username = ?";
        $suspend = $connect -> prepare($sql);
        $suspend ->bind_param('is', $access, $username);
        $suspend_result = $suspend -> execute();
        $message['ok'] = '恭喜！權限設定成功';
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
        <form id="formBackend" action="backend.php" method="POST">
            <input type="hidden" name="message" value="<?php print_r($message['error']) ?>">
        </form>
        <script type="text/javascript">
            document.getElementById('formBackend').submit(); // SUBMIT FORM
        </script>
    <?php } else {?>
        <form id="formBackend" action="backend.php" method="POST">
            <input type="hidden" name="message" value="<?php print_r($message['ok']) ?>">
        </form>
        <script type="text/javascript">
            document.getElementById('formBackend').submit(); // SUBMIT FORM
        </script>
    <?php } ?>
</body>
</html>

