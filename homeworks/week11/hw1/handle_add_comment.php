<?php
    require_once 'utility.php';
    $content = ($_POST['content']);
    $username = htmlspecialchars($_SESSION['username']);
    $message= [];
    if (empty($content)) {
        $message['error'] = '請輸入留言後再次送出';
    }else {
        $sql = "insert into a_u_z_comments(username, content) values(?, ?)";
        $insert_comment = $connect -> prepare($sql);
        $insert_comment -> bind_param('ss', $username, $content);

        $insert_comment_result = $insert_comment -> execute();
        !$insert_comment_result ? die($connect->error) : $message['ok'] = '恭喜！評論新增成功';
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

