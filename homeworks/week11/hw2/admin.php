<?php
  require_once('utility.php');
  $sql="select * from a_u_z_article where is_deleted is NULL order by id desc";
  $select_article = $connect -> prepare($sql);
  $select_article_result=$select_article->execute();
  $select_article_result=$select_article->get_result();
  !empty($_SESSION['author']) ? $author = $_SESSION['author'] : $author = NULL ;
  !empty($_GET['errCode']) ? $errCode = $_GET['errCode'] : $errCode = NULL ;
  switch ($errCode) {
    case 2:
      alert('資料不齊全');
      break;
    case 3:
      alert('編輯成功');
      break;
    case 4:
      alert('刪除成功');
      break;
    case 5:
      alert('資料不齊全');
      break;
    case 6:
      alert('新增成功');
      break;
  }

  function alert($msg) {
    echo "<script type='text/javascript'>alert('$msg');</script>";
  }
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>部落格</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="normalize.css" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <nav class="navbar">
    <div class="wrapper navbar__wrapper">
      <div class="navbar__site-name">
        <a href='blog.php'>Who's Blog</a>
      </div>
      <ul class="navbar__list">
        <div>
          <li><a href="article_list.php">文章列表</a></li>
          <li><a href="#">分類專區</a></li>
          <li><a href="#">關於我</a></li>
        </div>
        <div>
          <li><a href="add.php">新增文章</a></li>
          <li><a href="handle_logout.php">登出</a></li>
        </div>
      </ul>
    </div>
  </nav>
  <section class="banner">
    <div class="banner__wrapper">
      <h1>存放技術之地</h1>
      <div>Welcome to my blog</div>
    </div>
  </section>
    <div class="container-wrapper">
      <div class="container">
        <?php while($row = $select_article_result -> fetch_assoc()){ ?>
          <div class="admin-posts">
            <div class="admin-post">
              <div class="admin-post__title"><?php echo $row['title'] ?></div>
              <div class="admin-post__info">
                <div class="admin-post__created-at"><?php echo $row['create_at'] ?></div>
                <a class="admin-post__btn" href="edit.php?id=<?php echo $row['id']?>">編輯</a>
                <a class="admin-post__btn" href="handle_delete.php?id=<?php echo $row['id']?>">刪除</a>
              </div>
            </div>
          </div>
        <?php } ?>  
      </div>
    </div>
    </div>
  <footer>Copyright © 2020 Who's Blog All Rights Reserved.</footer>
</body>
</html>