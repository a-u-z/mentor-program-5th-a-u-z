<?php
    require_once 'utility.php';
    $author = $_POST['author'];
    $password = $_POST['password'];
    $password2 = $_POST['password2'];
    if (strlen($password) < 5) {
        header('Location:register.php?errCode=6');
        die();
    }
    if (!isNumAndAlphabet($password)) {
        header('Location:register.php?errCode=7');
        die();
    }
    if (empty($author) || empty($password) || empty($password2)) {
        header('Location:register.php?errCode=1');
        die();
    }
    if ($password !== $password2) {
        header('Location:register.php?errCode=5');
        die();
    }
    
    $get_author_data_result = get_author_data($author); // 在 utility 裡面的功能
   
    if ($get_author_data_result) { // 如果抓的到資料，代表已經此帳號已存在
        header('Location:register.php?errCode=1062');
        die();
    }
    $password_hash = password_hash($password, PASSWORD_DEFAULT);
    $sql = "insert into a_u_z_author(author, password) values(?, ?) ";
    $register_author = $connect -> prepare($sql);
    $register_author -> bind_param('ss',$author, $password_hash);
    $register_author_result = $register_author ->execute();
    if ($register_author_result) { // 有結果就導回 index.php
        $_SESSION['author'] = $author;
        header('Location:index.php?errCode=4');
        die();
    }
    function isNumAndAlphabet($str) { // 判斷是否由英文及數字組成
        if (preg_match('/^\w+$/', $str)) {
            return true;
        }
    }
