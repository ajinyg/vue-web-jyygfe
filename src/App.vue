<template>
  <div id="app">
	  <div>test01000</div>
	<!-- <transition>
		<keep-alive>
		  <router-view v-if="this.$router.currentRoute.meta.keepAlive" />
		</keep-alive>
	</transition>
	<transition>
		<router-view v-if="!this.$router.currentRoute.meta.keepAlive" />
	</transition> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
