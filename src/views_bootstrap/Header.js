import React from "react";

function Header() {
	return (
		<header id="header" className="header-tops">
			<div className="container">

				<h1><a href="index.html">P.K Balakrishnan</a></h1>

				<h2>Critic. Historian. <span>Novalist</span>. Journalist</h2>

				<nav className="nav-menu d-none d-lg-block">
					<ul>
						<li className="active"><a href="#header">Home</a></li>
						<li><a href="#about">About</a></li>
						<li><a href="#portfolio">Books</a></li>
						<li><a href="#resume">Gallery</a></li>
					</ul>
				</nav>

				<div className="social-links">
					<a href="#" className="twitter"><i className="icofont-twitter"></i></a>
					<a href="#" className="facebook"><i className="icofont-facebook"></i></a>
					<a href="#" className="instagram"><i className="icofont-instagram"></i></a>
				</div>

			</div>
		</header>
	);
}
export default Header;