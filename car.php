<!DOCTYPE html>


<!--	HEAD	-->
<html lang="en">
<head>
	<meta charset="utf-8"/>
	<title>Nikolas Papenfus</title>
	<meta name="description" content="This is my portfolio and what I did during school."/>
	<meta name="keywords" content="nikolas,papenfus,school,szkola,zespol szkol, polkowice, informatyk"/>
	<meta name="author" content="Nikolas Papenfus"/>
	<link rel="stylesheet" href="css/style.css" type="text/css"/>


<!--	GOOGLE FONT	-->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;900&display=swap" rel="stylesheet">

<!--	JQuery		-->
<script src="js/jquery.js"></script>
<script src="js/stickynav.js"></script>

<!--	FONTELLO	-->
<link rel="stylesheet" href="css/fontello.css" type="text/css" />

</head>


<!--	BODY	-->
<body onload="count();">

<!--	HEADER	-->
<header>
			<h1 class="header">>.Hello World!</h1>
			<nav class="nav">
				<ol>
					<ul><a href="index.html">Main</a></ul>
					<ul><a href="slides.html">Slides</a></ul>
					<ul><a href="javas.html">Javas</a>
							<li><a href="#">Hi</a></li></ul>
					<ul><a href="car.php">Car</a></ul>
				</ol>
			</nav>
			<div class="nav2">
				
			</div>
</header>

<!--	Content	-->
<main>
<?php
	echo "Hi";
?>
</main>

<!--	FOOTER	-->
<footer id="footer">
		<figure id="footer_logo">
			<a href="https://npm0486.github.io" title="main side">
				<img src="img/logo_prototyp.png" height="200px"/>
			</a>
		</figure>
		<div id="footer_host">
			<h6>
				<a href="https://github.com/NPM0486/npm0486.github.io" target="_blank" title="source code"><i class="icon-github-circled icon"></i>I'm hosted with GitHub Pages.</a>
			</h6>
		</div>
		<div>
			<p id="copy">Nikolas papenfus &copy 2022</p>
			<p id="index"><a href="index.html">index</a></p>
		</div>
</footer>

</body>
</html>
