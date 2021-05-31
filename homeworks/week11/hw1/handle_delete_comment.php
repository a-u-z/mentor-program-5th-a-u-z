<?php
    require_once('utility.php');
    $id = $_GET['id'];

    $username = $_SESSION['username'];
    $sql = "update a_u_z_comments set is_deleted = 1 where id = ? and username = ?";
    $delete_content = $connect -> prepare($sql);
    $delete_content -> bind_param('is', $id, $username);
    $delete_content_result = $delete_content -> execute();

    if (!$delete_content_result) {
        die('err');
    } else {
        header('Location:index.php?errCode=12');
        exit();
    }