<?php
    require_once('utility.php');
    $id = ($_POST['id']);
    $content = ($_POST['content']);
    $message = [];

    if (empty($_POST['content'])) {
        $message['error'] = '請輸入留言後再次送出';
    }else {
        $username = ($_SESSION['username']);
        $sql = "update a_u_z_comments set content = ? where id = ? and username = ?";
        $update_content = $connect -> prepare($sql);
        $update_content -> bind_param('sis',$content, $id, $username);
        $update_content_result = $update_content -> execute();
        !$update_content_result ?  die('err') : $message['ok'] = '恭喜！評論更改成功';
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
        <form id="formUpdateComment" action="update_comment.php" method="POST">
            <input type="hidden" name="message" value="<?php print_r($message['error']) ?>">
            <input type="hidden" name="id" value="<?php print_r($id) ?>">
        </form>
        <script type="text/javascript">
            document.getElementById('formUpdateComment').submit(); // SUBMIT FORM
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