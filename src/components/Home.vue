<template>
    <div class="home">
		<div class="main">
			<div class="inner">
				<h1>
					We have normality. I repeat, we have normality.
				</h1>
				<h2>
					My name is Jo du Plessis.
					I am a full-stack developer & DevOps enthusiast, currently residing in <a href="https://goo.gl/maps/ggcR426AfzC77naj6" target="_blank" class="highlight">South Africa</a>.
					During the day I work as the lead dev / tech lead at <a href="https://yreeka.com" target="_blank" class="highlight">Yreeka</a>. <br/>
					During the night <a href="https://github.com/joduplessis" target="_blank">I build things</a>.
				</h2>
			</div>
		</div>
		<div class="footer">
			<a href="https://weekday.sh" target="_blank" class="link underline">Weekday</a>
			<router-link :to="{ name: 'Work'}" class="link"><span>Work Archives</span></router-link>
			<a href="mailto:hello@joduplessis.com" target="_blank" class="link"><span>hello@joduplessis.com</span></a>
			<div class="social">
				<a href="https://github.com/joduplessis" target="_blank" class="link social-icon"><img src="../assets/github.png" /></a>
				<a href="https://www.linkedin.com/in/jo-du-plessis-a03b0110/" target="_blank" class="link social-icon"><img src="../assets/linkedin-logo.png" /></a>
			</div>
		</div>
    </div>
</template>

<script>
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
			background: #FAFAFA;
			flex-grow: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			align-content: center;
			justify-content: center;
			margin: 100px 100px 120px 100px;
		}

		.main .inner  h1 {
			margin: 0px;
			font-family: 'hk_grotesksemibold', sans-serif;
			padding: 0px 100px 0px 100px;
			font-size: 85px;
			line-height: 90px;
			color: #343A40;
		}

		.main .inner  h2 {
			margin: 30px 0px 0px 0px;
			font-family: 'hk_grotesklight', sans-serif;
			padding: 0px 100px 0px 100px;
			font-size: 30px;
			line-height: 50px;
			color: #343A40;
		}

	.highlight {
		box-shadow: inset 0px -12px 0 #FCDD35, inset 0 -35px 0 #FAFAFA;
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
		font-family: 'hk_groteskbold', sans-serif;
		text-decoration: none;
		font-size: 18px;
		margin-left: 30px;
		margin-bottom: 50px;
		color: black;
		transition: opacity 0.5s;
		opacity: 1;
	}

		.footer .link.underline {
			box-shadow: inset 0px -8px 0 #FCDD35, inset 0 -15px 0 white;
			text-decoration: none;
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
			box-shadow: inset 0px -6px 0 #FCDD35, inset 0 -35px 0 #FAFAFA;
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
