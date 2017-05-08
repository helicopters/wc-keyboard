<style scoped lang="less">
	.keyboard-box {
		font-family: -apple-system, BlinkMacSystemFont, "PingFang SC","Helvetica Neue",STHeiti,"Microsoft Yahei",Tahoma,Simsun,sans-serif;
		user-select:none;
		font-size: 16px;
		height: 100%;
		width: 100%;		
	}
	// 自定义的输入框
	.input-box{
		display: flex;
		align-items:center;
		justify-content:space-between;
		height: 100%;
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
		left: 0;
		background: white;
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
	<div class="keyboard-box" @touchstart="who">

		<!-- 输入框部分 -->
		<div class="input-box" @touchstart="getUp">
			<!-- 左侧内容 -->
			<p class="label">{{label}} : </p>

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
					{{placeholder}}
				</p>
				<!-- 光标 -->
				<p class="cursor" :style="{visibility: cursor ? 'visible' : 'hidden'}"></p>

			</div>
		</div>
		
		<!-- 键盘部分 -->
		<transition name="slide">
			<div class="keyboard animated" v-if="keyboard">
				<div class="done" >
					<p class="text" @touchstart="complete">完成</p>
				</div>
				<!-- 键盘区域 -->
				<div class="list">
					<div class="item" v-for="(list, key) in keyList" :key="key">
						<div 
							class="key" 
							v-for="(val, iKey) in list" 
							:key="iKey"  
							@touchstart="input(val)">
							{{val}}
						</div>
					</div>
					<div class="item">
						<div class="key dot" @touchstart="input('.')" >
							<span data-key=".">.</span>
						</div>
						<div class="key" data-key="0" @touchstart="input(0)" >0</div>
						<div class="key" @touchstart="del">
							<i class="iconfont icon-keyboard-delete del"></i>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>
<script>	
	// 光标闪烁间隔
	let CURSOR_DURATION = 600;
	export default {
		name: 'keyboard',
		props: {
			// 整数精度
			inter: {
				type: Number,
				default: 5
			},
			// 小数精度
			decimal: {
				type: Number,
				default: 2
			},
			label: {
				type: String,
				default: '消费金额'
			},
			placeholder: {
				type: String,
				default: '询问服务员后输入'
			}
		},
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
					],
				isMe: false
			}
		},
		mounted () {
			this.init();
		},
		methods: {
			// 监听 touchstart 事件
			// 为的是实现在 点击非输入框区域的时候, 自动隐藏掉键盘, 并且让输入框失去焦点
			init () {
				document.addEventListener('touchstart', e => {
					// this.complete();
					if (this.isMe) {
						this.isMe = false;
					} else {
						this.complete();				
					}
				}, false)
			},
			// 用户输入
			input (val, k, j) {
				// 1 检测用户当前输入 (前置检测)
				let checkedValue = this.preCheck(val);
				// 2 设置新值
				this.setVal( checkedValue );
			},

			// 监听输入框的 touchstart 事件
			who () {
				this.isMe = true;
			},
			// 点击输入框, 唤起键盘, 并且让光标闪烁
			getUp () {
				this.showKeyBoard();
				this.focus();
			},
			showKeyBoard () {
				this.keyboard = true;
			},
			hideKeyBoard () {
				this.keyboard = false;
			},
			// 输入框聚焦
			focus () {
				this.showCursor();
				// 防止多次点击的时候, 光标狂闪
				clearInterval(this.intervalID);
				// 让光标动起来
				this.intervalID = setInterval(()=>{
					this.cursor = !this.cursor;
				}, CURSOR_DURATION);
			},
			// 输入框失焦
			blur () {
				this.hideCursor();
				clearInterval(this.intervalID);
			},

			showCursor () {
				this.cursor = true;
			},
			hideCursor () {
				this.cursor = false;
			},
			// 点击完成
			complete () {
				// 1 输入框失焦
				this.blur();

				// 2 隐藏键盘
				this.hideKeyBoard();

				// 3 再次验证当前的值 (后置验证)
				this.nextCheck();

				// 4 发送当前的值 (原样发送, 一丝不动)
				this.$emit('input', this.val);
			},



			// 用户点击删除按钮
			del () {
				this.val = this.val.slice(0,-1);
			},
			// 检测用户的输入
			preCheck (val) {
				let v = val;  // 当前输入的值
				let cv = this.val;    // 当前已经输入的值

				// 1 禁止输入以 . 开始的值
				v = this.disallowDotStart(v, cv);

				// 2 禁止输入以 0 开始, 多个连续的 0, 比如 000
				v = this.disallowMoreZero(v, cv);

				// 3 输入的值的精度控制, 默认是 整数 5位, 小数两位
				v = this.checkAccuracy(v, cv)

				return v;
			},
			// 后置检查
			nextCheck () {
				// 如果当前值最后一位是 .
				if (this.val.substr(this.val.length - 1, 1) === '.') {
					this.val = this.val + '00';
				}
				// 如果当前值为 0, 使用 parseFloat, parseInt 对小数变成 0
				if (parseFloat(this.val) === 0) {
					this.val = ''
				}

			},
			// 检测规则集合
			disallowDotStart (v, cv) {
				// 如果输入的是一个点
				if (v === '.') {
					// 当前值又是个空
					if (cv.length === 0) {
						return '';
					} else if (cv.indexOf('.') > -1) {
						// 如果当前值不为空,看看现在的值是不是有 .
						return '';
					}
				}
				return v;
			},

			disallowMoreZero (v, cv) {
				// 如果当前的值的首位是 0
				if (cv.slice(0, 1) === '0' && cv.length === 1) {
					// 如果你现在输入的值是 . 
					if (v !== '.') {
						v = ''
					}
				}
				return v;
			},

			checkAccuracy (v, cv) {
				// 如果存在小数点, 只用判断小数的个数即可
				let list = cv.split('.');
				if (cv.indexOf('.') > -1) {
					v = this.checkDecimal(v, list[1]);
				} else {
					v = this.checkInteger(v, list[0]);
				}
				return v;				
			},
			checkInteger (v, cv) {
				// 如果当前的位数已经到达限制了
				if (cv.length === this.inter) {
					// 如果输入的是一个 .
					if (v === '.') {
						return v;
					}
					return ''
				}
				return v;
			},
			checkDecimal (v, cv) {
				if (cv.length === this.decimal) {
					return ''
				}
				return v;
			},
			// 设置用户输入
			setVal (newVal) {
				this.val = this.val + newVal;
			}
		}
	}
</script>