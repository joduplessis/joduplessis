<template>
    <div class="home">
  		<div class="main">
  			<div class="inner">
  				<img src="../assets/avatar.png" class="avatar" />

  				<div class="links">
							<a href="https://www.npmjs.com/~joduplessis" target="_blank">npm</a>
							<a href="https://github.com/joduplessis" target="_blank">github</a>
							<a href="https://twitter.com/jo_duplessis" target="_blank">twitter</a>
							<a href="https://www.linkedin.com/in/jo-duplessis/" target="_blank">linkedin</a>
							<a href="https://pdfasaurus.com" target="_blank">
								pdfasaurus
								<span>new</span>
							</a>
							<router-link :to="{ name: 'Work'}">work</router-link>
            	<!--
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
						Purveyor of code & pixels. Product geek. Coffee drinker. Cat parent. Shouty music lover.
  				</h2>

					<h3>
						You can reach me via <a href="mailto:hello@joduplessis.com" target="_blank" class="highlight">email</a>.
					</h3>
  			</div>
  		</div>
    </div>
</template>

<script>
	console.log('%c Hi! 👋🏻', 'background: #222; color: #bada55');
	console.log('%c Resume → https://joduplessis.com/resume', 'background: #222; color: #bada55');
	console.log('%c Projects → https://joduplessis.com/work', 'background: #222; color: #bada55');
	console.log('%c Projects JSON → https://joduplessis.com/work.json', 'background: #222; color: #bada55');
	console.log('%c Mobile → +49 174 870 6065', 'background: #222; color: #bada55');
	console.log('%c Email → jo@joduplessis.com', 'background: #222; color: #bada55');

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
			font-size: 70px;
			line-height: 75px;
			letter-spacing: -1px;
			color: #1B2B3A;
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
			margin: 30px;
		}

		.main .inner .links {
			padding: 0px;
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
			font-size: 0.75em;
			line-height: normal;
			padding: 0px 20px 20px 20px;
		}

		.main .inner {
			margin: 20px 20px 170px 20px;
		}

	}
</style>
