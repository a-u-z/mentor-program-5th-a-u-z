<?php
    require_once 'utility.php';
    $nickname = htmlspecialchars($_POST['nickname']);
    $username = htmlspecialchars($_POST['username']);
    $password = htmlspecialchars($_POST['password']);
    $password2 = htmlspecialchars($_POST['password2']);
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
    
    $get_user_data_result = get_user_data($username); // 在 utility 裡面的功能
   
    if ($get_user_data_result) { // 如果抓的到資料，代表已經此帳號已存在
        header('Location:register.php?errCode=1062');
        die();
    }
    $password_hash = password_hash($password, PASSWORD_DEFAULT);
    $sql = "insert into a_u_z_users(nickname, username, password) values(?, ?, ?) ";
    $register_username = $connect -> prepare($sql);
    $register_username -> bind_param('sss',$nickname, $username, $password_hash);
    $register_username_result = $register_username ->execute();
    if ($register_username_result) { // 有結果就導回 index.php
        $_SESSION['username'] = $username;
        header('Location:index.php?errCode=4');
        die();
    }
    function isNumAndAlphabet($str) { // 判斷是否由英文及數字組成
        if (preg_match('/^\w+$/', $str)) {
            return true;
        }
    }
