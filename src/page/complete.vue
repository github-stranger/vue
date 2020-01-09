<template>
<!--图书大全-->
<div>
<!--头部-->
<heads></heads>
</div>

<div id="outside">
<h2>图书大全</h2>

<div class="wai"  v-for="(index,item) in data.detailed">
<ul>
<li><img src="{{item.picture}}"/></li>
<li id="one">书名：<span><a v-link="{name:'summary'}"><text v-text="item.name"></text></a></span></li>
<li id="one">作者：<span><text v-text="item.author"></text></span></li>
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
import {request} from '../libs/detailed'
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
			}
		}
	}
</script>

<style type="text/css">
#outside{
	margin:0 auto;
	width:1080px;
	height:2400px;
	}
	h2{
		color:#7CB1B8;
		margin-left:15px;
		margin-bottom:-10px;
		}
.wai{
	width:330px;
	height:450px;
	border-color:#CCC;
	border-width:1px;
	border-style:solid;
	margin-left:15px;
	margin-top:20px;
	float:left;
	}
.wai ul li{
	list-style-type:none;
	color:#666;
	margin-top:10px;
	}
.wai ul li span{
		color:#000;
		font-weight:bold;
		}
.wai ul li a{
	text-decoration: none;
}
.wai ul li img{
	width:280px;
	height:350px;
	border-color:#CCC;
	border-width:1px;
	border-style:solid;
	margin-left: -15px;
	}
</style>