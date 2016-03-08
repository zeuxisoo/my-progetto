<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex, nofollow">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{{ config['title'] }}</title>
<link href="/static/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
<link href="/static/vendor/fancybox/jquery.fancybox.css?v=2.1.5" rel="stylesheet">
<link href="/static/client/css/default.css" rel="stylesheet">
<script type="text/javascript" src="/static/vendor/jquery/jquery.min.js"></script>
<script type="text/javascript" src="/static/vendor/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/static/vendor/fancybox/jquery.fancybox.pack.js?v=2.1.5"></script>
<script type="text/javascript" src="/static/client/js/default.js"></script>
</head>
<div class="navbar navbar-default navbar-fixed-top" role="banner">
    <div class="container">
        <div class="navbar-header">
            <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a href="/" class="navbar-brand">{{ config['title'] }}</a>
        </div>
        <div class="collapse navbar-collapse bs-navbar-collapse" role="navigation">
            <ul class="nav navbar-nav">
                <li><a href="/">Home</a></li>
                <li><a href="{{ config['site_url'] }}">Blog</a></li>
                <li><a href="{{ config['labs_url'] }}">Labs</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Ohters <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        % for other in config['others']:
                            % for name in other.keys():
                                <li><a href="{{ other[name] }}">{{ name }}</a></li>
                            % end
                        % end
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>
