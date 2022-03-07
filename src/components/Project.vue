<template>
    <div class="project">
		<a href="javascript:window.history.back()" class="goback">
			<img height="40" src="../assets/arrow-left.svg" />
		</a>
		<div class="sections">
			<div class="images">
				<a
					v-if="index!=0"
					v-for="(item, index) in getFirstElement(item).images"
					v-bind:href="getImageUrl(item)" target="_blank">
					<img :src="getImageUrl(item)" />
				</a>
			</div>
			<div class="details">
				<div class="padding">
					<div class="year">
						{{getFirstElement(item).year}}
						<span v-if="getFirstElement(item).partner!=''">
							- {{getFirstElement(item).partner}}
						</span>
					</div>
					<div class="title">
						{{getFirstElement(item).project}}
					</div>
					<span class="tag solid" v-for="(role, index) in getFirstElement(item).roles">
						{{role.toUpperCase()}}
					</span>
					<div class="notes">
						{{getFirstElement(item).notes}}
					</div>
					<span class="tag is-light" v-for="(tag, index) in getFirstElement(item).tags">
						{{tag}}
					</span>
					<br class="clearfix" />
					<br class="clearfix" />
					<span v-for="(link, index) in getFirstElement(item).links" v-if="getFirstElement(item).links[0]">
						<a class="link" target="_blank" v-bind:href="link">
							→ {{link.replace("http://","").replace("https://","")}}
						</a>
						</br>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    const items = require('../work.json');

    export default {
        name: 'work',
        data: function() {
            const {
                slug
            } = this.$route.params;

            return {
                item: items.project.filter((obj, index) => {
                    return obj.slug == slug;
                }),
            }
        }
    }
</script>
<style scoped="">
.project {
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
        color: black;
        padding-bottom: 20px;
    }

    .sections .details .title {
        font-weight: 700;
        color: black;
        font-size: 70px;
        padding-bottom: 20px;
    }

    .sections .details .notes {
        color: #333;
        font-weight: 300;
        font-size: 24px;
        padding-bottom: 20px;
        padding-top: 30px;
    }

    .sections .details .subtitle {
        color: #AAA;
        font-size: 16px;
        margin: 0px;
        padding-bottom: 10px;
    }

    .sections .details .tag {
        margin-right: 2px;
        color: #aaa;
        font-size: 14px;
				border-radius: 5px;
				padding: 5px;
    }

	.sections .details .link {
		text-decoration: none;
		font-size: 18px;
		color: #F0C410;
		transition: opacity 0.5s;
		opacity: 1;
	}

		.sections .details .link.underline {
			box-shadow: inset 0px -8px 0 #FCDD35, inset 0 -15px 0 white;
			text-decoration: none;
		}

	.sections .details .link:hover {
		opacity: 0.5;
	}

    .sections .details .tag.solid {
        color: black;
        background: #F2C40F;
        font-size: 16px;
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
		background: #F2C40F;
		font-size: 13px;
		padding: 2px;
		margin-bottom: 2px;
		box-sizing: border-box;
		display: inline-block;
	}
}
</style>
