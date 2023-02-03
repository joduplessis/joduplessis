<template>
    <div class="work">
		<div class="notice">
			<router-link class="goback" to="/">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF5A5A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
			</router-link>

			<p>
				Projects are from freelance collaborations, full-time employment or personal work.
				Some have been removed due to the nature of the work or an NDA.
				Older projects have unfortunately been archived - my apologies if a link does not work anymore.
				If you have any questions, <a href="mailto:hello@joduplessis.com">please let me know</a>.
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
					<br/>
	                {{item.project_type.toUpperCase()}}
	                <br/>
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
  mounted () {
		if (!!window.scrollPosition) scrollTo(0, window.scrollPosition)
    window.addEventListener('scroll', this.setIsScrolled, { passive: true })
    this.setIsScrolled()
  },
  destroyed () {
    window.removeEventListener('scroll', this.setIsScrolled, { passive: true })
  },
  methods: {
    setIsScrolled () {
			window.scrollPosition = window.scrollY
    }
  },
	data: function() {
		return {
			items
		}
	}
}
</script>

<style scoped="">
.work {
	background-color: white;
}

.notice {
	width: 100%;
	background-color: #1B2B3A;
}

	.notice .goback {
		position: absolute;
		left: 20px;
		top: 20px;
	}

	.notice .goback img {
		fill: #FF5A5A;
	}

	.notice p {
		color: #FF5A5A;
		padding: 80px;
		margin: 0px;
		font-size: 20px;
		font-weight: bold;
	}

	.notice p a {
		color: #FF5A5A;
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
