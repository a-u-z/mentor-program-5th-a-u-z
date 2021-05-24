<?php
  require_once 'utility.php';
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
    <div class="navbar">
      <a class="btn" href="index.php">回留言板</a>
      <a class="btn" href="login.php">登入</a>
    </div>
    <h1 class="board__title">註冊</h1>
    <?php
      !empty($_GET['errCode']) ? $errCode = $_GET['errCode'] : $errCode = null;
      // 如果 get 抓的到 errCode 代表有錯誤碼，就可以讓 errCode = get 的 errCode
      // 如果抓不到，那 errCode 就是 NULL ，避免出現：Notice: Undefined index: errCode
      switch ($errCode) {
        case '1':
          echo '<div class="err">資料不齊全，請再輸入一次</div>';
          break;
        case '1062':
          echo '<div class="err">帳號已存在，請換一個試試看</div>';
          break;
        case '5';
          echo '<div class="err">兩次密碼輸入不一致，請再輸入一次</div>';
          break;
        case '6';
          echo '<div class="err">密碼未輸入滿六碼，請加長長度</div>';
          break;
        case '7';
          echo '<div class="err">密碼只能由英文字母或是數字組成，請重新輸入</div>';
          break;
        case '8';
          echo '<div class="err">帳號只能由英文字母或是數字組成，請重新輸入</div>';
          break;
        case '9';
          echo '<div class="err">帳號未輸入滿六碼，請加長長度</div>';
          break;
      }
     
    ?>
    <form class="board__new-comment-form" method="POST" action="handle_register.php">
      <div class="board__nickname">
        <span>暱稱：</span>
        <input type="text" name="nickname" />
      </div>
      <div class="board__nickname">
        <span>帳號：</span>
        <input type="text" name="username" /><span class="hint">請輸入數字或英文字母至少六碼</span>
      </div>
      <div class="board__nickname">
        <span>密碼：</span>
        <input type="password" name="password" /><span class="hint">請輸入數字或英文字母至少六碼</span>
      </div>
      <div class="board__nickname">
        <span>重新輸入密碼：</span>
        <input type="password" name="password2" />
      </div>
      <input class="board__submit-btn" type="submit" />
    </form>
  </main>
</body>

</html>