<template>
    <section class="section">
        <div class="container">
            <br />
            <br />
            <div class="panels">
                <div class="panel">
                    <div class="year">
                        Douglas Adams • The Hitchhiker's Guide to the Galaxy
                    </div>
                    <div class="title">
                        We have normality.
                        <br />
                        I repeat, we have normality.
                    </div>
                    <br class="clearfix" />
                    <br class="clearfix" />
                    <br class="clearfix" />
                </div>
                <div class="panel">
                    <div class="notes-highlight">
                        My name is Jo du Plessis. I am a developer currently residing in the Durban area, South Africa.
                    </div>
                    <div class="notes">
                        Some projects in my portfolio have been collaborations with agencies & others whilst working full-time -
                        others have been removed entirely due to the nature of the work. I've tried to be clear wherever possible.
                        <br />
                        <br />
                        If you see something you like, want to say hello - or if something is breaking,
                        <a href="mailto:hello@joduplessis.com">
                            drop me a line
                        </a>
                        .
                    </div>
                </div>
            </div>
            <br class="clearfix" />
        </div>
    </section>
</template>
<script>
    export default {
        name: 'about'
    }
</script>
<style scoped="">
    .clearfix {
        clear: both;
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
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 9px;
        padding: 5px;
        background: black;
        color: #aaa;
        font-weight: 400;
        text-transform: uppercase;
    }

    .item span strong {
        font-weight: 700;
        text-transform: capitalize;
        color: white;
        font-size: 11px;
        color: white;
    }

    .item {
        width: 100%;
        height: 500px;
        background-color: white;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: left;
        justify-content: left;
        background-position: center;
        background-size: cover;
    }

    .year {
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: black;
        padding-bottom: 20px;
    }

    .title {
        font-family: 'Roboto Mono', monospace;
        font-weight: 700;
        color: black;
        font-size: 60px;
        padding-bottom: 10px;
    }

    .notes {
        color: #333;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 300;
        font-size: 20px;
        padding-bottom: 10px;
        padding-top: 10px;
    }

    .notes-highlight {
        color: #333;
        font-family: 'Roboto Mono', monospace;
        font-weight: 500;
        font-size: 20px;
        padding-bottom: 10px;
        padding-top: 10px;
    }

    .subtitle {
        color: #AAA;
        font-family: 'Roboto Mono', monospace;
        font-size: 16px;
        margin: 0px;
        text-transform: uppercase;
        padding-bottom: 10px;
    }

    .goback {
        font-family: 'Roboto Mono', monospace;
        color: black;
        font-size: 12px;
        font-weight: 500;
    }

    .goback:hover {
        opacity: 0.75;
        -webkit-transition: all 280ms ease-in-out;
        transition: all 280ms ease-in-out;
    }

    .tag {
        margin-right: 2px;
        font-family: 'Roboto Mono', monospace;
        color: #aaa;
        font-size: 12px;
    }

    .tag.is-primary {
        color: white;
        background: black;
        font-size: 12px;
    }

    @media (min-width: 1024px) {
        .panels {
            display: flex;
            align-items: left;
            justify-content: left;
        }

        .panel {
            width: 50%;
			padding-bottom: 0px;
			margin-bottom: 0px;
			padding-top: 0px;
			margin-top: 0px;
        }

        .panel img {
            margin: 0px;
            padding: 0px;
            width: 100%;
            height: auto;
            margin-top: -5px;
        }

        .panel .padding {
            padding-left: 50px;
        }
    }

    @media (max-width: 1024px) {
        .panels {
            display: block;
        }

        .panel {
            width: 100%;
			padding-bottom: 0px;
			margin-bottom: 0px;
			padding-top: 0px;
			margin-top: 0px;
        }

        .panel img {
            margin: 0px;
            padding: 0px;
            width: 100%;
            height: auto;
            margin-top: -5px;
        }

		.title {
			font-size: 30px;
		}

        .panel .padding {
            padding-left: 0px;
        }
    }

</style>
