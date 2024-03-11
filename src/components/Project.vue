<template>
	<div class="project">
		<router-link class="goback" to="/work">
			<img height="40" src="../assets/arrow-left.svg" />
		</router-link>
		<div class="sections">
			<div class="images">
				<a
					v-if="index != 0"
					v-for="(item, index) in getFirstElement(item).images"
					v-bind:href="getImageUrl(item)"
					target="_blank"
				>
					<img :src="getImageUrl(item)" />
				</a>
			</div>
			<div class="details">
				<div class="padding">
					<div class="year">
						{{ getFirstElement(item).year }}
						<span v-if="getFirstElement(item).partner != ''">
							- {{ getFirstElement(item).partner }}
						</span>
					</div>
					<div class="title">
						{{ getFirstElement(item).project }}
					</div>
					<h5>Project type:</h5>
					<div class="project-type">
						{{ getFirstElement(item).project_type }}
					</div>
					<br/>
					<h5>Roles:</h5>
					<span class="tag solid">
						{{ getFirstElement(item).roles.join(', ') }}
					</span>
					<div class="notes">
						{{ getFirstElement(item).notes }}
					</div>
					<div class="private" v-if="getFirstElement(item).private == true">More information available on request.</div>
					<span
						class="tag is-light"
						v-for="(tag, index) in getFirstElement(item).tags"
					>
						{{ tag }}
					</span>
					<br class="clearfix" />
					<br class="clearfix" />
					<span
						v-for="(link, index) in getFirstElement(item).links"
						v-if="getFirstElement(item).links[0]"
					>
						<a class="link" target="_blank" v-bind:href="link">
							→ {{ link.replace("http://", "").replace("https://", "") }}
						</a>
						<br />
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
const items = require("../work.json");

export default {
	name: "work",
	data: function() {
		const { slug } = this.$route.params;

		return {
			item: items.project.filter((obj, index) => {
				return obj.slug == slug;
			})
		};
	}
};
</script>
<style scoped="">
.project {
	background-color: white;
}

.goback {
	padding: 20px;
	display: block;
}

.sections {
	display: flex;
	flex-direction: row;
	width: 80%;
	margin-right: auto;
	margin-left: auto;
}

.sections .images a {
	width: 80%;
	display: block;
}

.sections .images {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	align-content: center;
	justify-content: center;
}

.private {
	color: #ff5a5a;
	font-size: 14px;
	font-weight: bold;
	padding-bottom: 20px;
	padding-right: 5px;
}

.sections .images img {
	width: 100%;
	margin-bottom: 5px;
	border-radius: 5px;
	display: block;
	border: none;
}

.sections .details {
	flex: 1;
}

.sections .details .year {
	font-size: 18px;
	font-weight: 600;
	color: #1b2b3a;
	padding-bottom: 20px;
}

.sections .details .title {
	font-weight: 700;
	color: #1b2b3a;
	font-size: 70px;
	padding-bottom: 20px;
}

.sections .details .project-type {
	color: #007d66;
	font-size: 14px;
	font-weight: medium;
	padding: 0;
	padding-right: 5px;
}

.sections .details .notes {
	color: #1b2b3a;
	font-weight: 300;
	font-size: 24px;
	padding-bottom: 20px;
	padding-top: 20px;
}

.sections .details .subtitle {
	color: #aaa;
	font-size: 16px;
	margin: 0px;
	padding-bottom: 10px;
}

.sections .details .tag {
	margin-right: 2px;
	margin-bottom: 2px;
	display: inline-block;
	color: white;
	font-size: 14px;
	border-radius: 5px;
	padding: 5px;
	padding-bottom: 2px;
	padding-top: 2px;
	background: #1b2b3a;
}

.sections .details .link {
	text-decoration: none;
	font-size: 16px;
	color: #1b2b3a;
	font-weight: bold;
	transition: opacity 0.5s;
	opacity: 1;
}

.sections .details .link.underline {
	box-shadow: inset 0px -8px 0 #ff5a5a, inset 0 -15px 0 white;
	text-decoration: none;
}

.sections .details .link:hover {
	opacity: 0.5;
}

.sections .details .tag.solid {
	color: #007d66;
	font-size: 14px;
	font-weight: medium;
	padding: 0;
	padding-right: 5px;
	background-color: transparent;
}

.sections .details h5 {
	color: #007d66;
	padding: 0;
	margin: 0;
	font-size: 14px;
	font-weight: bold;
}

@media (min-width: 1024px) {
}

@media (max-width: 1024px) {
}

@media (max-width: 480px) {
	.sections {
		width: 100%;

		flex-direction: column-reverse;
	}

	.sections .images a {
		width: 80%;
	}

	.sections .images img {
		width: 100%;
	}

	.sections .details {
		flex: 1;
		padding: 10%;
	}

	.sections .details .title {
		font-size: 2em;
		padding-bottom: 20px;
	}

	.sections .details .tag.solid {
		font-size: 13px;
		padding: 2px;
		margin-bottom: 2px;
		box-sizing: border-box;
		display: inline-block;
	}
}
</style>
