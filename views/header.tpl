<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<title>{{ config['title'] }} Profile</title>
<meta name="robots" content="noindex,nofollow" />
<link rel="shortcut icon" href="/favicon.ico">
<link  rel="stylesheet" type="text/css" href="/static/stylesheet/reset.css" />
<link  rel="stylesheet" type="text/css" href="/static/stylesheet/jquery.fancybox.css" />
<link  rel="stylesheet" type="text/css" href="/static/stylesheet/default.css" />
<script language="javascript" type="text/javascript" src="/static/javascript/jquery.js"></script>
<script language="javascript" type="text/javascript" src="/static/javascript/jquery.fancybox.js"></script>
<script language="javascript" type="text/javascript" src="/static/javascript/default.js"></script>
</head>
<body>
<div class="navigation">
	<h1 class="title">Profile</h1>
	<div class="menu">
		<ul>
			<li class="head"><a href='/'>Home</a></li>
			<li><a href="{{ config['site_url'] }}" target="_blank">Blog</a></li>
			<li>
				My Projects
				<ul class="sub">
					% for project in config['projects']:
						% for name in project.keys():
							<li><a href="{{ project[name] }}" target="_blank">{{ name }}</a></li>
						% end
					% end
				</ul>
			</li>
			<li>
				Contact Me
				<div class="sub grep"><img src="{{ config['contact_image'] }}" alt="contact" /></div>
			</li>
			<li>
				Powered By
				<div class="sub grep">Python and Bottle</div>
			</li>
		</ul>
	</div>
</div>
<div id="wrapper">
	<div class="content">
		<h1 class="title">{{ config['title'] }}</h1>
