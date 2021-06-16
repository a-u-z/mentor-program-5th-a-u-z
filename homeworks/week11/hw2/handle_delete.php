<?php
    require_once('utility.php');
    $id = htmlspecialchars($_GET['id']);
    $author = $_SESSION['author'];
    if ($id && $author) {
        $sql = "update a_u_z_article set is_deleted = 1 where id=?";
        $stmt = $connect->prepare($sql);
        $stmt -> bind_param('i',$id);
        $result = $stmt->execute();
    }
    if(!$result){
        die('刪除失敗');
    } else {
        header('Location:admin.php?errCode=4');
    }
    

?>