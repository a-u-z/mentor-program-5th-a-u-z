<?php
  require_once('utility.php');
  !empty($_GET['page']) ? $page = $_GET['page'] : $page = $page = 1;
  $limit = 5;
  $offset = ($page - 1) * $limit;
  $sql = "select * from a_u_z_article where is_deleted is NULL order by id desc limit ? offset ?";
  $select_article = $connect -> prepare($sql);
  $select_article -> bind_param('ss', $limit, $offset);
  $select_article_result=$select_article->execute();
  $select_article_result=$select_article->get_result();
  !empty($_SESSION['author']) ? $author = $_SESSION['author'] : $author = NULL ;
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
          <li><a href="admin.php">管理後台</a></li>
          <?php if ($author) { ?>
            <li><a href="handle_logout.php">登出</a></li>
          <?php } else { ?>
            <li><a href="login.php">登入</a></li>
          <?php }?>
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
    <div class="posts">
      <?php while($row=$select_article_result->fetch_assoc()){?>
        <article class="post">
          <div class="post__header">
            <div><?php echo $row['title'] ?></div>
          </div>
          <div class="post__info"><?php echo $row['create_at'] ?></div>
          <?php 
            if(mb_strwidth($row['content'], 'utf8') > 200){ 
            // 此處設定從0開始擷取,取10個追加...,使用utf8編碼
            // 注意追加的...也會被計算到長度之內
            $row['content'] = mb_strimwidth($row['content'], 0, 200, '......', 'utf8'); 
          ?>  
          <div class="post__content"><?php echo $row['content'] ?> </div>
          <a class="btn-read-more" href="index.php?id=<?php echo $row['id'] ?>">READ MORE</a>
          <?php } else { ?>
            <div class="post__content"><?php echo $row['content'] ?> </div>
            <?php } ?>
        </article>
      <?php } ?>
    </div>
  </div>
  <div  class="nav__page">
    <?php 
      $websit = 'blog';
      $sql = "select count(id) as count from a_u_z_article where is_deleted is NULL";
      $last_page = last_page($limit, $sql);
      print_r(nav_page($page, $last_page, $websit));
    ?>
  </div>
  <footer>Copyright © 2020 Who's Blog All Rights Reserved.</footer>
</body>
</html>