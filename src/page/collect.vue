<template>
<!--收藏页-->
<div>
<!--头部-->
<heads></heads>
</div>

<div id="tou">
<h2>我的收藏</h2>
<div class="bb" v-for="(index,item) in data.collect" id="{{item.id}}">
   <ul class="one">
	   <li class="b3"><a><img src="{{item.picture}}"></a></li>
	   <li class="b4"><a v-link="{name:'summary'}"><p v-text="item.name"></p></a></li>
	   <li class="b2"><a>作者：</a></li>
	   <li class="b1"><p v-text="item.author"></li>
	   <li class="b6"><button  @click="delete(item.id)">删除收藏</button></li>
   </ul>
   </div>
   </div>

   <div>
   <!--返回顶部-->
   <Returntop></Returntop>
   </div>
<div>
   	<!--底部-->
<bottom></bottom>
</div>
</template>
<script type="text/javascript">
	import {request} from '../libs/collect'
	import heads from './heads'
	import Returntop from './returntop'
	import bottom from './bottom'
	module.exports={
		components:{
			heads,Returntop,bottom
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
			},delete(itemid){
				if(confirm("确定要删除？")){
						$('#'+itemid).remove();
				}
			}

		}	
	}
</script>

<style type="text/css">
#tou{
	width: 700px;
}
div{
	margin:0 auto;
	color:#7CB1B8;
	}
.bb{
	list-style-type:none;
	width:680px;
	height:110px;
	border-color:#DDDDDD;
	border-style:solid;
	border-width:1px;
	border-top-width:2px;
	border-top-color:#B7B7B7;
	margin-top:20px;
	margin-bottom:15px;
	font-size:13px;
	color:#000000;
	}
.bb ul li{
	float:left;
	list-style-type:none;
	margin-top:15px;
	margin-left:10px;
	}
.bb .b4{
	width:300px;
	margin-left:100px;
	margin-top:8px;
	font-size: 20px;
	}
.bb .b4 a{
	color:#38019E;
	text-decoration: none;
}
.bb .b3{
	margin-left:-10px;
	border-color:#CFCCCC;
	border-style:solid;
	border-width:0px;
	margin-top:-3px;
	}
.bb .b3 img{
	width:75px;
	height:85px;
	border-color:#CFCCCC;
	border-style:solid;
	border-width:1px;
}
.bb .b1{
	width:60px;
	margin-left:-30px;
	margin-bottom:3px;
	margin-top:13px;
	font-size: 15px;
	}
.bb .b2{
	margin-left:-80px;
	margin-top:28px;
	font-size: 15px;
	}
.bb .b5{
	width:50px;
	margin-left:40px;
	}
.bb .b6{
	margin-left:40px;
	margin-top:28px;
	}
.b .shangp{
	margin-bottom:-15px;
	margin-left:10px;
	margin-top:15px;
	}
.bb a{
	color:#000000;
	}
</style>