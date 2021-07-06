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
      !empty($_POST['message']) ? $message = $_POST['message'] : $message = null;
      echo '<div class="err">'. $message .'</div>';
    ?>
    <form class="board__new-comment-form" method="POST" action="handle_register.php">
      <div class="board__nickname">
        <span>暱稱：</span>
        <input type="text" name="nickname" autofocus/>
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