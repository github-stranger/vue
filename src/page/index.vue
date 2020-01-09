<template>
<!--主页-->
<div>
	<!--头部-->
	<heads></heads>
</div>

<!--广告-->
<div class="guangao"><ul><li><img src="../../static/images/guangaoone.jpg"/> <img src="../../static/images/guangaotwo.jpg"/> <img src="../../static/images/guang.jpg"/></li></ul></div>
<!--新书推荐-->
<div class="classify">新书推荐：</div>
<div class="groom">
<div class="content">

				<ul v-for="(index,item) in data.detailed" v-if="item.status=='新书'">
                <li><img src="{{item.picture}}"/></li>
                <li>书名：<span><a v-link="{name:'summary',params:{bookId:item.id}}"><text v-text="item.name"></text></a></span></li>
                <li>作者：<span><text v-text="item.author"></text></span></li>
                </ul>

</div>
</div>
<!--销售排行-->
<div class="classify">销售排行：</div>
<div class="seniority">
<div class="content">

				<ul v-for="(index,item) in data.detailed" v-if="item.status=='销售'">
                <li><img src="{{item.picture}}"/></li>
                <li>书名：<span><a v-link="{name:'summary'}"><text v-text="item.name"></text></a></a></span></li>
                <li>作者：<span><text v-text="item.author"></text></span></li>
                </ul>

</div>
</div>
<!--图书分类-->
<div class="classify">图书分类：</div>
	<div id="tabs">
		<div class="tabs-top">
			<ul>
				<li class="choosed">青春文学</li>
				<li>美术</li>
                <li>计算机</li>
                <li>文学</li>
                <li>艺术</li>
                <li>生活</li>
                <li>科技</li>
                <li>学术</li>
                <li>管理</li>
                <li>音乐</li>
			</ul>
		</div>
		<div class="tabs-body">
			<div class="content">
			<!--青春文学-->
			
				<ul v-for="(index,item) in data.detailed" v-if="item.genre=='青春文学'">
                <li><img src="{{item.picture}}"/></li>
                <li>书名：<span><a v-link="{name:'summary'}"><text v-text="item.name"></text></a></span></li>
                <li>作者：<span><text v-text="item.author"></text></span></li>
                </ul>
            
			</div>
			<div class="content" style="display: none;">
			<!--美术-->
			
				<ul v-for="(index,item) in data.detailed" v-if="item.genre=='美术'">
                <li><img src="{{item.picture}}"/></li>
                <li>书名：<span><a v-link="{name:'summary'}"><text v-text="item.name"></text></a></span></li>
                <li>作者：<span><text v-text="item.author"></text></span></li>
                </ul>
            
			</div>
            <div class="content" style="display: none;">
            <!--计算机-->
            
				<ul v-for="(index,item) in data.detailed" v-if="item.genre=='计算机'">
                <li><img src="{{item.picture}}"/></li>
                <li>书名：<span><a v-link="{name:'summary'}"><text v-text="item.name"></text></a></span></li>
                <li>作者：<span><text v-text="item.author"></text></span></li>
                </ul>
            
			</div>
            <div class="content" style="display: none;">
            <!--文学-->
            
				<ul v-for="(index,item) in data.detailed" v-if="item.genre=='文学'">
                <li><img src="{{item.picture}}"/></li>
                <li>书名：<span><a v-link="{name:'summary'}"><text v-text="item.name"></text></a></span></li>
                <li>作者：<span><text v-text="item.author"></text></span></li>
                </ul>
            
			</div>
            <div class="content" style="display: none;">
            <!--艺术-->
            
				<ul v-for="(index,item) in data.detailed" v-if="item.genre=='艺术'">
                <li><img src="{{item.picture}}"/></li>
                <li>书名：<span><a v-link="{name:'summary'}"><text v-text="item.name"></text></a></span></li>
                <li>作者：<span><text v-text="item.author"></text></span></li>
                </ul>
            
			</div>
			<div class="content" style="display: none;">
			<!--生活-->
			
				<ul v-for="(index,item) in data.detailed" v-if="item.genre=='生活'">
                <li><img src="{{item.picture}}"/></li>
                <li>书名：<span><a v-link="{name:'summary'}"><text v-text="item.name"></text></a></span></li>
                <li>作者：<span><text v-text="item.author"></text></span></li>
                </ul>
            
			</div>
            <div class="content" style="display: none;">
            <!--科技-->
            
				<ul v-for="(index,item) in data.detailed" v-if="item.genre=='科技'">
                <li><img src="{{item.picture}}"/></li>
                <li>书名：<span><a v-link="{name:'summary'}"><text v-text="item.name"></text></a></span></li>
                <li>作者：<span><text v-text="item.author"></text></span></li>
                </ul>
            
			</div>
            <div class="content" style="display: none;">
            <!--学术-->
            
				<ul v-for="(index,item) in data.detailed" v-if="item.genre=='学术'">
                <li><img src="{{item.picture}}"/></li>
                <li>书名：<span><a v-link="{name:'summary'}"><text v-text="item.name"></text></a></span></li>
                <li>作者：<span><text v-text="item.author"></text></span></li>
                </ul>
            
			</div>
            <div class="content" style="display: none;">
            <!--管理-->
            
				<ul v-for="(index,item) in data.detailed" v-if="item.genre=='管理'">
                <li><img src="{{item.picture}}"/></li>
                <li>书名：<span><a v-link="{name:'summary'}"><text v-text="item.name"></text></a></span></li>
                <li>作者：<span><text v-text="item.author"></text></span></li>
                </ul>
            
			</div>
            <div class="content" style="display: none;">
            <!--音乐-->
            
				<ul v-for="(index,item) in data.detailed" v-if="item.genre=='音乐'">
                <li><img src="{{item.picture}}"/></li>
                <li>书名：<span><a v-link="{name:'summary'}"><text v-text="item.name"></text></a></span></li>
                <li>作者：<span><text v-text="item.author"></text></span></li>
                </ul>
            
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
</template>
<script type="text/javascript">
import mouse  from '../../static/js/mouse.js'
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
.guangao{
	margin: 0 auto;
	width: 855px;
	height:100%;
	border-color:#CCC;
	border-width:0px;
	border-style:solid;
	}
