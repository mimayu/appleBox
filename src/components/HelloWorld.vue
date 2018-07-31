<template>
<div id="app">
	<header>
		<div class="header_top">
			<img class="logo" src="../../static/img/ch-shop.png">
			<div class="header_main">
					<h1>
						<b>上海瑞光贸易有限公司</b>
						<i class="iconfont icon-arrow"></i>
						<router-link to="/shopShare"><i class="iconfont icon-erweima"></i></router-link>
					</h1>
				<section class="brand">
					<span>现货商</span>
					<i class=" iconfont icon-qiyerenzheng"></i>
					<span>企业认证</span>	
				</section>
         	</div>
		</div>
	</header>
	<!--tab切换-->
	<section class="wrapper">
		<ul class="tab">
				<li class="load_default">默认</li>
				<li style="position: relative;">规格
					<i style="position: absolute;"class="iconfont icon-arrowup"></i>
					<i class="iconfont icon-arrowdown-copy"></i>
				</li>
				<li>价格
					<i style="position: absolute;"class="iconfont icon-arrowup"></i>
					<i class="iconfont icon-arrowdown-copy"></i>
				</li>
				<li>
					<router-link style="text-decoration: none;color: #999;"to="/Select">
						<i class="iconfont icon-arrowdown-copy">筛选</i>
					</router-link>
					
				</li>
			</ul>
			<ul class="content">
				<li  class="content_list active"  style="display: block;">
					<ul>
						<li>
							<div class="goods"><b class="goods_name">探板 45# 155*2000L</b><div><b class="price">4490</b><b class="unit">元/吨</b></div></div>
							<div class="details"><div><span class="ing">现货</span><span>沙钢 松铁库 （上海）</span></div><span>13.17</span></div>
						</li>
						<li>
							<div class="goods"><b class="goods_name">探板 45# 155*2000L</b><div><b class="price">4490</b><b class="unit">元/吨</b></div></div>
							<div class="details"><div><span class="ing">现货</span><span>沙钢 松铁库 （上海）</span></div><span>13.17</span></div>
						</li>
						<li>
							<div class="goods"><b class="goods_name">探板 45# 155*2000L</b><div><b class="price">4490</b><b class="unit">元/吨</b></div></div>
							<div class="details"><div><span class="ing">现货</span><span>沙钢 松铁库 （上海）</span></div><span>13.17</span></div>
						</li>
						<li>
							<div class="goods"><b class="goods_name">探板 45# 155*2000L</b><div><b class="price">4490</b><b class="unit">元/吨</b></div></div>
							<div class="details"><div><span class="ing">现货</span><span>沙钢 松铁库 （上海）</span></div><span>13.17</span></div>
						</li>
						<li>
							<div class="goods"><b class="goods_name">探板 45# 155*2000L</b><div><b class="price">4490</b><b class="unit">元/吨</b></div></div>
							<div class="details"><div><span class="ing">现货</span><span>沙钢 松铁库 （上海）</span></div><span>13.17</span></div>
						</li>
						<li><div class="goods"><b class="goods_name">探板 45# 155*2000L</b><div><b class="price">4490</b><b class="unit">元/吨</b></div></div>
							<div class="details"><div><span class="ing">现货</span><span>沙钢 松铁库 （上海）</span></div><span>13.17</span></div></li>
					</ul>
				</li>
				<li  class="content_list">
					<ul>
						<li>222222</li>
						<li>222222</li>
						<li>222222</li>
						<li>222222</li>
						<li>222222</li>
						<li>222222</li>

					</ul>
				</li>
				<li class="content_list">
					<ul>
						<li>333333</li>
						<li>333333</li>
						<li>333333</li>
						<li>333333</li>
						<li>333333</li>
						<li>333333</li>
					</ul>
				</li>
				<!--<li  class="content_list">
					<ul>
						<li>444444</li>
						<li>444444</li>
						<li>444444</li>
						<li>444444</li>
						<li>444444</li>
						<li>444444</li>
					</ul>
				</li>-->
			</ul>
	</section>
	<section class="contact_way">
		<h6>联系方式<i class="u_arrow_left"></i></h6>
		<table>
			<caption><span></span><span>aaa</span></caption>
			<tr>
				<td><i class="iconfont icon-phone"></i><span>13262526000</span></td>
				<td><i class="iconfont icon-phone"></i><span>021-65310234</span></td>
			</tr>
		</table>
		<!--<table>
			<caption><span></span><span></span></caption>
			<tr>
				<td><i class="iconfont icon-phone"></i><span></span></td>
				<td><i class="iconfont icon-phone"></i><span></span></td>
			</tr>
		</table>-->
	</section>

	<footer>
		<i class="iconfont icon-phone"></i>
		<span>联系卖家</span>
	</footer>
	</div>
