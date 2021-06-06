<?php
    require_once('utility.php');
    if(empty($_POST['title']) || empty($_POST['content']) || empty($_GET['id']) || empty($_SESSION['author'])) {
        header('Location:admin.php?errCode=2');
        exit();
    }
    $title = htmlspecialchars($_POST['title']);
    $content= htmlspecialchars($_POST['content']);
    $id = htmlspecialchars($_GET['id']);
    $sql = "update a_u_z_article set title=?,content=? where id=?";
    $stmt = $connect->prepare($sql);
    $stmt -> bind_param('ssi',$title,$content,$id);
    $result = $stmt->execute();
    if ($result) {
        header('Location:admin.php?errCode=3');
        exit();
    }
?>