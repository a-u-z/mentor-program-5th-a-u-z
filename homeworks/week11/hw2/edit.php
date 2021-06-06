<?php
  require_once('utility.php');
  $author=$_SESSION['author'];
  $id=$_GET['id'];
  $sql="select * from a_u_z_article where id=?";
  $stmt=$connect->prepare($sql);
  $stmt->bind_param('s',$id);
  $result=$stmt->execute();
  $result=$stmt->get_result();
  $row=$result->fetch_assoc();
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>部落格</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="normalize.css"/>
  <link rel="stylesheet" href="style.css"/>
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
          <li><a href="admin.php">管理後台</a></li>
          <li><a href="logout.php">登出</a></li>
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
      <div class="edit-post">
        <form action="handle_edit.php?id=<?php echo $id ?>" method="POST">
          <div class="edit-post__title">
            發表文章：
          </div>
          <div class="edit-post__input-wrapper">
            <textarea name='title'class="edit-post__input"><?php echo $row['title'] ;?></textarea>
          </div>
          <div class="edit-post__input-wrapper">
            <textarea name='content'rows="20" class="edit-post__content"><?php echo $row['content'] ;?></textarea>
          </div>
          <div class="edit-post__btn-wrapper">
            <input class="edit-post__btn" type="submit" value='送出'>
          </div>
        </form>
      </div>
    </div>
  </div>
  <footer>Copyright © 2020 Who's Blog All Rights Reserved.</footer>
</body>
</html>