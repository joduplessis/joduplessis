<template>
    <div class="home">
  		<div class="main">
  			<div class="inner">
  				<img src="../assets/profile-photo.png" />

  				<h2>
  					Purveyor of code & pixels.</br>
  					Lead UI/UX engineer at <a href="https://adtriba.com" target="_blank" class="highlight">Adtriba</a>.</br>
						Maker of <a href="https://pdfasaurus.com" target="_blank" class="highlight">PDFasaurus</a>.
						<!--
  					<router-link :to="{ name: 'Work'}" class="highlight">Some</router-link> of the previous work I've been involved with.<br/>
            Maker of
      			<a href="https://yack.app" target="_blank" class="highlight"><span>Yack</span></a>,
      			<a href="https://deskbear.app" target="_blank" class="highlight"><span>Deskbear</span></a> &
      			<a href="https://pdfasaurus.com" target="_blank" class="highlight"><span>PDFasaurus</span></a>.
						-->
  				</h2>
  				<div class="icons">
            <a href="mailto:jo@joduplessis.com" target="_blank"><img src="../assets/icons/at-fill.svg" /></a>
						<!-- <a href="tel:+491748706065" target="_blank"><img src="../assets/icons/phone-fill.svg" /></a> -->
  					<a href="https://github.com/joduplessis" target="_blank"><img src="../assets/icons/github-fill.svg" /></a>
            <!-- <a href="https://www.npmjs.com/~joduplessis" target="_blank"><img src="../assets/icons/npmjs-fill.svg" /></a> -->
  					<a href="https://www.linkedin.com/in/jo-duplessis/" target="_blank"><img src="../assets/icons/linkedin-box-fill.svg" /></a>
  					<a href="https://twitter.com/jo_duplessis" target="_blank"><img src="../assets/icons/twitter-fill.svg" /></a>
  				</div>
  			</div>
  		</div>
    </div>
</template>

<script>
	console.log('%c Hi! 👋🏻', 'background: #222; color: #bada55');
	console.log('%c Resume → https://joduplessis.com/resume', 'background: #222; color: #bada55');
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
	}

		.main .inner {
			flex: 1;
			background: #272C36 url('../assets/wallpaper.png');
		  background-size: auto 1000px;
			flex-grow: 1;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			align-content: center;
			justify-content: center;
			margin: 100px 100px 120px 100px;
		}

		.main .inner img {
			width: 150px;
			height: 150px;
			border-radius: 50%;
			margin-right: auto;
			margin-left: auto;
			margin-bottom: 20px;
			-webkit-box-shadow: 0px 0px 71px 0px rgba(0,0,0,0.25);
			-moz-box-shadow: 0px 0px 71px 0px rgba(0,0,0,0.25);
			box-shadow: 0px 0px 71px 0px rgba(0,0,0,0.25);
		}

		.main .inner .icons {
			display: flex;
			flex-direction: row;
			align-items: center;
			align-content: center;
			justify-content: center;
			width: 100%;
			box-sizing: border-box;
			padding: 30px;
			padding-bottom: 0px;
			color: white;
		}

			.main .inner .icons img {
				height: 25px;
				padding: 15px;
				padding-bottom: 0px;
				width: auto;
			}

			.main .inner .icons	a {
				opacity: 1;
				transition: 0.2s opacity;
			}

				.main .inner .icons a:hover {
					opacity: 0.75;
				}

			.main .inner .icons a.yack img{
				height: 20px;
				position:relative;
				top: 1px;
			}

				.main .inner .icons img:hover {
					opacity: 0.9;
				}

		.main .inner  h2 {
			margin: 30px 0px 0px 0px;
			font-weight: 400;
			padding: 0px 100px 0px 120px;
			font-size: 18px;
			line-height: 34px;
			color: white;
			text-align: center;
			box-sizing: border-box;
			width: 100%;
			font-family: source-code-pro, sans-serif;
		}

	.highlight {
		color: white;
		font-weight: 700;
		text-decoration: none;
		font-family: source-code-pro, sans-serif;
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

		.main .inner .icons {
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
