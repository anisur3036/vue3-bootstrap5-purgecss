<template>
	<router-link to="/">Home</router-link>
	<router-link to="/about">About</router-link>
	<div class="main-container">
		<router-view v-slot="{ Component }">
			<transition name="fade" mode="out-in">
				<component :is="Component" :key="$route.path"></component>
			</transition>
		</router-view>
	</div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.2s ease-out;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
