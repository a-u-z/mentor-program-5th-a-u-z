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
        <a href='index.php'>Who's Blog</a>
      </div>
      <ul class="navbar__list">
        <div>
          <li><a href="article_list.php">文章列表</a></li>
          <li><a href="">分類專區</a></li>
          <li><a href="">關於我</a></li>
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
  <div class="login-wrapper">
    <h2>Register</h2>
    <form action="handle_register.php" method="POST">
      <div class="input__wrapper">
        <div class="input__label">AUTHOR</div>
        <input class="input__field" type="text" name="author" />
      </div>
      <div class="input__wrapper">
        <div class="input__label">PASSWORD</div><span class="warning">由英文或是數字組成，至少六碼</span>
        <input class="input__field" type="password" name="password" />
      </div>
      <div class="input__wrapper">
        <div class="input__label">PASSWORD AGAIN</div><span class="warning">由英文或是數字組成，至少六碼</span>
        <input class="input__field" type="password" name="password2" />
      </div>
      <input type='submit' value="註冊" />
    </form>
     
  </div>
</body>
</html>