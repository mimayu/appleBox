<template>
	<div class="select">
		<div class="select_content">
			<p>品名</p>
			<ul>
				<li><a>热镀锌</a></li>
				<li><a>电镀锌</a></li>
				<li><a>普冷</a></li>
			</ul>
			<ul>
				<li><a>低合金卷</a></li>
				<li><a>链条刚</a></li>
				<li><a>热轧卷</a></li>
			</ul>
			<ul>
				<li><a>热卷</a></li>
				<li><a>热轧</a></li>
				<li><a>车轮刚</a></li>
			</ul>
		</div>
		<footer>
			<span>重置</span
			><span>确定</span>
		</footer>
	</div>
</template>

<script>
</script>

<style scoped lang="less">
.select{
	.select_content{width:90%;margin:0 auto;
	p{color: #999999;font-size:1rem;margin-bottom: 5%;margin-top: 5%;}
		ul{display: flex;margin-bottom: 6%;
			li{flex:1;text-align: center;margin-right: 4%;border-radius: 7px;
			height: 45px;line-height: 45px;background-color: #E8E8E8;
			}
		}
	}
	footer{position:absolute;bottom: 0;width: 100%;text-align: center;border-top: 1px solid #CCCCCC;
		span{width:50%;display: inline-block;height: 60px;line-height: 60px;
		&:last-child{background-color: red;}
		}
	}
}

</style>