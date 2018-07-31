<template>
  <div id="app">
  <router-view/>
  </div>
</template>

<script>
	import HelloWorld from '../src/components/HelloWorld'
	import shopShare from '../src/components/shopShare'
	import Select from '../src/components/Select'
export default {
  name: 'App',
  data(){
  	return{}
  },
  components:{
  	HelloWorld,
  	shopShare,
  	Select,
  }
}
</script>

<style>
</style>
