<template>
    <div class="home">
		<div class="main">
			<div class="inner">
				<h1>
					We have normality, I repeat, we have normality.
				</h1>
				<h2>
					My name is Jo du Plessis. I am a full-stack developer, currently residing in the greater Durban area, South Africa.
					I currently serve as the tech lead at <a href="https://yreeka.com" target="_blank" class="highlight">Yreeka</a>.
				</h2>
			</div>
		</div>
		<div class="footer">
			<a href="https://yack.app" target="_blank" class="link underline">Yack</a>
			<a href="https://weekday.sh" target="_blank" class="link underline">Weekday</a>
			<router-link :to="{ name: 'Work'}" class="link"><span>Work Archives</span></router-link>
			<a href="mailto:hello@joduplessis.com" target="_blank" class="link"><span>hello@joduplessis.com</span></a>
			<a href="https://github.com/joduplessis" target="_blank" class="link social-icon"><img src="../assets/github.png" height="20" /></a>
			<a href="https://twitter.com/jo_duplessis" target="_blank" class="link social-icon"><img src="../assets/linkedin-logo.png" height="20" /></a>
			<a href="https://www.linkedin.com/in/jo-du-plessis-a03b0110/" target="_blank" class="link social-icon"><img src="../assets/twitter.png" height="20" /></a>
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
		display: flex;
		padding: 0px;
		flex-direction: row;
		align-items: center;
		align-content: center;
		justify-content: flex-end;
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

	.footer .link:last-child {
		margin-right: 100px;
	}

	@media (min-width: 1024px) {
	}

	@media (max-width: 1024px) {
	}

	@media (max-width: 480px) {
	}
</style>
