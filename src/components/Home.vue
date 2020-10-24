<template>
    <div class="home">
		<div class="main">
			<div class="inner">
				<img src="../assets/profile-photo.png" />

				<h1>
					Hello!
				</h1>
				<h2>
					 I am a full-stack developer & occasional designer.</br>
					Currently lead developer @ <a href="https://yreeka.com" target="_blank" class="highlight">Yreeka</a>, working on <a href="https://teachfolk.com" target="_blank" class="highlight">Teachfolk</a>. </br>
					I also <a href="https://github.com/joduplessis" target="_blank" class="highlight">build things</a>.
				</h2>
			</div>
		</div>
		<div class="footer">
			<a href="mailto:hello@joduplessis.com" target="_blank" class="link"><span>hello@joduplessis.com</span></a>
			<router-link :to="{ name: 'Work'}" class="link underline"><span>Projects</span></router-link>
			<a href="https://yack.app" target="_blank" class="link"><span>Yack</span></a>
			<a href="https://weekdayapp.com" target="_blank" class="link"><span>Weekday</span></a>
			<a href="https://pdfasaurus.com" target="_blank" class="link"><span>PDFasaurus</span></a>

			<div class="social">
				<a href="https://www.npmjs.com/~joduplessis" target="_blank" class="link social-icon"><img src="../assets/npm.png" /></a>
				<a href="https://github.com/joduplessis" target="_blank" class="link social-icon"><img src="../assets/github.png" /></a>
				<a href="https://www.linkedin.com/in/jo-du-plessis-a03b0110/" target="_blank" class="link social-icon"><img src="../assets/linkedin-logo.png" /></a>
				<a href="https://twitter.com/jo_duplessis" target="_blank" class="link social-icon"><img src="../assets/twitter.png" /></a>
			</div>
		</div>
    </div>
</template>

<script>
	console.log('%c Hi! 👋🏻', 'background: #222; color: #bada55');
	console.log('%c Resume → https://joduplessis.com/resume', 'background: #222; color: #bada55');
	console.log('%c Projects JSON → https://joduplessis.com/work.json', 'background: #222; color: #bada55');
	console.log('%c Mobile → +49 174 870 6065', 'background: #222; color: #bada55');
	console.log('%c Email → hello@joduplessis.com', 'background: #222; color: #bada55');

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
			background: #272C36;
		  background-size: auto 1px;
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

		.main .inner  h1 {
			margin: 0px;
			padding: 0px 100px 0px 120px;
			font-size: 60px;
			line-height: 75px;
			font-weight: 900;
			text-align: center;
			box-sizing: border-box;
			width: 100%;
			color: white;
		}

		.main .inner  h2 {
			margin: 30px 0px 0px 0px;
			font-weight: 300;
			padding: 0px 100px 0px 120px;
			font-size: 20px;
			line-height: 38px;
			color: white;
			text-align: center;
			box-sizing: border-box;
			width: 100%;
		}

	.highlight {
		color: white;
		font-weight: 700;
		text-decoration: none;
	}

	.footer {
		z-index: 2;
		position: fixed;
		bottom: 0px;
		left: 0px;
		width: 100%;
		padding: 0px;
		display: flex;
		flex-direction: row;
		align-items: center;
		align-content: center;
		justify-content: flex-end;
	}

	.footer .social {
		display: flex;
		flex-direction: row;
		align-items: center;
		align-content: center;
		justify-content: flex-end;
		padding-left: 20px;
	}

	.footer .link {
		text-decoration: none;
		font-size: 14px;
		text-transform: uppercase;
		font-weight: 600;
		margin-left: 30px;
		margin-bottom: 50px;
		color: black;
		transition: opacity 0.5s;
		opacity: 1;
	}


		.footer .link.underline {
			box-shadow: inset 0px 18px 0 #272C36, inset 0 -20px 0 #272C36;
			color: white;
			padding-left: 3px;
			padding-right: 3px;
		}

	.footer .link:hover {
		opacity: 0.5;
	}

	.footer .social-icon img {
		height: 20px;
	}

	.footer .link:last-child {
		margin-right: 100px;
	}

	@media (min-width: 1024px) {
	}

	@media (max-width: 1024px) {
	}

	@media (max-width: 480px) {
		.main .inner  h1 {
			font-size: 2em;
			line-height: normal;
			padding: 20px 20px 0px 20px;
		}

		.highlight {
			text-decoration: none;
		}

		.main .inner  h2 {
			font-size: 1em;
			line-height: normal;
			padding: 0px 20px 20px 20px;
		}

		.main .inner {
			margin: 20px 20px 170px 20px;
		}

		.footer .link {
			margin-left: 20px;
			margin-bottom: 10px;
			font-size: 12px;
		}

		.footer {
			flex-direction: column;
			align-items: flex-start;
			align-content: flex-start;
			justify-content: flex-start;
		}

			.footer .link.underline {
				box-shadow: inset 0px -4px 0 #FCDD35, inset 0 -15px 0 white;
				text-decoration: none;
			}

		.footer .social {
			margin-bottom: 20px;
			padding-left: 0px;
		}

		.footer .link.social-icon {
			margin-left: 10px;
		}

		.footer .social-icon img {
			height: 15px;
		}

		.footer .link:first-child {
			margin-left: 20px;
		}

		.footer .link:last-child {
			margin-right: 0px;
		}
	}
</style>
