<?php
    require_once('utility.php');

    if (empty($_POST['nickname'])) {
        header('Location:index.php?errCode=9');
        die();
    }

    $nickname = $_POST['nickname'];
    $username = $_SESSION['username'];
    $sql = "update a_u_z_users set nickname = ? where username = ?";
    $update_nickname = $connect -> prepare($sql);
    $update_nickname -> bind_param('ss',$nickname, $username);
    $update_nickname_result = $update_nickname -> execute();

    if (!$update_nickname_result) {
        die('err');
    } else {
        header('Location:index.php?errCode=10');
        exit();
    }