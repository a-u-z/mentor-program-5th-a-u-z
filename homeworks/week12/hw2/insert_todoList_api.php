<?php
    require_once 'utility.php'; // 引入資料庫的帳密
    header('Content-type:application/json;charset=utf-8'); // 告訴瀏覽器要用 json 格式
    header('Access-Control-Allow-Origin: *');
    if (empty($_POST['todoList'])) {
        $json = array( // 如果有任何一個資料沒有輸入，排除錯誤
            'ok' => false, // 設定這一欄叫做 ok 他的值可以判斷是否 ok
            'message' => 'Please insert all data' // 跟要傳達的訊息
        );
        $response = json_encode($json);
        echo $response;
        die();
    }
    $todos = $_POST['todoList']; // 把 post 的資料用變數拿出來


    $sql = "insert into a_u_z_allTodoList(todos) values(?)"; // mySQL 插入資料語法
    $insert_todos = $connect -> prepare($sql); 
    $insert_todos -> bind_param('s', $todos);
    $insert_todos_result = $insert_todos -> execute();

    if (empty($insert_todos_result)) {
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
        'message' => 'insert success',
        'id' => $connect -> insert_id
    );
    $response = json_encode($json);
        echo $response;
        die();
?>