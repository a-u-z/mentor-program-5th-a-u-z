<?php
    require_once('utility.php');

    if (empty($_POST['content'])) {
        header('Location:update_comment.php?errCode=3');
        die();
    }
    $id = $_POST['id'];
    $content = $_POST['content'];
    $username = $_SESSION['username'];
    $sql = "update a_u_z_comments set content = ? where id = ? and username = ?";
    $update_content = $connect -> prepare($sql);
    $update_content -> bind_param('sis',$content, $id, $username);
    $update_content_result = $update_content -> execute();

    if (!$update_content_result) {
        die('err');
    } else {
        header('Location:index.php?errCode=11');
        exit();
    }