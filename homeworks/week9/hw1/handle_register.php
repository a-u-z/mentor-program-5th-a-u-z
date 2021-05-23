<?php
    require_once 'utility.php';
    $nickname = $_POST['nickname'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    if (empty($nickname) || empty($username) || empty($password)) {
        header('Location:register.php?errCode=1');
        die();
    }
    $sql = "insert into a_u_z_users(nickname, username, password) values('%s', '%s', '%s') ";
    $registerUsername = sprintf($sql, $nickname, $username, $password);
    $registerUsernameResult = $connect->query($registerUsername);
    if ($registerUsernameResult) { // 有結果就導回 index.php
        header('Location:login.php?errCode=4');
        die();
    }
    if ($connect->errno === 1062) { // 如果已經存在相同的 username ，那麼 $connect->errno 會輸出 1062（型態是數字）
        header('Location:register.php?errCode=1062');
        die();
    }
