<?php
  require_once 'utility.php';
  !empty($_SESSION['username']) ? $username = $_SESSION['username'] : $username = null;
  // 如果 session 抓的到 username 代表有登入，就可以讓 username = session 的 username
  // 如果抓不到，那 username 就是 NULL ，避免出現：Notice: Undefined index: username
  $page = 1;
  if (!empty($_GET['page'])) {
    $page = $_GET['page'];
  }
  $limit = 5;
  $offset = ($page - 1) * $limit;
  $website = 'index';
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>留言板</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <header class="warning">
    <strong>注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。</strong>
  </header>
  <main class="board">
    <div>
      <?php if ($username) {?> 
        <!-- 如果有 username（有登入），給他登出按鈕和歡迎詞 -->
        <a class="btn" href="handle_logout.php">登出</a>
        <span class="update_nickname_button">更改暱稱</span>
        <h3>歡迎您回來！！<?php echo htmlspecialchars($username) ?> 大人</h3>
        <?php } else {?>
        <!-- 沒有的話給他註冊、登入二選一 -->
        <a class="btn" href="register.php">註冊</a>
        <a class="btn" href="login.php">登入</a>
        <a class="btn" href="backend_login.php">後台</a>
      <?php }?>
      <div class="anchor hide">
          <form action="handle_update_nickname.php" method="POST">
            更改暱稱：<input type="text" name="nickname"> <input class="btn" type="submit">
          </form>
      </div>
    </div>
    <?php
      !empty($_POST['message']) ? $message = $_POST['message'] : $message = null;
      echo '<div class="err">'. $message .'</div>';
    ?>
    <h1 class="board__title">Comments</h1>
    <form class="board__new-comment-form" method="POST" action="handle_add_comment.php">
      <textarea name="content" rows="5" autofocus></textarea>
      <?php if ($username) {?>
        <!-- 如果有登入，給他送出按鈕 -->
        <input class="board__submit-btn" type="submit" />
        <?php } else {?>
        <h3 class="err">登入後才能發布留言喔</h3> <!-- 如果沒有登入，跟他說要登入喔 -->
      <?php }?>
    </form>
    <div class="board__hr"></div>
    <section>
      <?php
        $sql = "select C.id, C.content, C.create_at, U.nickname, U.username from a_u_z_comments as C left join ".
        "a_u_z_users as U on C.username = U.username where C.is_deleted is NULL order by C.id DESC limit ? offset ?";
        $search_comments = $connect -> prepare($sql);
        $search_comments -> bind_param('ii', $limit, $offset);
        $search_comments_result = $search_comments -> execute();
        $search_comments_result = $search_comments -> get_result();
        while ($row = $search_comments_result->fetch_assoc()) {
      ?>
      <div class="card">
        <div class="card__avatar"></div>
        <div class="card__body">
          <div class="card__info">
            <span class="card__author">
              <?php echo htmlspecialchars($row['nickname']);?>
              (<?php echo htmlspecialchars($row['username']);?>)
            </span>
            <span class="card__time"><?php echo htmlspecialchars($row['create_at']); ?></span>
            <?php if ($username == $row['username']) { ?>
              <a class="a__btn" href="update_comment.php?id=<?php echo htmlspecialchars($row['id'])?>">編輯</a>
              <a class="a__btn" href="handle_delete_comment.php?id=<?php echo htmlspecialchars($row['id'])?>">刪除</a>
            <?php } ?>
          </div>
          <p class="card__content"><?php echo htmlspecialchars($row['content']); ?></p>
        </div>
      </div>
      <?php }?>
    </section>
    <div class="nav__page">
      <?php 
        $sql = "select count(id) as count from a_u_z_comments where is_deleted is NUll";
        $last_page = last_page($limit, $sql);
        print_r(nav_page($page, $last_page, $website));
      ?>
    </div>
    <script>
      document.querySelector(".update_nickname_button").addEventListener('click', function(e) {
        document.querySelector(".anchor").classList.toggle("hide")
      })
    </script>
  </main>
</body>
</html>