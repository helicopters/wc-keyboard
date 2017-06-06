<style scoped lang="less">
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
	<div class="input-box" @touchstart.stop="focus">
		<p class="label">{{label}} : </p>
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
</template>
<script>
	import Bus from './Bus'
	export default {
		name: 'KeyboardInput',
		created () {
			Bus.$on('typing', this.typing);
			Bus.$on('complete', this.blur);
		},
		props: {
			inter: {
				type: Number,
				default: 5
			},
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
				bFocus: false,
				val: '',
				aIllegal: ['00', '01' ,'02','03','04','05','06','07','08','09', '0..', '.'],
				cursorDuration: 600
			}
		},
		methods: {
			del () {
				this.val = this.val.slice(0, -1);
			},
			typing ({value}) {
				if (value == '-1') {
					this.del();
					return;
				}
				let oldValue = this.val;
				this.val += value;
				if (!this.passCheck(this.val)) {
					this.val = oldValue;
				}
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
			
			// 非法输入
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
				// 整数部分
				if (v[0].length > this.inter) {
					return false;
				}					
				// 小数部分
				if (v[1] && (v[1].length) > this.decimal) {
					return false;					
				}
				return true;				
			},
			/*focus*/
			focus () {
				if (this.bFocus) {
					return;
				}
				this.bFocus = true;
				this.showCursor();
				clearInterval(this.intervalID);
				this.intervalID = setInterval(()=>{
					this.cursor = !this.cursor;
				}, this.cursorDuration);
				Bus.$emit('focus');
			},
			/*blur*/
			blur () {
				this.bFocus = false;
				this.hideCursor();
				clearInterval(this.intervalID);
				Bus.$emit('blur');
			},
			showCursor () {
				this.cursor = true;
			},
			hideCursor () {
				this.cursor = false;
			}	
		}
	}

</script>