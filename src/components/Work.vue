<template>
	<div class="work">
		<div class="notice">
			<router-link class="goback" to="/">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="#FF5A5A"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-arrow-left"
				>
					<line x1="19" y1="12" x2="5" y2="12"></line>
					<polyline points="12 19 5 12 12 5"></polyline>
				</svg>
			</router-link>

			<p>
				Below is a non-exhaustive list of projects from freelance collaborations, full-time employment &
				personal work. Please note that links in older projects may no longer be active. <a href="mailto:hello@joduplessis.com">Report an issue</a>.
				<i>Notable</i> personal projects are highlighted in red.
			</p>
		</div>
		<div class="items">
			<div
				class="item"
				v-for="(item, index) in items"
				v-bind:style="{
					'background-size': 'cover',
					'background-position': 'center center',
					'background-image': 'url(' + getFirstImage(item.images) + ')',
					'border': item.notable ? '5px solid #ff5a5a' : '',
					'z-index': item.notable ? 10 : 1,
				}"
			>
				<span>
					<strong>
						{{ item.project }}
					</strong>
					<br />
					<span class="project-type">
						{{ item.project_type.toUpperCase() }}
					</span>
					{{ item.year }}
				</span>
				<router-link
					class="hover"
					:to="{ name: 'Project', params: { slug: item.slug } }"
				></router-link>
			</div>
		</div>
	</div>
</template>

<script>
function compare(a, b) {
	if (a.year < b.year) return -1;

	if (a.year > b.year) return 1;

	return 0;
}

const projects = require("../work.json");
const items = projects.project.sort(compare).reverse();

export default {
	name: "work",
	mounted() {
		if (!!window.scrollPosition) scrollTo(0, window.scrollPosition);
		window.addEventListener("scroll", this.setIsScrolled, { passive: true });
		this.setIsScrolled();
	},
	destroyed() {
		window.removeEventListener("scroll", this.setIsScrolled, { passive: true });
	},
	methods: {
		setIsScrolled() {
			window.scrollPosition = window.scrollY;
		}
	},
	data: function() {
		return {
			items
		};
	}
};
</script>

<style scoped="">
.work {
	background-color: white;
}

.notice {
	width: 100%;
	background-color: #1b2b3a;
}

.notice .goback {
	position: absolute;
	left: 20px;
	top: 20px;
}

.notice .goback img {
	fill: #ff5a5a;
}

.notice p {
	color: #ff5a5a;
	padding: 80px;
	margin: 0px;
	font-size: 20px;
	font-weight: bold;
}

.notice p a {
	color: #ff5a5a;
}

.items {
	display: flex;
	flex-direction: row;
	align-items: center;
	align-content: center;
	justify-content: center;
	flex-wrap: wrap;
}

.item {
	width: 20%;
	position: relative;
	height: 200px;
	box-sizing: border-box;
}

.item a.hover {
	width: 100%;
	height: 100%;
	background: black;
	display: block;
	opacity: 0.3;
	position: absolute;
	top: 0px;
	left: 0px;
	z-index: 1;
	-webkit-transition: opacity 280ms ease-in-out;
	transition: opacity 280ms ease-in-out;
}

.item a:hover {
	opacity: 0;
}

.item span {
	color: white;
	z-index: 2;
	font-size: 10px;
	padding: 5px;
	background: black;
	color: #666;
	font-weight: 800;
	height: -moz-fit-content;
	height: fit-content;
	display: table;
	padding-right: 10px;
}

.item span strong {
	font-weight: 500;
	text-transform: capitalize;
	color: white;
	font-size: 18px;
	color: white;
}

.item span .project-type {
	color: #ff5a5a;
	padding: 0;
	font-size: 10px;

}

@media (min-width: 1024px) {
}

@media (max-width: 1024px) {
}

@media (max-width: 480px) {
	.notice p {
		padding: 70px 30px 30px 30px;
		margin: 0px;
		font-size: 16px;
	}

	.item {
		width: 50%;
		position: relative;
		height: 200px;
	}
}
</style>
