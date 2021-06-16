<?php
    require_once 'utility.php';
    $author = htmlspecialchars($_POST['author']);
    $password = htmlspecialchars($_POST['password']);
    if (empty($author) || empty($password)) {
        header('Location:login.php?errCode=1');
        die();
    }
    $get_author_data_result = get_author_data($author);
    if (!$get_author_data_result) { // 如果查無資料，代表帳號錯誤
        header('Location:login.php?errCode=2'); // 輸出 -> 帳號或是密碼錯誤
        die();
    } else {
        if (!verify($password, $get_author_data_result)) { // 用驗證功能
            header('Location:login.php?errCode=2'); // 輸出 -> 帳號或是密碼錯誤
            die();
        } else {
            $_SESSION['author'] = $author;
            header('Location:blog.php');
        }
    }
    function verify($password, $get_author_data_result) {
        return password_verify($password, $get_author_data_result['password']);
    }