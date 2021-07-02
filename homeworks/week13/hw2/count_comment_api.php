<?php
    require_once 'utility.php';
    header('Content-type:application/json;charset=utf-8'); // 告訴瀏覽器要用 json 格式
    header('Access-Control-Allow-Origin: *');

    $sql = "select count(id) as count from a_u_z_comments_v2";
    global $connect;
    $total_comment = $connect -> prepare($sql);
    $total_comment_result = $total_comment -> execute();
    $total_comment_result = $total_comment -> get_result();
    $total_comment_result = $total_comment_result -> fetch_assoc();


    $json = array(
        'ok' => true,
        'message' => 'fail',
        'count' => $total_comment_result['count']
    );
    $response = json_encode($json);
    echo $response;
    die();
?>