<?php
    require_once 'utility.php';
    header('Content-type:application/json;charset=utf-8'); // 告訴瀏覽器要用 json 格式
    header('Access-Control-Allow-Origin: *');
    if (empty($_GET['secret_code'])) {
        $json = array(
            'ok' => false,
            'message' => 'Please check secret_code'
        );
        $response = json_encode($json);
        echo $response;
        die();
    }
    $secret_code = $_GET['secret_code'];
    $limit = $_GET['limit'];
    $offset = $_GET['offset'];
    $sql = "select * from a_u_z_comments_v2 where secret_code = ? order by id DESC limit ? offset ?";
    $select_comment = $connect -> prepare($sql);
    $select_comment -> bind_param('sii', $secret_code, $limit, $offset);
    $select_comment_result = $select_comment -> execute();

    if (empty($select_comment_result)) {
        $json = array(
            'ok' => false,
            'message' => 'select fail'
        );
        $response = json_encode($json);
        echo $response;
        die();
    }
    $select_comment_result = $select_comment -> get_result();
    $comment_v2 = array();
    while($row = $select_comment_result -> fetch_assoc()) {
        array_push($comment_v2, array(
            'nickname' => $row['nickname'],
            'content' => $row['content'],
            'create_at' => $row['create_at']
        ));
    }

    $json = array(
        'ok' => true,
        'comment' => $comment_v2
    );

    $response = json_encode($json);
    echo $response;
    die();
?>