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
		border: 1px solid #d6d6d6;
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
				
				border-right: 1px solid #d6d6d6;
				border-top: 1px solid #d6d6d6;
				
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 30px;
			}
			.key:nth-child(3n) {
				border-right:none;
			}
			.dot {
				span {
					height: 100%;
				}
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
		<div class="keyboard animated" v-if="keyboard">
			<!-- 顶部完成 -->
			<div class="done" @touchstart.stop="fn">
				<p class="text" @touchstart.stop="complete">完成</p>
			</div>
			<!-- 键盘区域 -->
			<div class="list">
				<div class="key" @touchstart.stop="typing(1)">1</div>
				<div class="key" @touchstart.stop="typing(2)">2</div>
				<div class="key" @touchstart.stop="typing(3)">3</div>
				<div class="key" @touchstart.stop="typing(4)">4</div>
				<div class="key" @touchstart.stop="typing(5)">5</div>
				<div class="key" @touchstart.stop="typing(6)">6</div>
				<div class="key" @touchstart.stop="typing(7)">7</div>
				<div class="key" @touchstart.stop="typing(8)">8</div>
				<div class="key" @touchstart.stop="typing(9)">9</div>
				<div class="key dot" 
					@touchstart.stop="typing('.')">
					<i class="iconfont icon-dot"></i>
				</div>
				<div class="key" 
					@touchstart.stop="typing(0)">0</div>
				<div class="key" 
					@touchstart.stop="typing('')">
					<i class="iconfont icon-keyboard-delete del"></i>
				</div>
			</div>
		</div>
	</transition>
</template>
<script>	

import Bus from './Bus'
	export default {
	created() {  
	        Bus.$on('focus', target => {  
	            this.keyboard = true;
	        });  
	        Bus.$on('blur', target => {  
	            this.keyboard = false;
	        });
		},
		data () {
			return {
				keyboard: false,
			}
		},
		methods: {
			/*防止点击完成按钮左边的空白区域收起键盘*/
			fn () {},
			/*输入*/
			typing (val) {
				Bus.$emit('typing', {
					value: val
				});
			},
			/*点击完成*/
			complete () {
				Bus.$emit('complete');
			}	
		}
	}
</script>