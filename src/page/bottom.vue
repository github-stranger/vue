<template>
<!--底部-->

<div class="header-b">
 	  <div class="container">
 	       <div class="header-main">
 	        	<div class="logo">
 	        		<a v-link="{name: 'index'}"><img src="../../static/images/logo.png"></a>
 	        	</div> 
 	        	<div class="header-navg">
 	        		<ul class="res">
 	        			<li><a>©2017 BOOK 使用BOOK前必读 | BOOK协议 | BOOK合作平台</a></li>
 	        		</ul>
 	        	</div>
 	        	<div class="clearfix"></div>
 	       </div>
 	  </div>
</div>
</template>

<style type="text/css">

html, body{
   font-family: 'Open Sans', sans-serif;
   background:#fff; 
   margin:0px;
   padding:0px;
}

.header{
	   background:url(../../static/images/banner.jpg)no-repeat;
	   background-size:cover;
	   min-height:580px;
}
.header-b{
	   background:url(../../static/images/banner.jpg)no-repeat;
	   background-size:cover;
	   min-height:90px;
}
.logo{
	float:left;
	width:39%;
	text-align:center;
	margin-left:0px;
}
.header-navg{
	float:right;
	width:59%;
	text-align:center;
}
span.menu{
	display:none;
}
.header-navg  ul{
	list-style:none;
	margin: 0px;
    padding: 0px;
	margin-left:-50px;
	font-size:20px;
	
}
.header-navg ul li{
	margin:10px 20px 0px 0px;
	display:inline-block;
}
.header-navg ul li a{
	 color:#fff;
	 font-size:14px;
	 font-weight:400;text-decoration:none;
}
.header-main {
     padding-top: 2em;
}
</style>