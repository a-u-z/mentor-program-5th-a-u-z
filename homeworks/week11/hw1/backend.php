<?php
  require_once 'utility.php';
  !empty($_SESSION['username']) ? $username = $_SESSION['username'] : $username = null;
  // 如果 session 抓的到 username 代表有登入，就可以讓 username = session 的 username
  // 如果抓不到，那 username 就是 NULL ，避免出現：Notice: Undefined index: username
  !empty($_GET['errCode']) ? $errCode = $_GET['errCode'] : $errCode = null;
  // 如果 get 抓的到 errCode 代表有錯誤碼，就可以讓 errCode = get 的 errCode
  // 如果抓不到，那 errCode 就是 NULL ，避免出現：Notice: Undefined index: errCode
  $page = 1;
  if (!empty($_GET['page'])) {
    $page = $_GET['page'];
  }
  $limit = 5;
  $offset = ($page - 1) * $limit;
  $website = 'backend';
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
      <?php if ($username || $errCode) {?> 
        <!-- 如果有 username（有登入），給他登出按鈕和歡迎詞 -->
        <a class="btn" href="handle_logout.php">登出</a>
        <span class="update_nickname_button">更改暱稱</span>
        <h3>歡迎您回來！！<?php echo htmlspecialchars($username) ?> 管理者大人</h3>
        <?php } ?>
      <div class="anchor hide">
          <form action="handle_update_nickname.php" method="POST">
            更改暱稱：<input type="text" name="nickname"> <input class="btn" type="submit">
          </form>
      </div>
    </div>
    <?php
      !empty($_POST['message']) ? $message = $_POST['message'] : $message = null;
      echo'<div class="err">'. $message .'</div>';
    ?>
    <h1 class="board__title">管理者頁面</h1>
    <p>權限值：管理者 > 一般使用者 > 遭停權使用者</p>
    <div class="board__hr"></div>
    <section>
      <?php
        $sql = "select * from a_u_z_users order by id DESC limit ? offset ?";
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
          </div>
          <?php if ($row['role'] ==='2') {?>
            <p class="card__content">權限：管理者</p>
            <a class="access" href="handel_access.php?action=normal&username=<?php echo htmlspecialchars($row['username'])?>">設為一般用戶</a>
            <a class="access" href="handel_access.php?action=suspended&username=<?php echo htmlspecialchars($row['username'])?>">設為停權者</a>
          <?php }?>
          <?php if ($row['role'] ==='1') {?>
            <p class="card__content">權限：一般使用者</p><a class="access" href="handel_access.php?action=admin&username=<?php echo htmlspecialchars($row['username'])?>">設為管理者</a>
            <a class="access" href="handel_access.php?action=suspended&username=<?php echo htmlspecialchars($row['username'])?>">設為停權者</a>
          <?php }?>
          <?php if ($row['role'] ==='0') {?>
            <p class="card__content">權限：遭停權管理者</p><a class="access" href="handel_access.php?action=normal&username=<?php echo htmlspecialchars($row['username'])?>">設為一般用戶</a>
          <?php }?>
        </div>
      </div>
      <?php }?>
    </section>
    <div class="nav__page">
      <?php 
        $sql = "select count(id) as count from a_u_z_users";
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