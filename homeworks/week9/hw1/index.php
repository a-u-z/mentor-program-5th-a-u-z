<?php
  require_once 'utility.php';
  !empty($_SESSION['username']) ? $username = $_SESSION['username'] : $username = null;
  // 如果 session 抓的到 username 代表有登入，就可以讓 username = session 的 username
  // 如果抓不到，那 username 就是 NULL ，避免出現：Notice: Undefined index: username
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
        <h3>歡迎您回來！！<?php echo htmlspecialchars($username) ?> 大人</h3>
        <?php } else {?>
        <!-- 沒有的話給他註冊、登入二選一 -->
        <a class="btn" href="register.php">註冊</a>
        <a class="btn" href="login.php">登入</a>
      <?php }?>
    </div>
    <?php
      !empty($_GET['errCode']) ? $errCode = $_GET['errCode'] : $errCode = null;
      // 如果 get 抓的到 errCode 代表有錯誤碼，就可以讓 errCode = get 的 errCode
      // 如果抓不到，那 errCode 就是 NULL ，避免出現：Notice: Undefined index: errCode
      if ($errCode === '3') {
          echo '<div class="err">請輸入留言後再次送出</div>';
      }
    ?>
    <h1 class="board__title">Comments</h1>
    <form class="board__new-comment-form" method="POST" action="handle_add_comment.php">
      <textarea name="content" rows="5"></textarea>
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
        $searchComments = "select * from a_u_z_comments order by id DESC";
        $searchCommentsResult = $connect->query($searchComments);
        while ($row = $searchCommentsResult->fetch_assoc()) {
      ?>
      <div class="card">
        <div class="card__avatar"></div>
        <div class="card__body">
          <div class="card__info">
            <span class="card__author"><?php echo htmlspecialchars($row['nickname']); ?></span>
            <span class="card__time"><?php echo htmlspecialchars($row['create_at']); ?></span>
          </div>
          <p class="card__content"><?php echo htmlspecialchars($row['content']); ?></p>
        </div>
      </div>
      <?php }?>
    </section>
  </main>
</body>

</html>