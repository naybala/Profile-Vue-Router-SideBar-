<template>
	<div class="app">
		<!-- Sidebar -->
		<Sidebar />
		<!-- cookiee -->
		
		<!-- Content -->
		<router-view />
		<Cookiez/>
		
	</div>
	<Track/>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Cookiez from './components/Cookiez.vue'
import Track from './components/Track.vue'
export default{
	components:{
		Track,
		Sidebar,
		Cookiez,
		
	}
}
</script>

<style lang="scss">
:root {
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 300px;
	--mb-2: 1rem;
    --mb-4: 2rem;
	--mb-5: 2.5rem;
    --mb-6: 3rem;
	--big-font-size: 2rem;
	--font-semi: 600;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}

body {
	background: var(--light);
	overflow-x: hidden;
}
body.activeDark {
	overflow-x: hidden;
	background: #242f3f;
	color: #ffffff;
}
button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.app {
	display: flex;

	main {
		flex: 1 1 0;
		padding: 2rem;

		@media (max-width: 1024px) {
			padding-left: 6rem;
		}
	}
}

</style>