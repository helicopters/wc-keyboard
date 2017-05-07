<style lang="less" scoped>
	.container {
		font-family: -apple-system, BlinkMacSystemFont, "PingFang SC","Helvetica Neue",STHeiti,"Microsoft Yahei",Tahoma,Simsun,sans-serif;
		user-select:none;
	}
	// 自定义的输入框
	.input-box{
		display: flex;
		align-items:center;
		justify-content:space-between;

		// 输入框样式
	    height: 48px;
	    border: 1px solid #dadada;
	    background-color: #fff;
	    padding: 0 10px;
	    margin:0 10px;
	    border-radius: 4px;
	    .label{
	    	color:#333;
	    }
		.content {
		    display: flex;
		    // 输入的样式
			.input {
				font-size: 20px;
				color: #313131;
			}
			// 光标样式
			.cursor{
			    background-color: #4788c5;
			    width: 2px;
			    margin-left: 2px;
			}
			// 占位样式
			.placeholder{
			    color: #ccc;		
			}
			// 羊头
			.currency {
				color:#c1c1c1;
			}
		}
	}
	// 键盘样式
	.keyboard{
		height: 260px;
		width: 100%;
		position: fixed;
		bottom: 0;
		z-index: 999;
		// 完成 条 样式
		.done{
			height: 60px;
			background: #f9f9f9;
			border:1px solid #d6d6d6;
			padding-right: 10px;
			border-bottom: none;

			display: flex;
			align-items:center;
			justify-content:flex-end;
			.text{
				color:#007eff;
			}
			
		}
		// 键盘区域
		.list {
			height: 200px;
			.item{
				height: 25%;
				border-top:1px solid #d6d6d6;
				display: flex;
				.key{
					border-right: 1px solid #d6d6d6;
					flex:1;
					display: flex;
					align-items:center;
					justify-content:center;
					font-size: 30px;
				}
				.key:first-child{
					border-left: 1px solid #d6d6d6;
				}
				// 点点样式
				.dot {
					position: relative;
					span{
						position: absolute;
						top: -6px;
					}
				}
				.del {
					font-size: 28px;
				}
			}
		}
	}

// 动画效果
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
.slide-enter-active{
  animation-name: slideInUp;
}
.slide-leave-active {
   animation-name: slideInDown;
}



</style>
<template>
	<div class="container">

		<!-- 输入框部分 -->
		<div class="input-box" @touchstart="getUp">
			<!-- 左侧内容 -->
			<p class="label">消费总额 : </p>

			<!-- 右侧内容 -->
			<div class="content">
				
				<p class="input">
					<span class="currency" v-show="val">
						¥
					</span>
					{{val}}
				</p>
				<!-- placeholder -->
				<p class="placeholder" v-if="val.length === 0">
					询问服务员后输入
				</p>
				<!-- 光标 -->
				<p class="cursor" :style="{visibility: cursor ? 'visible' : 'hidden'}"></p>

			</div>
		</div>
		
		<!-- 键盘部分 -->
		<transition name="slide">
			<div class="keyboard animated" v-if="keyboard">
				<div class="done" >
					<p class="text" @touchstart="done">完成</p>
				</div>
				<!-- 键盘区域 -->
				<div class="list">
					<div class="item" v-for="(list, key) in keyList" :key="key">
						<div class="key" 
							v-for="(val, iKey) in list" 
							:key="iKey"  
							@touchstart="keyPress(val)" >
							{{val}}
						</div>
					</div>
					<div class="item">
						<div class="key dot" @touchstart="keyPress('.')" >
							<span data-key=".">.</span>
						</div>
						<div class="key" data-key="0" @touchstart="keyPress(0)" >0</div>
						<div class="key" @touchstart="del">
							<!-- <img src="./imgs/keyboard-delete.png" alt=""> -->
							<i class="iconfont icon-keyboard-delete del"></i>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
	<!-- end -->
</template>
<script>
	export default {
		name: 'keyboard',
		data () {
			return {
				cursor: false,
				val: '',
				keyboard: false,
				intervalID: -1,
				keyList: [
						[1,2,3],
						[4,5,6],
						[7,8,9],
					]
			}
		},
		methods: {
			blink (e) {
				this.cursor = true;
				clearInterval(this.intervalID);
				this.intervalID = setInterval(()=>{
					this.cursor = !this.cursor;
				}, 600);
			},
			done () {
				this.keyboard = false;
				clearInterval(this.intervalID);
				this.cursor = false;
				if (this.val.substr(this.val.length - 1, 1) === '.') {
					let list = this.val.split('.');
					list.push('.00');
					this.val = list.join('');
					if (this.val === '0.00') {
						this.val = ''
					}
				}
				if (this.val === '0') {
					this.val = ''
				}
				this.$emit('input', parseFloat(this.val));
			},
			getUp () {
				this.keyboard = true;
				this.blink();
			},
			keyPress (val) {
				this.setVal(this.checkVal(val));
			},
			checkVal (v) {
				let curV = this.val;
				let curVL = this.val.length;

				// 如果当前输入的值是 .
				if (v === '.') {
					// 如果当前的值长度为 0, 说明是在首位输入 ., 不允许
					if (curVL === 0) {
						v = ''
					}
					// 如果当前值的长度不为 0, 需要查看当前值中是否已经存在 .
				    else {
				    	if (curV.indexOf('.') > -1) {
				    		v = ''
				    	}
				    }
				}
				// 如果当前值的首位已经是 0, 并且当前值长度还为 1, 不允许
				if (curV.slice(0, 1) === '0' && curVL === 1 && v!=='.'){
					v = ''
				}
				// 当前首先要存在小数点
				if (curV.indexOf('.') > -1) {
					let splitList = curV.split('.');
					// 限制小数位数 2
					if (splitList[1].length === 2) {
						v = ''
					}
					// 限制整数位 5
					if (splitList[0].length === 8) {
						v = ''
					}
				}
				// 如果不存在小数点,限制整数位数
				else {
					if (v === '.') {

					}
					else if (curV.length === 5) {
						v = ''
					}
				}
				return v;
			},
			setVal (v) {
				this.val = (this.val + v).trim();
			},
			del () {
				this.val = this.val.slice(0,-1);
			}
		}
	}
</script>