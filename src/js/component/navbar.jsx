import React from "react";

function Navbar(props) {
	return (
		<nav class="navbar navbar-dark bg-dark">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">
					MEATbar
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div class="navbar-nav">
						<a class="nav-link active" aria-current="page" href="#">
							bringmeatHome
						</a>
						<a class="nav-link" href="#">
							SaucyFeatures
						</a>
						<a class="nav-link" href="#">
							MeatPricing
						</a>
						<a class="nav-link disabled">Disabled</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
export default Navbar;
