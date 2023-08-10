<template>
    <div class="home">
  		<div class="main">
  			<div class="inner">
  				<img src="../assets/avatar.png" class="avatar" />
					<div class="links">
						<a href="https://github.com/joduplessis" target="_blank">GitHub</a>
						<a href="https://www.linkedin.com/in/jo-duplessis/" target="_blank">LinkedIn</a>
						<router-link :to="{ name: 'Work'}">Archives</router-link>
						<!-- <a href="https://twitter.com/jo_duplessis" target="_blank">Twitter</a> -->
						<!--

						<a href="https://fold.dev" target="_blank">
							Fold
							<span>Current</span>
						</a>
						<a href="https://pdfasaurus.com" target="_blank">PDFasaurus</a>
						<a href="https://www.npmjs.com/~joduplessis" target="_blank">npm</a>
						<a href="mailto:hello@joduplessis.com" target="_blank">say hello</a>
						<a href="mailto:jo@joduplessis.com" target="_blank"><img src="../assets/icons/at-fill.svg" /></a>
						<a href="tel:+491748706065" target="_blank"><img src="../assets/icons/phone-fill.svg" /></a>
						<a href="https://github.com/joduplessis" target="_blank"><img src="../assets/icons/github-fill.svg" /></a>
						<a href="https://www.npmjs.com/~joduplessis" target="_blank"><img src="../assets/icons/npmjs-fill.svg" /></a>
						<a href="https://www.linkedin.com/in/jo-duplessis/" target="_blank"><img src="../assets/icons/linkedin-box-fill.svg" /></a>
						<a href="https://twitter.com/jo_duplessis" target="_blank"><img src="../assets/icons/twitter-fill.svg" /></a>
						-->
  				</div>
  				<h2>
						Design systems geek. Product guy. Building <a href="https://fold.dev" target="_blank">Fold</a>.
  				</h2>
				<h3>
					Need to reach me? Send me an <a href="mailto:hello@joduplessis.com" target="_blank" class="highlight">e-mail</a>.
				</h3>
  			</div>
  		</div>
    </div>
</template>

<script>
	// console.log('%c Hi! 👋🏻 You can check out my CV over here 👉🏻 https://joduplessis.com/cv', 'font-size: 20px; background: #222; color: #FF5A5A');
	// console.log('%c CV → https://joduplessis.com/cv', 'background: #222; color: #FF5A5A');
	// console.log('%c Work → https://joduplessis.com/work', 'background: #222; color: #FF5A5A')
	console.log('%c Hi! 👋🏻', 'background: #222; color: #FF5A5A');
	console.log('%c Email → hello@joduplessis.com', 'background: #222; color: #FF5A5A');


	export default {
		name: 'home',
	}
</script>

<style scoped="">
	.home {
		height: 100%;
		width: 100%;
		padding: 0px;
		margin: 0px;
	}

	.main {
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0px;
		top: 0px;
		z-index: 1;
		flex-direction: row;
		align-items: stretch;
		align-content: stretch;
		justify-content: center;
		display: flex;
		background-color: #FF5A5A;
	}

		.main .inner {
			flex: 1;
			/* background: #272C36 url('../assets/wallpaper.png'); */
		  background-size: auto 1000px;
			flex-grow: 1;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			align-content: center;
			justify-content: center;
			margin: 100px 100px 120px 100px;
			position: relative;
		}

		.main .inner .avatar {
			width: 60px;
			height: 60px;
			border-radius: 50%;
			position: absolute;
			top: 0px;
			left: 0px;
		}

		.main .inner .links {
			height: 60px;
			display: flex;
			flex-direction: row;
			align-items: center;
			align-content: center;
			justify-content: flex-end;
			width: fit-content;
			box-sizing: border-box;
			position: absolute;
			top: 0px;
			right: 0px;
		}

			.main .inner .links img {
				height: 25px;
				padding: 15px;
				padding-bottom: 0px;
				width: auto;
			}

			.main .inner .links	a {
				opacity: 1;
				transition: 0.2s opacity;
				color: #1B2B3A;
				text-decoration: none;
				font-weight: 600;
				font-size: 18px;
				margin-left: 30px;
			}

				.main .inner .links	a span {
					background-color: #1B2B3A;
					color: #FF5A5A;
					font-size: 10px;
					font-weight: 700;
					text-transform: uppercase;
					border-radius: 5px;
					padding: 5px;
					position: relative;
					top: -2px;
				}

				.main .inner .links a:hover {
					opacity: 0.75;
				}

				.main .inner .links img:hover {
					opacity: 0.9;
				}

		.main .inner h2 {
			margin: 0px;
			margin-top: 50px;
			margin-bottom: 50px;
			font-weight: 500;
			padding: 0px;
			font-size: 60px;
			line-height: 75px;
			letter-spacing: -1px;
			color: #1B2B3A;
		}

		.main .inner h2 a {
			/* text-decoration: none; */
			background: transparent;
			color: #1B2B3A;
		}

		.main .inner h2 a:hover {
			/* text-decoration: underline; */
			opacity: 0.8;
		}

		.main .inner h3, .main .inner h3 a {
			margin: 0px;
			font-weight: 500;
			font-size: 30px;
			color: #1B2B3A;
			font-family: 'Playfair Display', serif;
		}

	.highlight {
		color: #1B2B3A;
		font-weight: 700;
		text-decoration: none;
		text-decoration: underline;
	}

		.highlight:hover {
			opacity: 0.9;
		}

	@media only screen and (max-device-height : 700px) {
		.main .inner {
			margin: 5px;
		}

    .main .inner img {
			width: 100px;
			height: 100px;
			margin-bottom: 0px;
		}

		.main .inner  h2 {
			font-size: 30px;
			line-height: normal;
			padding: 0px 20px 20px 20px;
			margin-top: 150px;
		}

		.main .inner h3 {
			padding: 0px 20px 20px 20px;
		}

		.main .inner h3, .main .inner h3 a {
			font-size: 20px;
			line-height: normal;
		}

		.main .inner .links {
			padding: 0px;
			top: 0px;
			position: absolute;
			font-size: 20px;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-end;
			align-content: flex-start;
		}

		.main .inner .links a {
			font-size: 15px;
			padding: 0px;
			margin: 0px;
		}

		.main .inner .links a span {
			display: none;
		}
  }

	@media (min-width: 1024px) {
	}

	@media (max-width: 1024px) {
	}

	@media (max-width: 480px) {
		.highlight {
			text-decoration: none;
		}

		.main .inner  h2 {
			font-size: 30px;
			line-height: normal;
			padding: 0px 20px 20px 20px;
			margin-top: 150px;
		}

		.main .inner h3 {
			padding: 0px 20px 20px 20px;
		}

		.main .inner h3, .main .inner h3 a {
			font-size: 20px;
			line-height: normal;
		}

		.main .inner {
			margin: 20px 20px 170px 20px;
		}

		.main .inner .links {
			padding: 0px;
			top: 0px;
			position: absolute;
			font-size: 20px;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-end;
			align-content: flex-start;
		}

		.main .inner .links a {
			font-size: 15px;
			padding: 0px;
			margin: 0px;
		}

		.main .inner .links a span {
			display: none;
		}

	}
</style>
