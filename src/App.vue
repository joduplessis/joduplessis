<template>
    <div id="app">

        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-start">
                <div class="navbar-brand">
                    <span class="navbar-item" href="/">

                    </span>
                </div>
            </div>

            <div class="navbar-end">

                <div class="navbar-item">
                    <router-link :to="{ name: 'Home'}" class="navbar-item"><span>Home</span></router-link>
                </div>

                <div class="navbar-item">
                    <router-link :to="{ name: 'About'}" class="navbar-item"><span>About</span></router-link>
                </div>

                <div class="navbar-item">
                    <router-link :to="{ name: 'Expertise'}" class="navbar-item"><span>Expertise</span></router-link>
                </div>

                <div class="navbar-item"><a href="mailto:hello@joduplessis.com" target="_blank" class="navbar-item"><span>hello@joduplessis.com</span></a></div>
                <div class="navbar-item"><a href="https://github.com/joduplessis" target="_blank" class="social-icon"><img src="./assets/github.png" height="20" /></a></div>
                <div class="navbar-item"><a href="https://twitter.com/jo_duplessis" target="_blank" class="social-icon"><img src="./assets/linkedin-logo.png" height="20" /></a></div>
                <div class="navbar-item"><a href="https://www.linkedin.com/in/jo-du-plessis-a03b0110/" target="_blank" class="social-icon"><img src="./assets/twitter.png" height="20" /></a></div>

            </div>
        </nav>

		<br style="clear" />

        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    require('./assets/bulma.min.css');

    export default {
        name: 'app'
    }
</script>

<style>

	.clear {
		clear: both;
	}

    .navbar {

        padding-right: 20px;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition-property: opacity;
        transition-duration: .25s;
    }

    .fade-enter-active {
        transition-delay: .25s;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }

    * a {
        color: black;
    }

    .social-icon {
        width: 15px;
        height: 15px;
    }

    a.navbar-item {
        color: black !important;
        font-family: 'Roboto Mono', monospace;
        font-weight: 800;
        text-transform: uppercase;
        font-size: 11px;
        margin-left: 0px;
        padding: 0px;
    }

    a.navbar-item:hover {
        background-color: white;
    }

    a.navbar-item:hover span,
    .router-link-exact-active span {
        background-color: black;
        color: white;
    }

    a.navbar-item.outbound span {
        color: black;
    }

    a.navbar-item.outbound:hover span {
        color: #FF3267;
    }

    a.navbar-item span {
        padding: 5px;
    }

    a.navbar-item:hover {
        color: white;
    }

    .tooltip {
        display: block !important;
        z-index: 10000;
    }

    .tooltip .tooltip-inner {
        background: black;
        color: white;
        border-radius: 16px;
        padding: 5px 10px 4px;
    }

    .tooltip .tooltip-arrow {
        width: 0;
        height: 0;
        border-style: solid;
        position: absolute;
        margin: 5px;
        border-color: black;
    }

    .tooltip[x-placement^=top] {
        margin-bottom: 5px;
    }

    .tooltip[x-placement^=top] .tooltip-arrow {
        border-width: 5px 5px 0 5px;
        border-left-color: transparent !important;
        border-right-color: transparent !important;
        border-bottom-color: transparent !important;
        bottom: -5px;
        left: calc(50% - 5px);
        margin-top: 0;
        margin-bottom: 0;
    }

    .tooltip[x-placement^=bottom] {
        margin-top: 5px;
    }

    .tooltip[x-placement^=bottom] .tooltip-arrow {
        border-width: 0 5px 5px 5px;
        border-left-color: transparent !important;
        border-right-color: transparent !important;
        border-top-color: transparent !important;
        top: -5px;
        left: calc(50% - 5px);
        margin-top: 0;
        margin-bottom: 0;
    }

    .tooltip[x-placement^=right] {
        margin-left: 5px;
    }

    .tooltip[x-placement^=right] .tooltip-arrow {
        border-width: 5px 5px 5px 0;
        border-left-color: transparent !important;
        border-top-color: transparent !important;
        border-bottom-color: transparent !important;
        left: -5px;
        top: calc(50% - 5px);
        margin-left: 0;
        margin-right: 0;
    }

    .tooltip[x-placement^=left] {
        margin-right: 5px;
    }

    .tooltip[x-placement^=left] .tooltip-arrow {
        border-width: 5px 0 5px 5px;
        border-top-color: transparent !important;
        border-right-color: transparent !important;
        border-bottom-color: transparent !important;
        right: -5px;
        top: calc(50% - 5px);
        margin-left: 0;
        margin-right: 0;
    }

    .tooltip[aria-hidden=true] {
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.15s, visibility 0.15s;
    }

    .tooltip[aria-hidden=false] {
        visibility: visible;
        opacity: 1;
        transition: opacity 0.15s;
    }
</style>
