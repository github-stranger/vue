<template>
<!--图书详情页-->
<div>
<!--头部-->
<heads></heads>
</div>

<div v-for="(index,item) in data.detailed">
<div v-if="item.id=='0'">
<h2><span><a v-text="item.name"></a></span></h2>
<div id="com">
<div class="imgs"><img src="{{item.picture}}"/></div>
<!---->
<div class="jieshao">
<ul>
<li>作&nbsp;&nbsp;&nbsp;&nbsp;者：<span><a v-text="item.author"></a></span></li>
<li>出&nbsp;版&nbsp;社：<span><a v-text="item.publish"></a></span></li>
<li>出版时间：<span><a v-text="item.publishdate"></a></span></li>
<li>页&nbsp;&nbsp;&nbsp;&nbsp;数：<span><a v-text="item.page"></a></span></li>
<li>价&nbsp;&nbsp;&nbsp;&nbsp;格：<span><a v-text="item.price"></a></span></li>
<li>所属分类：<span><a v-text="item.genre"></a></span></li>
</ul>
</div>
<!---->
<div class="sun">
<p>------------------------------------------------------------------------------------------------</p>
<h3>内容简介:</h3>
<div class="bre"><span><a v-text="item.synopsis"></a></span>
</div>
<p>------------------------------------------------------------------------------------------------</p>
<h3>目录:</h3>
<div class="bre"><span><a v-text="item.contents"></a></span>
</div>
</div>
<!---->
</div>
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
#com{
	margin:0 auto;
	width:700px;
	height:1000px;
	border-top-color:#CCC;
	border-top-width:1px;
	border-top-style:solid;
	padding-top:20px;
	padding-left:60px;
	padding-bottom:20px;
	}
h2{
	margin:0 auto;
	width:700px;
	padding-top:20px;
	padding-bottom:20px;
	color:#7CB1B8;
	}
	.imgs{
		float:left;
		}
.imgs,.imgs img{
		width:250px;
	height:350px;
		border-color:#CCC;
	border-width:1px;
	border-style:solid;
		}
.jieshao{
	width:380px;
	height:350px;
	border-color:#CCC;
	border-width:0px;
	border-style:solid;
	float:left;
	margin-left:10px;
	}
.jieshao ul li{
	list-style-type:none;
	margin-bottom:20px;
	font-size: 25px;
	}
.jieshao ul li span{
	margin-left: 30px;
}
.sun{
	width:770px;
	height:500px;
	border-color:#CCC;
	border-width:0px;
	border-style:solid;
	float:left;
	margin-left:-60px;
	}
.bre{
	word-wrap:break-word;
	color:#7CB1B8;
	}
</style>