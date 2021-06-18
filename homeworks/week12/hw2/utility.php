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
    function last_page($limit, $sql) {
        global $connect;
        $select_page = $connect -> prepare($sql);
        $select_page_result = $select_page -> execute();
        $select_page_result = $select_page -> get_result();
        $select_page_result = $select_page_result -> fetch_assoc();
        $count = $select_page_result['count'];
        $last_page = ceil($count / $limit);
        return $last_page;
    }
    function nav_page($page, $last_page, $website) {
        $page_template = '';
        if ($last_page <= 5) {
            for ($i = 1; $i <= $last_page; $i++) {
                if ($i != $page) {
                $page_template .= '<a href="'. $website .'.php?page=' .$i . '">' .$i .'</a>';
                }
                if ($i == $page) {
                $page_template .= '<span>' .$i .'</span>';
                }
            }
        } else {
            $left_ellipsis = 0;
            $right_ellipsis = 0;
            for ($i = 1; $i <= $last_page; $i++) {
                if ($i == 1 && $page != 1) {
                $page_template .= '<a href="'. $website .'.php?page=1">1</a>';
                } else if (abs($i - $page) < 2 ) {
                $page_template .= '<a href="'. $website .'.php?page=' .$i . '">' .$i .'</a>';
                } else if ($i == $last_page && $page != $last_page) {
                    $page_template .= '<a href="'. $website .'.php?page='. $last_page . '">' . $last_page .'</a>';
                } else {
                    if ($page > $i && $left_ellipsis == 0) {
                        $page_template .= '<span>...</span>';
                        $left_ellipsis ++;
                    }
                    if ($i > $page && $right_ellipsis == 0) {
                        $page_template .= '<span>...</span>';
                        $right_ellipsis ++;
                    }
                }
            }
        }
        return $page_template;
    }
