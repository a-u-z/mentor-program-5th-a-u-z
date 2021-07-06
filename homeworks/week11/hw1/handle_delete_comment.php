<?php
    require_once('utility.php');
    $id = htmlspecialchars($_GET['id']);
    $message =[];
    $username = htmlspecialchars($_SESSION['username']);
    $sql = "update a_u_z_comments set is_deleted = 1 where id = ? and username = ?";
    $delete_content = $connect -> prepare($sql);
    $delete_content -> bind_param('is', $id, $username);
    $delete_content_result = $delete_content -> execute();
    !$delete_content_result ?  die('err') : $message['ok'] = '恭喜！評論刪除成功';
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