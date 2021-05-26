<?php
    $server_name = 'localhost';
    $username = 'mtr04group4';
    $password = 'Lidemymtr04group4';
    $database_name = 'mtr04group4';
    $connect = new mysqli($server_name, $username, $password, $database_name); //跟 database 建立連線，完成之後回傳給變數
    $connect->query("SET NAMES UTF8");
    $connect->query('SET time_zone="+8:00"');
    session_start();
    function getNicknameFromUsername($username) {
        global $connect;
        $sql = "select * from a_u_z_users where username = '%s'";
        $selectUser = sprintf($sql, $username);
        $result = $connect->query($selectUser);
        $row = $result->fetch_assoc();
        return $row; // 裡面有 username, id, nickname
    }
