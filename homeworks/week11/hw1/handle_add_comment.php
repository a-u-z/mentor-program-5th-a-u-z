<?php
    require_once 'utility.php';
    $content = htmlspecialchars($_POST['content']);
    $username = htmlspecialchars($_SESSION['username']);


    if (empty($content)) {
        header('Location:index.php?errCode=3');
        die();
    }
    $sql = "insert into a_u_z_comments(username, content) values(?, ?)";
    $insert_comment = $connect -> prepare($sql);
    $insert_comment -> bind_param('ss', $username, $content);

    $insert_comment_result = $insert_comment -> execute();
    if ($insert_comment_result) { // 有結果就導回 index.php
        header('Location:index.php?errCode=13');
        die();
    } else {
        die($connect->error);
    }

