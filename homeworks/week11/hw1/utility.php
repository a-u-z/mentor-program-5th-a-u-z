<?php
    $server_name = 'localhost';
    $username = 'mtr04group4';
    $password = 'Lidemymtr04group4';
    $database_name = 'mtr04group4';
    $connect = new mysqli($server_name, $username, $password, $database_name); //跟 database 建立連線，完成之後回傳給變數
    $connect->query("SET NAMES UTF8");
    $connect->query('SET time_zone="+8:00"');
    session_start();
    function get_user_data($username) {
        global $connect;
        $sql = "select * from a_u_z_users where username = ?";
        $select_user = $connect -> prepare($sql);
        $select_user ->bind_param('s', $username);
        $middle_man = $select_user -> execute();
        $middle_man = $select_user ->get_result();
        $get_user_data_result = $middle_man->fetch_assoc();
        return $get_user_data_result; // 裡面有 username, id, nickname, password
    }
    function prevent_XSS($str) {
        return htmlspecialchars($str, ENT_QUOTES);
    }
