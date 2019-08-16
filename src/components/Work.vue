<template>
    <div class="work">
		<div class="notice">
			<router-link class="goback" to="/">
				<img height="30" src="../assets/arrow-left.svg" />
			</router-link>

			<p>
				Disclaimer! Some of the work here have been collaborations with agencies & others while working full-time somewhere.
				Others have been removed due to the nature of the work or an NDA - but I've tried to be clear wherever possible.
				Most projects here are also archived, so if a link does not work, or if you have any questions -
				<a href="mailto:hello@joduplessis.com">please let me know</a>.
			</p>
		</div>
		<div class="items">
	        <div
				class="item"
				v-for="(item, index) in items"
				v-bind:style="{
					'background-size': 'cover',
					'background-position': 'center center',
					'background-image': 'url('+getFirstImage(item.images)+')'
				}">
	            <span>
	                {{item.year}}
	                <br/>
	                <strong>
	                    {{item.project}}
	                </strong>
	            </span>
	            <router-link class="hover" :to="{ name: 'Project', params: { slug: item.slug }}"></router-link>
	        </div>
		</div>
    </div>
</template>

<script>
function compare(a,b) {
	if (a.year < b.year)
		return -1;

	if (a.year > b.year)
		return 1;

	return 0;
}

const projects = require('../work.json');
const items = projects.project.sort(compare).reverse();

export default {
	name: 'work',
	data: function() {
		return {
			items
		}
	}
}
</script>

<style scoped="">
.work {
}

.notice {
	width: 100%;
	background: #f1c40f;
}

	.notice .goback {
		position: absolute;
		left: 20px;
		top: 20px;
	}

	.notice p {
		color: black;
		padding: 80px;
		margin: 0px;
		font-size: 20px;
		font-family: 'hk_grotesksemibold', sans-serif;
	}

	.notice p a {
		color: black;
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
	font-family: 'hk_groteskbold', sans-serif;
    font-size: 12px;
    padding: 5px;
    background: black;
    color: #666;
    font-weight: 800;
    height: -moz-fit-content;
    height: fit-content;
    display: table;
}

.item span strong {
    font-weight: 500;
    text-transform: capitalize;
	font-family: 'hk_groteskbold', sans-serif;
    color: white;
    font-size: 16px;
    color: white;
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
