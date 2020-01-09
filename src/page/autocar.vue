<template>
  <div>
  <table>
  <tr>
  	<td>ID</td>
  	<td>汽车牌子</td>
  </tr>
  	<tr>
  		<td><p v-for="(index,item) in data.optionList" v-text="item.id"></p></td>
  		<td><p v-for="(index,item) in data.optionList" v-text="item.name"></p></td>
  	</tr>
  </table>
</div>

<button @click="shwoShade($event)" typeId="1111">遮罩层</button>
<div class="shadeDiv" @click="hideShade()"></div>

  <model></model>
</template>
<script type="text/javascript">
	import {request} from '../libs/autocar'
	import model from './model'
	module.exports={
		componets:{
			model
		},
		data(){
			return{
				data:{}
			}
		},
		ready(){

			this.showList()
		},
		methods:{
			showList(){
				let vue = this;
				request.criteriaArray(data =>{
					vue.data = data;
					console.log(data)
				});
			},
			shwoShade($event){
				var typeId=$($event.currentTarget);
				console.log(typeId.attr("typeId"))
				$(".shadeDiv").fadeIn(500);
			},
			hideShade(){
				this.items.shift(); 
			}

		}
	}
</script>
<style type="text/css">
	.shadeDiv{width: 100%;height: 100%;z-index: 10;position: fixed;background: rgba(0,0,0,0.55);top: 0;left: 0;}
</style>