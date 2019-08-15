<template>
    <div id="app">
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style>
	.clear {
		clear: both;
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

	body {
		padding: 0px;
		margin: 0px;
	}

    .social-icon {
        width: 15px;
        height: 15px;
    }
</style>
