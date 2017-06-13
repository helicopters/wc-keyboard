<style scoped lang="less">
.keyboard{
	font-family: -apple-system, BlinkMacSystemFont, "PingFang SC","Helvetica Neue",STHeiti,"Microsoft Yahei",Tahoma,Simsun,sans-serif;
	user-select:none;
	font-size: 16px;			
}
.input-box {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100%;
	border:1px solid #ccc;
	height: 45px;
	padding:10px;
	margin:10px;
	.label {
		color: #333;
	}
	.content {
		display: flex;
		.input {
			font-size: 20px;
			color: #313131;
		}
		.cursor {
			background-color: #4788c5;
			width: 2px;
			margin-left: 2px;
		}
		.placeholder {
			color: #ccc;
		}
		.currency {
			color: #c1c1c1;
		}
	}
}	
</style>
<template>
	<div class="keyboard">
		<!-- 自定义输入框 -->
		<div class="input-box" @touchstart.stop="focus">
			<!-- 左侧标签 -->
			<p class="label">{{label}} : </p>
			<!-- 右侧内容 -->
			<div class="content">
				<p class="input">
					<span class="currency" v-show="val">¥</span>
					{{val}}
				</p>
				<p class="placeholder" v-if="val.length === 0">
					{{placeholder}}
				</p>
				<!-- 光标 -->
				<p class="cursor" :style="{visibility: cursor ? 'visible' : 'hidden'}"></p>
			</div>
		</div>
		<!-- 自定义键盘 -->
		<keyboard 
			:show="keyboard"
			@typing="typing"
			@complete="blur"/>		
	</div>		

</template>
<script>
	import keyboard from './keyboard'
	export default {
		name: 'KeyboardInput',
		components: {
			keyboard
		},
		created () {
			document.addEventListener('touchstart', () => {
				this.blur();
			});
		},	
		props: {
			value: {},
			inter: {
				default: 5
			},
			decimal: {
				default: 2
			},
			label: {
				default: '消费金额'
			},
			placeholder: {
				default: '询问服务员后输入'
			}
		},
		data () {
			return {
				cursor: false,
				keyboard: false,
				/*value 在组件中的值*/
				val: '', 
				aIllegal: ['00', '01' ,'02','03','04','05','06','07','08','09', '0..', '.'],
				cursorDuration: 600,
			}
		},
		methods: {
			/*focus*/
			focus () {
				/*显示光标*/
				this.showCursor();
				/*闪烁光标*/
				this.blinkCursor();
				/*显示键盘*/
				this.showKeyboard();
			},
			blinkCursor () {
				clearInterval(this.intervalID);
				this.intervalID = setInterval(()=>{
					this.cursor = !this.cursor;
				}, this.cursorDuration);
			},
			unblinkCursor () {
				clearInterval(this.intervalID);
			},
			/*blur*/
			blur () {
				/*隐藏光标*/
				this.hideCursor();
				/*停止光标闪烁*/
				this.unblinkCursor();
				/*隐藏键盘*/
				this.hideKeyboard();
				/*
					附加 00, 如果用户输入了一个以 . 结尾的值就点完成了, 
					那么这个时候就在后面加上00
				*/
				this.toAddZero();

			},
			showKeyboard () {
				this.keyboard = true;
			},
			hideKeyboard () {
				this.keyboard = false;
			},
			showCursor () {
				this.cursor = true;
			},
			hideCursor () {
				this.cursor = false;
			},
			/*判读是否需要加0*/
			toAddZero () {
				if (this.val.slice(-1) === '.') {
					this.addZero();
				} 
			},
			addZero () {
				let v = '';
				for(let i =0;i<this.decimal;i++){
					v = v + '0';
				}
				this.val = this.val + v;
				this.notify();
			},
			notify () {
				this.$emit('input',this.val);
			},
			del () {
				this.val = this.val.slice(0, -1);
				/*删除值并不会触发值的校验, 所以需要手动再触发一次*/
				this.notify();
			},
			/*输入*/
			typing (value) {
				/*如果是点击删除*/
				if (value == '') {
					this.del();
				}
				/*保存旧的值*/
				let oldValue = this.val;
				/*获取新的值*/
				this.val = this.val + value;
				/*检验新值, 如果没有通过检测, 恢复值*/
				if (!this.passCheck(this.val)) {
					this.val = oldValue;
					return;
				}
				/*为了让外界同步输入, 需要发送事件*/
				this.notify();
			},
			passCheck (val) {
				/*验证规则*/
				let aRules = [
						this.illegalInput,
						this.illegalValue,
						this.accuracy
					]
				return aRules.every((item) => {
					return item(val);
				});
			},
			illegalInput (val) {
				if (this.aIllegal.indexOf(val)>-1) {
					return false;
				}
				return true;
			},
			/*非法值*/
			illegalValue (val) {
				if (parseFloat(val) != val) {
					return false;
				}	
				return true;			
			},
			/*验证精度*/
			accuracy (val) {
				let v = val.split('.')
				if (v[0].length > this.inter) {
					return false;
				}
				if (v[1] && (v[1].length) > this.decimal) {
					return false;					
				}
				return true;				
			}	
		}
	}

</script>