<style scoped lang="less">
.keyboard {
	height: 250px;
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	background: white;
	z-index: 999;
	.done {
		height: 50px;
		background: #f9f9f9;
		border: .5px solid #d6d6d6;
		border-right: none;
		border-left: none;
		padding-right: 10px;
		border-bottom: none;
		display: flex;
		align-items: center;
		justify-content: flex-end;

		.text {
			color: #007eff;
		}
	}
	.list {
		height: 200px;
			.key:active{
				background: #e2e2e2;
			}
			.key {
				height: 25%;
				width: 33.33%;
				float:left;
				
				border-right: .5px solid #d6d6d6;
				border-top: .5px solid #d6d6d6;
				
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 30px;
			}
			.key:nth-child(3n) {
				border-right:none;
			}
	}
}
.del {
	font-size: 28px;
}

.animated {
	animation-duration: .2s;
	animation-fill-mode: both;
}
@keyframes slideInDown {
	from {
		transform: translate3d(0, 0, 0);
		visibility: visible;
	}
	to {
		transform: translate3d(0, 100%, 0);
		display: none;
	}
}
@keyframes slideInUp {
	from {
		transform: translate3d(0, 100%, 0);
		visibility: visible;
	}
	to {
		transform: translate3d(0, 0, 0);
	}
}
.slide-enter-active {
	animation-name: slideInUp;
}
.slide-leave-active {
	animation-name: slideInDown;
}
</style>
<template>
	<transition name="slide">
		<div class="keyboard animated" v-show="show"  @touchstart.stop="fn" @touchmove.prevent="fn">
			<!-- 顶部完成 -->
			<div class="done">
				<p class="text" @touchstart="complete">完成</p>
			</div>
			<!-- 键盘区域 -->
			<div class="list">
				<div class="key" @touchstart="typing('1')">1</div>
				<div class="key" @touchstart="typing('2')">2</div>
				<div class="key" @touchstart="typing('3')">3</div>
				<div class="key" @touchstart="typing('4')">4</div>
				<div class="key" @touchstart="typing('5')">5</div>
				<div class="key" @touchstart="typing('6')">6</div>
				<div class="key" @touchstart="typing('7')">7</div>
				<div class="key" @touchstart="typing('8')">8</div>
				<div class="key" @touchstart="typing('9')">9</div>
				<div class="key dot" 
					@touchstart="typing('.')">
					<i class="iconfont icon-dot"></i>
				</div>
				<div class="key" 
					@touchstart="typing('0')">0</div>
				<div class="key" 
					@touchstart="typing('')">
					<i class="iconfont icon-keyboard-delete del"></i>
				</div>
			</div>
		</div>
	</transition>
</template>
<script>	
	export default {
		props: ['show'],
		data () {
			return {
				keyboard: false,
			}
		},
		methods: {
			/*防止点击完成按钮左边的空白区域收起键盘*/
			fn () {},
			/*
				将当前点击的值提交给 输入框
				typeof val 始终恒定为 String 类型
			*/
			typing (val) {
				this.$emit('typing', val);
			},
			/*点击完成*/
			complete () {
				this.$emit('complete');
			}	
		}
	}
</script>