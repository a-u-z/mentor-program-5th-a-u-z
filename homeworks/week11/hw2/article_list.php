<?php
  require_once('utility.php');
  $sql="select * from a_u_z_article where is_deleted is NULL order by id desc";
  $select_article = $connect -> prepare($sql);
  $select_article_result=$select_article->execute();
  $select_article_result=$select_article->get_result();
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