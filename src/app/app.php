<?php
/**
 *  @file       app.php
 *  @brief      The App module of the App subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       04/22/2018 created.
 *  @date       04/23/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The App module of the App subsystem.
 */

namespace ULog\App;

use ULog\Router\Router;

class App
{
    private $router;

    public function __construct($config)
    {
        $setting = json_decode(file_get_contents($config), true);

        $this->router = new Router($setting['route']);
    }

    public function route()
    {
        $controller = $this->router->route(
            $_SERVER['REQUEST_METHOD'],
            $_SERVER['REQUEST_URI']
        );

        return (new $controller())->action();
    }

    public function info()
    {
        echo phpinfo();
    }
}

// app.php
?>
