<template>
    <div class="home">
        <div class="item full">
            <section class="section">
				<div class="avatar">
					<div class="photo"></div>
				</div>
                <div class="container">
                 	<div class="title">
						Developer. Occasional designer. <br />
						All round swell homo sapien(s), sometimes.
                    </div>
                    <div class="subtitle">
                        Below you'll find some of the projects I've been involved with over the last few years.
                    </div>
                </div>
            </section>
        </div>
        <div class="item" v-bind:style="{ 'background-image': 'url('+getFirstImage(item.images)+')' }" v-for="(item, index) in items">
            <span>
                {{item.year}}
                <br/>
                <strong>
                    {{item.project}}
                </strong>
            </span>
            <router-link :to="{ name: 'Project', params: { slug: item.slug }}">
            </router-link>
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

.home {
	height: 80vh;
}

.item a {
    width: 100%;
    height: 100%;
    background: black;
    display: block;
    opacity: 0.6;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
}

.item a:hover {
    opacity: 0;
    -webkit-transition: all 280ms ease-in-out;
    transition: all 280ms ease-in-out;
}

.item span {
    color: white;
    z-index: 2;
    font-family: 'Roboto Mono', monospace;
    font-size: 8px;
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
    font-family: 'Roboto Mono', monospace;
    color: white;
    font-size: 10px;
    color: white;
}

@media (min-width: 1024px) {
    .item {
        width: 20%;
        height: 200px;
        background-color: white;
        position: relative;
        float: left;
        overflow: hidden;
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: left;
        justify-content: left;
    }

    .item.full {
        height: 100%;
        width: 100%;
        margin: 0px;
        padding: 0px;
        position: relative;
        padding: 0px;
    }

	.item.full .section {
		background-size: contain;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-content: center;
		align-items: center;
	}

	.item.full .avatar {
		flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
	}

	.item.full .avatar .photo {
		background: url('../assets/profile.jpg') no-repeat center center;
		border: 3px solid white;
		box-shadow: 0px 0px 0px 3px black;
		background-size: cover;
		background-color: transparent;
		width: 200px;
		height: 200px;
		border-radius: 100px;
	}

    .item.full .container {
        flex: 3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
    }

    .item.full .title {
        color: black;
        width: 100%;
        font-weight: 300;
        font-size: 50px;
        font-family: 'Roboto Mono';
		font-family: utopia-std-headline,serif;
		font-weight: 400;
		font-style: normal;
		padding-right: 50px;
    }

	.item.full .title a {
		width: auto;
		height: auto;
		background: transparent;
		display: inline;
		color: #FF3267;
		opacity: 1;
		position: relative;
		top: 0px;
		left: 0px;
		z-index: 1;
	}

    .item.full .subtitle {
		padding-top: 30px;
        color: black;
        text-align: left;
        width: 100%;
        font-weight: 300;
        font-size: 24px;
        font-family: 'Source Sans Pro';
		padding-right: 50px;
    }
}
@media (max-width: 1024px) {
    .item {
        width: 20%;
        height: 200px;
        background-color: white;
        position: relative;
        float: left;
        overflow: hidden;
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: left;
        justify-content: left;
    }

    .item.full {
        height: 400px;
        width: 60%;
        background-color: black;
        margin: 0px;
        padding: 0px;
        position: relative;
        padding: 0px;
        background: white;
        background-size: contain;
    }

	.item.full .section {
		background-size: contain;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-content: center;
		align-items: center;
	}

	.item.full .avatar {
		display: none;
	}

    .item.full .container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
    }

    .item.full .title {
        color: black;
        font-weight: 300;
        width: 100%;
        font-size: 25px;
        font-family: 'Roboto Mono';
		font-family: utopia-std-headline,serif;
		font-weight: 400;
		font-style: normal;
		padding-right: 30px;
    }

	.item.full .title a {
		width: auto;
		height: auto;
		background: transparent;
		display: inline;
		color: #FF3267;
		opacity: 1;
		position: relative;
		top: 0px;
		left: 0px;
		z-index: 1;
	}

    .item.full .subtitle {
		padding-top: 30px;
        color: black;
        text-align: left;
        width: 100%;
        font-weight: 300;
        font-size: 20px;
        font-family: 'Source Sans Pro';
		padding-right: 50px;
    }
}
@media (max-width: 480px) {
    .item {
        width: 50%;
        height: 200px;
        background-color: white;
        position: relative;
        float: left;
        overflow: hidden;
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: left;
        justify-content: left;
    }

	.item.full .section {
		background-size: contain;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-content: center;
		align-items: center;
	}

	.item.full .avatar {
		display: none;
	}

    .item.full {
        height: 400px;
        width: 100%;
        background-color: white;
        margin: 0px;
        padding: 0px;
        position: relative;
    }

    .item.full .title {
        color: black;
        font-weight: 300;
        width: 100%;
        font-size: 25px;
        font-family: 'Roboto Mono';
		font-family: utopia-std-headline,serif;
		font-weight: 400;
		font-style: normal;
		padding-right: 30px;
    }

	.item.full .title a {
		width: auto;
		height: auto;
		background: transparent;
		display: inline;
		color: #FF3267;
		opacity: 1;
		position: relative;
		top: 0px;
		left: 0px;
		z-index: 1;
	}

    .item.full .subtitle {
		padding-top: 30px;
        color: black;
        text-align: left;
        width: 100%;
        font-weight: 300;
        font-size: 24px;
        font-family: 'Source Sans Pro';
		padding-right: 50px;
    }
}
</style>
