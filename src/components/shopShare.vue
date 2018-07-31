<template>
	<div class="shopShare">
		<div>
			<span class="u-arrow"onclick="javascript:history.back()"></span>
			<span>店铺分享</span>
		</div>
		<img src="../../static/img/shopSharePic.jpg">
	</div>
</template>

<script type="text/javascript">
</script>

<style scoped lang="less">
	.shopShare {
		div {
			text-align: center;
			height: 60px;
			line-height: 60px;
			span {
				&:first-child {
					display: inline-block;
					width: 7px;
					height: 7px;
					border-top: 1px solid #999999;
					border-right: 1px solid #999999;
					transform: rotate(-135deg);
					position: relative;
					left: -37%;
				}
			}
		}
		img {
			width: 100%;
		}
	}
</style>