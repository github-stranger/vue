<template>
<!--关于我们-->
<div>
<!--头部-->
<heads></heads>
</div>

<div id="tou">
<div class="guanyu">关于我们<br/><span>2017-03-30</span></div>
<span>---------------------------------------------------------------------------</span>
<img src="../../static/images/women.jpeg"/><br/><br/>
<div class="jieshao">
<span>一、网站介绍:</span><br/>
<a>如丝雨。</a><br/>
<a>丝雨如雾的放学后。</a><br/>
<a>如晚霞。</a><br/>
<a>教室那如火的景致。</a><br/> 
<a>如冬雪。</a><br/>
<a>邂逅之日的白夜，黑伞。</a><br/>
<a>--那 正是</a><br/>
<a>如梦似幻的 岁月的遗痕。</a><br/>
<span>二、创立时间:</span><br/>
<a>2017-03-30</a><br/>
<span>三、加入我们：</span><br/>
<a>微信公众号:QQ1778095105</a><br/>
<a>联系我们:QQ1778095105</a><br/>
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
		}
	}
</script>

<style type="text/css">
#tou{
	margin-top:20px;
	width: 800px;
	margin:0 auto;
	margin-top:20px;
}
.guanyu{
	font-size:25px;
	color:#7CB1B8;
	}
.guanyu span{
	font-size:20px;
	}
span{
	color:#7CB1B8;
}
.jieshao{
	font-size:25px;
	}
.jieshao a{
	margin-left:50px;
	color: #666;
	}
</style>