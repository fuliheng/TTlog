<?php
/**
 *  @file       index.php
 *  @brief      The Entry module of the ULog.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       04/15/2018 created.
 *  @date       04/22/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Entry module of the ULog.
 */

use ULog\App\App;

// 載入 autoloader
include __DIR__ . '/vendor/autoload.php';

$app = new App(__DIR__ . '/config/config.json');

if (php_sapi_name() === 'cli-server') {
    if (preg_match(
        '/\.(?:html|ico|js|map|css|png|jpg|jpeg|gif|ttf|woff|woff2)$/',
        $_SERVER['REQUEST_URI']
    )) {
        return false; // 傳回 *靜態* (static) 檔案
    }
    else {
        $app->route();
    }
}

// index.php
?>
