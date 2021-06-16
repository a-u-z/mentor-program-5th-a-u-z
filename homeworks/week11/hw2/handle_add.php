<?php
    require_once('utility.php');
    if (empty($_POST['title']) || empty($_POST['content']) || empty($_SESSION['author'])) {
        header('Location:add.php?errCode=5');
        exit();
    }
    $title = $_POST['title'];
    $content = $_POST['content'];
    $author = $_SESSION['author'];

    $sql = "insert into a_u_z_article(title, content, author) values(?, ?, ?)";
    $stmt = $connect -> prepare($sql);
    $stmt -> bind_param('sss', $title, $content, $author);
    $result = $stmt -> execute();
    if (!$result) {
        die('新增失敗');
    }    
    header('Location:admin.php?errCode=6');
?>