<?php
    require_once 'utility.php';
    header('Content-type:application/json;charset=utf-8'); // 告訴瀏覽器要用 json 格式
    header('Access-Control-Allow-Origin: *');
    if (empty($_GET['id'])) {
        $json = array(
            'ok' => false,
            'message' => 'Please check id in URL'
        );
        $response = json_encode($json);
        echo $response;
        die();
    }
    $id = intval($_GET['id']);
    $sql = "select id, todos from a_u_z_allTodoList where id = ?";
    $select_todos = $connect -> prepare($sql);
    $select_todos -> bind_param('i', $id);
    $select_todos_result = $select_todos -> execute();

    if (empty($select_todos_result)) {
        $json = array(
            'ok' => false,
            'message' => 'select fail'
        );
        $response = json_encode($json);
        echo $response;
        die();
    }
    $select_todos_result = $select_todos -> get_result();
    $row = $select_todos_result -> fetch_assoc();

    $json = array(
        'ok' => true,
        'data' =>  array(
            'id' => $row['id'],
            'todo' => $row['todos']
        )
    );

    $response = json_encode($json);
    echo $response;
?>