<?php
    require_once 'utility.php';
    $username = htmlspecialchars($_POST['username']);
    $password = htmlspecialchars($_POST['password']);
    if (empty($username) || empty($password)) {
        header('Location:login.php?errCode=1');
        die();
    }
    $get_user_data_result = get_user_data($username);
    $role = $get_user_data_result['role'];
    print_r(gettype($role));
    
    if (!$get_user_data_result) { // 如果查無資料，代表帳號錯誤
        header('Location:login.php?errCode=2'); // 輸出 -> 帳號或是密碼錯誤
        die();
    }
    if (!verify($password, $get_user_data_result)) { // 用驗證功能
        header('Location:login.php?errCode=2'); // 輸出 -> 帳號或是密碼錯誤
        die();
    } else {  
        $_SESSION['username'] = $username;
        if ($role !== '2') {
            header('Location:index.php?errCode=14');
            exit();
        } else {
            header('Location:backend.php');
        }
        

    }
    function verify($password, $get_user_data_result) {
        return password_verify($password, $get_user_data_result['password']);
    }
    

    