<template>
  <div>
    <heads></heads>
    <model></model>
  </div>
</template>
<script>
	import heads from './heads'
	import model from './model'
	module.exports={
		components:{
			model
		},
		data(){
			return{
				data:{}
			}
		}
	}
</script>
