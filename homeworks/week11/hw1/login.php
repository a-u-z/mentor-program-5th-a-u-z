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
      <a class="btn" href="index.php">回留言板</a>
      <a class="btn" href="register.php">註冊</a>
    </div>
    <h1 class="board__title">登入</h1>
    <?php
      require_once 'utility.php';
      !empty($_GET['errCode']) ? $errCode = $_GET['errCode'] : $errCode = null;
      // 如果 get 抓的到 errCode 代表有錯誤碼，就可以讓 errCode = get 的 errCode
      // 如果抓不到，那 errCode 就是 NULL ，避免出現：Notice: Undefined index: errCode
      if ($errCode === '1') {
          echo '<div class="err">資料不齊全，請再輸入一次</div>';
      }
      if ($errCode === '2') {
          echo '<div class="err">帳號或是密碼錯誤，請再輸入一次</div>';
      }
      if ($errCode === '4') {
          echo '<div class="err">帳號已註冊成功，請登入</div>';
      }
    ?>
    <form class="board__new-comment-form" method="POST" action="handle_login.php">
      <div class="board__nickname">
        <span>帳號：</span>
        <input type="text" name="username" autofocus />
      </div>
      <div class="board__nickname">
        <span>密碼：</span>
        <input type="password" name="password" />
      </div>
      <input class="btn" type="submit" />
    </form>
  </main>
</body>

</html>