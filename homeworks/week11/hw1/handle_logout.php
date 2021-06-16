<?php
    require_once 'utility.php';
    session_destroy();
    header('Location:index.php');