.guangao ul li{
	list-style-type:none;
	}
.guangao ul li img{
	width: 253px;
	height:100px;
	}
.groom{
	margin: 0 auto;
	width: 774px;
	height: 560px;
	border-top: 2px solid #057463;
	margin-bottom:20px;
	}
.seniority{
	margin: 0 auto;
	width: 774px;
	height: 560px;
	border-top: 2px solid #057463;
	margin-bottom:20px;
	}	
#tabs{
	margin: 0 auto;
	width: 774px;
	height: 620px;
	border: 0px solid #E7E5E4;
	margin-bottom:20px;
}
.classify{
	margin: 0 auto;
	width: 774px;
	height:40px;;
	font-size:28px;
	color:#057463;
	border-color:#CCC;
	border-width:0px;
	border-style:solid
	}
#tabs .tabs-top{
	width: 774px;
	height: 33px;
	border: 1px solid #FFF;
	border-bottom: 1px solid #057463;
}
#tabs .tabs-top ul{
	list-style: none;
	margin-left:-42px;
}
#tabs .tabs-top ul li{
	display: block;
	float: left;
	height: 22px;
	line-height: 22px;
	margin-top: -17px;
	padding-left: 20px;
	padding-right: 20px;
	color:#666666;
	cursor: pointer;
}
#tabs .tabs-top ul li.choosed{
	height:32px;
	border: 2px solid #057463;
	border-top: 2px solid #057463;
	border-bottom: 1px solid #FFF;
	color: #057463;
	font-weight:bold;
}

#tabs .tabs-body{
	padding: 5px;
}

.content ul li{
	list-style-type:none;
	margin-bottom:5px;
	font-size:12px;
	color:#057463;
	}
.content ul li img{
	margin-top:10px;
	margin-left:-20px;
    width:160px;
	height:190px;
	border-color:#CCC;
	border-width:1px;
	border-style:solid
	}
.content ul{
	width:160px;
	height:255px;
	float:left;
	margin-left:40px;
	border-color:#CCC;
	border-width:1px;
	border-style:solid;
	}
a{
	text-decoration: none;
}
</style>