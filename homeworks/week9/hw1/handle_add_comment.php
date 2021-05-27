<?php
    require_once 'utility.php';
    $content = $_POST['content'];
    $username_info = get_user_info_from_username($_SESSION['username']);
    // 透過寫在 utility.php 裡面的函式，用 username 關連出 nickname
    $nickname = $username_info['nickname'];
    // 因為 nickname 會是一個 array 所以要在從中取值
    if (empty($content)) {
        header('Location:index.php?errCode=3');
        die();
    }
    $sql = "insert into a_u_z_comments(nickname, content) values('%s', '%s')";
    $insertComment = sprintf($sql, $nickname, $content);
    $insertCommentResult = $connect->query($insertComment);
    if ($insertCommentResult) { // 有結果就導回 index.php
        header('Location:index.php');
        die();
    } else {
        die($connect->error);
    }
