<?php
    require_once 'utility.php'; // 引入資料庫的帳密
    header('Content-type:application/json;charset=utf-8'); // 告訴瀏覽器要用 json 格式
    header('Access-Control-Allow-Origin: *');
    if (empty($_POST['nickname']) || empty($_POST['content']) || empty($_POST['secret_code'])) {
        $json = array( // 如果有任何一個資料沒有輸入，排除錯誤
            'ok' => false, // 設定這一欄叫做 ok 他的值可以判斷是否 ok
            'message' => 'Please insert all data' // 跟要傳達的訊息
        );
        $response = json_encode($json);
        echo $response;
        die();
    }
    $nickname = $_POST['nickname']; // 把 post 的資料用變數拿出來
    $content = $_POST['content'];
    $secret_code = $_POST['secret_code'];

    $sql = "insert into a_u_z_comments_v2(nickname, content, secret_code) values(?, ?, ?)"; // mySQL 插入資料語法
    $insert_comment = $connect -> prepare($sql); 
    $insert_comment -> bind_param('sss', $nickname, $content, $secret_code);
    $insert_comment_result = $insert_comment -> execute();

    if (empty($insert_comment_result)) {
        $json = array( // 如果沒有新增成功，排除錯誤
            'ok' => false, // 設定這一欄叫做 ok 他的值可以判斷是否 ok
            'message' => 'insert fail' // 跟要傳達的訊息
        );
        $response = json_encode($json);
        echo $response;
        die();
    }

    $json = array( 
        'ok' => true,
        'message' => 'insert success'
    );
    $response = json_encode($json);
        echo $response;
        die();
?>