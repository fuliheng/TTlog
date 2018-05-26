<?php
/**
 *  @file       router.php
 *  @brief      The Router module of the Router subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       04/15/2018 created.
 *  @date       04/22/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Router module of the Router subsystem.
 */

namespace ULog\Router;

class Router
{
    private $routingTable;

    public function __construct($config)
    {
        $this->routingTable = $config;
    }

    public function route($method, $uri)
    {
        return $this->routingTable[$uri];
    }
}

// router.php
?>
