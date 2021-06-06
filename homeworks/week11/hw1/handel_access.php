<?php
    require_once('utility.php');
    $access = htmlspecialchars($_GET['action']);
    $username = htmlspecialchars($_GET['username']);
    print_r($access);
    print_r($username);

    if ($access == 'suspended') {
        $access = 0;
        $sql = "update a_u_z_users set role = ? where username = ?";
        $suspend = $connect -> prepare($sql);
        $suspend ->bind_param('is', $access, $username);
        $suspend_result = $suspend -> execute();
        header('Location:backend.php?errCode=15');
        exit();
    }
    if ($access == 'admin') {
        $access = 2;
        $sql = "update a_u_z_users set role = ? where username = ?";
        $suspend = $connect -> prepare($sql);
        $suspend ->bind_param('is', $access, $username);
        $suspend_result = $suspend -> execute();
        header('Location:backend.php?errCode=15');
        exit();
    }
    if ($access == 'normal') {
        $access = 1;
        $sql = "update a_u_z_users set role = ? where username = ?";
        $suspend = $connect -> prepare($sql);
        $suspend ->bind_param('is', $access, $username);
        $suspend_result = $suspend -> execute();
        header('Location:backend.php?errCode=15');
        exit();
    }

