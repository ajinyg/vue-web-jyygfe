<template>
  <div id="app">
	  <!-- <img src="http://img08.oneniceapp.com/upload/resource/98a0fdaf72f739262597e3ed666a6a11.png" alt=""> -->
	<transition>
		<keep-alive>
		  <router-view v-if="this.$router.currentRoute.meta.keepAlive" />
		</keep-alive>
	</transition>
	<transition>
		<router-view v-if="!this.$router.currentRoute.meta.keepAlive" />
	</transition>
  </div>
</template>
<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
body{
	margin:0;
	padding:0;
}
img{
	width:100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