</template>

<script type="text/javascript">
	$(document).ready(function(){
		$(".load_default").click(function(){
		
			$.post("http://203.195.132.44:23333/api/v1/wechat/get/company/id",
			{
			    company_id:"360"
			},
			function(data,status){
			    alert("Data: " + data + "\nStatus: " + status);
			});		
		});
		
		
		
	});

	$(function(){
			$(".tab li").click(function(){
				$(this).addClass("active").siblings().removeClass("active");
				$(".content .content_list").eq($(this).index()).show().siblings().hide();
			});
			$("footer").click(function(){
				$(".contact_way").css("display","block");
				$(".contact_way").css("position","fixed");
				$(".contact_way").css("bottom","0");
			});
			$(".u_arrow_left").click(function(){
				$(".contact_way").css("display","none");
			})
	});
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
 methods:{
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
header{background-color: #333;
	.header_top{padding:1.25rem;
	&:before{content:'';display: inline-block;vertical-align: middle;height: 100%;}
		.logo{border-radius:12px ;width: 20%;height: auto;margin-right: 1%;}
		.header_main{display: inline-block;vertical-align: top;
				h1{color: #fff;font-size: 1.125rem;margin-bottom: 3%;
					.icon-arrow{color: #999;font-size:0.875rem;position: absolute;right: 16%;top: 4%;}
					.icon-erweima{color: #fff;font-size: 2rem;position: absolute;right: 2%;}
				}
			.brand{display: flex;align-items: center;margin-left: 3%;
				span{
					&:first-child{width:26%;display:inline-block;text-align: center;background-color: #ffd44e;margin-right: 10px;font-size: 0.625rem;}
					&:last-child{color: #999;font-size: 0.75rem;}
				}
				.icon-qiyerenzheng{margin-right: 5px;color: red;}
			}
		}
	}
}
.wrapper{
	.tab{font-size: 1rem;color: #999;border-bottom: 2px solid #e8e8e8;height: 50px;
		display: flex;align-items: center;justify-content: space-around;}
		.content_list{display: none;
			ul li{padding:0  1.25rem;font-size: 0.875rem;background-color: #FFFFFF;border-bottom: 5px solid #e8e8e8;
				.goods{display: flex;align-items: center;justify-content: space-between;margin-bottom:6%;margin-top:3%;
					.goods_name{font-size: 0.875rem;}
					.price{font-size: 1.25rem;color:#e02424 ;padding-right: 5px;}
					.unit{font-size: 0.5rem;color: #ccc;}
				}
				.details{display: flex;align-items: center;justify-content: space-between;margin-bottom:3%;
					.ing{display:inline-block;width: 40px;height: 20px;line-height: 20px;text-align: center;border: 1px solid #f62020;border-radius: 5px;color:#f62020;font-size: 0.75rem;margin-right: 10px;}
				}
			}
		}
		
}
footer{background-color:#fff;position:fixed;border-top: 1px solid #ccc;bottom: 0;width: 100%;text-align: center;display: flex;align-items: center;justify-content: center;height: 40px;line-height: 40px;
	i{color: red;font-size: 1.75rem;position: absolute;top: 2%;left: 34%;}
	span{font-size: 1.25rem;padding-left: 6%;}
	
}
.contact_way{text-align: center;display: none;background-color: #fff;top: 18%;width: 100%;
h6{border-bottom: 1px solid #999;height: 32px;color: #999;
	.u_arrow_left{display:inline-block;width: 7px;height: 7px;border-top: 1px solid #999999;border-right: 1px solid #999999;transform: rotate(-135deg);position: relative;left: 34%;}
}
table{display: block;width:90%;margin: 0 auto;margin-top: 2%;
	caption{display: flex;align-items: center;padding-bottom: 2%;color: #999;
		span{
			&:first-child{width: 8px;height: 8px;display: block;background-color: red;border-radius:8px;}
			&:last-child{padding-left: 6px;font-size: 1.25rem;}
		}
	}
	tr{display: flex;
		td{
			border: 1px solid #ccc;flex: 1;display: flex;height: 50px;line-height: 50px;
			i{flex: 1;font-size: 2.1875rem;}
			span{flex: 3;color: dodgerblue;}
		}
	}
 }
}
</style>
