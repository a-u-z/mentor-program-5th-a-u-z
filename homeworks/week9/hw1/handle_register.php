<?php
    require_once 'utility.php';
    $nickname = $_POST['nickname'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $password2 = $_POST['password2'];
    if (strlen($username) < 5) {
        header('Location:register.php?errCode=9');
        die();
    }
    if (strlen($password) < 5) {
        header('Location:register.php?errCode=6');
        die();
    }
    if (!isNumAndAlphabet($username)) {
        header('Location:register.php?errCode=8');
        die();
    }
    if (!isNumAndAlphabet($password)) {
        header('Location:register.php?errCode=7');
        die();
    }
    if (empty($nickname) || empty($username) || empty($password) || empty($password2)) {
        header('Location:register.php?errCode=1');
        die();
    }
    if ($password !== $password2) {
        header('Location:register.php?errCode=5');
        die();
    }
    $sql = "select * from a_u_z_users where username = '%s'";
    $selectUsername = sprintf($sql, $username);
    $selectUsernameResult = $connect->query($selectUsername);
    if ($selectUsernameResult->num_rows) {
        header('Location:register.php?errCode=1062'); 
        die();
    }

    $sql = "insert into a_u_z_users(nickname, username, password) values('%s', '%s', '%s') ";
    $registerUsername = sprintf($sql, $nickname, $username, $password);
    $registerUsernameResult = $connect->query($registerUsername);
    if ($registerUsernameResult) { // 有結果就導回 index.php
        header('Location:login.php?errCode=4');
        die();
    }
    function isNumAndAlphabet($str) { // 判斷是否由英文及數字組成
        if (preg_match('/^\w+$/', $str)) { // [A-Za-z0-9_] 的部分，可以縮寫為 \w
            return true;
        }   
    }
