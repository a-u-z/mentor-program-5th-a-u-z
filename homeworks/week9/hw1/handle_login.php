<?php
    require_once 'utility.php';
    $username = $_POST['username'];
    $password = $_POST['password'];
    if (empty($username) || empty($password)) {
        header('Location:login.php?errCode=1');
        die();
    }
    $sql = "select * from a_u_z_users where username = '%s' and password = '%s'";
    $identifyUsername = sprintf($sql, $username, $password);
    $identifyUsernameResult = $connect->query($identifyUsername);
    $isValid = $identifyUsernameResult->num_rows;
    if ($isValid) { // 有結果就導回 index.php
        $_SESSION['username'] = $username;
        header('Location:index.php');
    } else {
        header('Location:login.php?errCode=2'); // 沒結果就是帳號或是密碼錯誤
    }
