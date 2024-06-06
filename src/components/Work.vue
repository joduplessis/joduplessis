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
					stroke="var(--text-color)"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-arrow-left"
				>
					<line x1="19" y1="12" x2="5" y2="12"></line>
					<polyline points="12 19 5 12 12 5"></polyline>
				</svg>
			</router-link>

			<p class="heading">
				Work
			</p>
			<p>
				Below is a non-exhaustive list of projects from freelance collaborations, full-time employment &
				personal work. Please note that links in older projects may no longer be active. <a href="mailto:jo@joduplessis.com">Report an issue</a>.
				<strong>Notable projects have been listed first.</strong>
			</p>

		<!-- 	<p>
				Below is a non-exhaustive list of projects from freelance collaborations, full-time employment &
				personal work. Please note that links in older projects may no longer be active. <a href="mailto:jo@joduplessis.com">Report an issue</a>.
				<i>Notable</i> personal projects are highlighted in red.
			</p> -->
		</div>

		<div class="items">
			<div
				class="item is-notable"
				v-for="(item, index) in featuredItems"
				v-bind:style="{
					'background-size': 'cover',
					'background-position': 'center center',
					'background-image': 'url(' + getFirstImage(item.images) + ')',
					//'border': item.notable ? '0px solid var(--text-color)' : '',
					//'z-index': item.notable ? 10 : 1,
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

		<div class="divider" />

		<div class="items">
			<div
				class="item"
				v-for="(item, index) in regularItems"
				v-bind:style="{
					'background-size': 'cover',
					'background-position': 'center center',
					'background-image': 'url(' + getFirstImage(item.images) + ')',
					//'border': item.notable ? '5px solid var(--text-color)' : '',
					//'z-index': item.notable ? 10 : 1,
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
const regularItems = items.filter((item) => !item.notable);
const featuredItems = items.filter((item) => item.notable);

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
			items,
			regularItems,
			featuredItems,
		};
	}
};
</script>

<style scoped="">


.work {
	--text-color: #add353;
}

.work {
	background-color: #132434;
}

.notice {
	width: 100%;
	background-color: #132434;
}

.divider {
	border-top: 1px dashed var(--text-color);
	margin: 1rem;
}

.notice .goback {
	position: absolute;
	left: 20px;
	top: 20px;
}

.notice .goback img {
	fill: var(--text-color);
}

.notice p {
	color: var(--text-color);
	padding: 80px;
	margin: 0px;
	font-size: 16px;
	font-weight: semi-bold;
}

.notice p.heading {
	font-size: 40px;
	font-weight: bold;
	color: var(--text-color);
	padding-bottom: 0;
	margin-bottom: -70px;
}

.notice p a {
	color: var(--text-color);
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
	position: relative;
	box-sizing: border-box;
	width: 20%;
	height: 200px;
	border: 4px solid #132434;
	border-radius: 15px;
	overflow: hidden;
}

.item.is-notable {
	width: 20%;
	height: 200px;
}

.item a.hover {
	width: 100%;
	height: 100%;
	background: black;
	display: block;
	opacity: 0.2;
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
	color: #72889b;;
	font-weight: 800;
	height: -moz-fit-content;
	height: fit-content;
	display: table;
	padding-right: 10px;
	transition: opacity 0.2s;
}

.item:not(.is-notable) span {
	opacity: 1;
}

.item:hover span {
	opacity: 1;
}

.item span strong {
	font-weight: 500;
	text-transform: capitalize;
	color: white;
	font-size: 18px;
}

.item span .project-type {
	color: #b0c5d8;;
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
