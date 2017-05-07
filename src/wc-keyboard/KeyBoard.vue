<style lang="less">
.keyboard{
	height: 260px;
	width: 100%;
	position: fixed;
	bottom: 0;
	z-index: 1001;
	// transform:translateY(100%);
	// display: none;
	.done{
		height: 60px;
		background: #f9f9f9;
		border:1px solid #d6d6d6;
		border-bottom: none;
		display: flex;
		align-items:center;
		justify-content:flex-end;
		padding-right: 10px;

	}
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
			.dot {
				position: relative;
				span{
					position: absolute;
					top: -6px;
				}
			}
		}
	}
}

.input-box{
    height: 44px;
    border: 1px solid #e4e4e4;
    background-color: #fff;
    // margin: 12px 12px 0 12px;
	display: flex;
	align-items:center;
	.content {

	    // padding: 12px 0 12px 7px;
	    font-size: 20px;
	    // line-height: 
	    display: flex;
	    // height: 100%;
	    // 实际闪烁的光标
		span{
		    background-color: black;
		    width: 2px;
		    margin-left: 2px;
		    height: 28px;
		}
		.placeholder{
		    color: #acacac;
		    font-size: 20px;		
		}
	}
}
.show {
	visibility: visible;
}
.hide {
	visibility: hidden;
}

 .animated {
  animation-duration: .2s;
  animation-fill-mode: both;
}
@keyframes slideInUp {
  from {
  	
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
  	// display: block;
    transform: translate3d(0, 0, 0);
  }
}

.slideInUp {
  animation-name: slideInUp;
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

.slideInDown {
  animation-name: slideInDown;
}
.slide-enter-active{
  // transition: opacity .5s
  animation-name: slideInUp;
}
.slide-leave-active {
  // opacity: 0
   animation-name: slideInDown;
}
.active{
	background: #c3c7cf;
}

body {
	font-family: -apple-system, BlinkMacSystemFont, "PingFang SC","Helvetica Neue",STHeiti,"Microsoft Yahei",Tahoma,Simsun,sans-serif;
	font-size: 16px;
}
body{
	user-select:none;
}

</style>
<template>
<div class="contaier">


	<div class="input-box" @click="getUp">
		<!-- 光标部分 -->
		<div class="content">
			<p class="input">
				{{val}}
			</p>
			<span :class="{'show':cursor,'hide':!cursor}"></span>
			<p class="placeholder" v-if="val.length === 0">
				{{placeholder}}
			</p>
		</div>
	</div>
	

	<transition name="slide">
	<div class="keyboard animated" v-if="keyboard">
		<div class="done" >

			<p class="text" @touchstart="done">完成</p>
		</div>
		<div class="list">
<!-- 			<div class="item">
				<div class="key" data-key="1">1</div>
				<div class="key" data-key="2">2</div>
				<div class="key" data-key="3">3</div>
			</div>
			<div class="item">
				<div class="key" data-key="4">4</div>
				<div class="key" data-key="5">5</div>
				<div class="key" data-key="6">6</div>
			</div>
			<div class="item">
				<div class="key" data-key="7">7</div>
				<div class="key" data-key="8">8</div>
				<div class="key" data-key="9">9</div>
			</div>
 -->
			<div class="item" v-for="(list, key) in keyList" :key="key">
				<div class="key" v-for="(val, iKey) in list" :key="iKey"  @touchstart="keyPress(val)" >
					{{val}}
				</div>
			</div>
			<div class="item">
				<div class="key dot"   @touchstart="keyPress('.')" >
					<span data-key=".">.</span>
				</div>
				<div class="key" data-key="0"   @touchstart="keyPress(0)" >0</div>
				<div class="key" @touchstart="del">
					<img src="./imgs/keyboard-delete.png" alt="">
				</div>
			</div>
		</div>
	</div>
	</transition>


</div>
	




</template>
<script>
/*
1 光标的控制
2 placeholder 的控制
3 唤起和消失的动画效果




值验证, 因为是自定义的 input box, 所以不存在黏贴的事情, 因为你放不进来, 

键盘控制了只能输入 数字和小数点, 
所以验证, 主要就是验证, 输入的值是不是合法的.

不合法的情况
以多个 00 开头
输入多个 .. 
输入  1.2.3


验证规则暂时全部通过, 没有发现额外的事情。


细节方面还是有很多东西需要完善, 我草关键我对这个没有啥兴趣啊, 我不想写关键是.

=== 关于价格输入框的问题
它这个有点复杂, 各种问题, 我最后想要选择自定义实现一个虚拟键盘来操作



input[type=number]:invalid {
    background-color: #FFCCCC;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button{
    -webkit-appearance: none !important;
    margin: 0; 
}
input[type="number"]{-moz-appearance:textfield;}




The specified value " " is not a valid number. The value must match to the following regular expression: -?(\d+|\d+\.\d+|\.\d+)([eE][-+]?\d+)?

应该是自己提示出来的


 number 框, 默认允许输入 +-. 和数字, 并且在你输入 +-. 的时候, 
 是不算在 number 框的长度之内的. 比如你输入 ----, 此时 number 框的 value 长度也是 0 而不是 4

 并且 number 好像即时

chrome中， 在.
currentTarget.validity.valid
这个属性里，可以判断值是否正常，如果填入了非正常值，这个属性就是true，正常值的话就是false。
但是火狐下.validity里没有badInput属性，它直接.value可以正常返回非数字的字符串。
IE8、9也可以直接.value获取到非数字的字符串值，不会返回空字符串。



刚开始选用 input type = tel, 发现移动端没有办法输入小数
换成 input type = text, 发现唤起的键盘不是数字键盘
最终选择 input type = number(后续简称为 number框)

经过检测之后发现, number 框
在 pc chrome 浏览器, 仅允许输入 +-. 数字
在 移动端, 微信, safari 中, 可以输入任意玩意
(并且在微信中会出现一个警惕欺诈的提示)

所以我们要给输入的内容设置验证规则,
我们的输入框用来输入金额的

1 只能输入 数字和小数点

*/
	export default {
		name: 'keyboard',
		data () {
			return {
				cursor: false,
				val: '',
				keyboard: false,
				intervalID: -1,
				placeholder: '输入金额',
				keyList: [
						[1,2,3],
						[4,5,6],
						[7,8,9],
						// []
					]
			}
		},
		methods: {
			// active (e) {
			// 	e.target.classList.add('active')
			// },
			// unactive (e) {
			// 	e.target.classList.remove('active')
			// },
			blink (e) {
				this.cursor = true;
				clearInterval(this.intervalID);
				this.intervalID = setInterval(()=>{
					this.cursor = !this.cursor;
				}, 800)
			},
			done () {
				this.keyboard = false;
				clearInterval(this.intervalID);
				this.cursor = false;
				// this.checkVal(this.val);/
				if (this.val.substr(this.val.length - 1, 1) === '.') {
					// this.val = this.val
					// console.log(12)
					// this.val.replace('.', '.00')
					let list = this.val.split('.');
					list.push('.00');
					this.val = list.join('');

				if (this.val === '0.00') {
					// this.val = '0.00'
					this.val = ''
				}

				}
				if (this.val === '0') {
					// this.val = '0.00'
					this.val = ''
				}
			},
			getUp () {
				this.keyboard = true;
				this.blink();
			},
			keyPress (val) {
				// let v = e.target.getAttribute('data-key');
				this.setVal(this.checkVal(val));
			},
			checkVal (v) {
				let curV = this.val;
				let curVL = this.val.length;

				// 如果当前输入的值是 .
				if (v === '.') {
					// 如果当前的值长度为 0, 说明是在首位输入 ., 不允许
					if (curVL === 0) {
						// return '';
						v = ''
					}
					// 如果当前值的长度不为 0, 需要查看当前值中是否已经存在 .
				    else {
				    	if (curV.indexOf('.') > -1) {
				    		// console.log('ues')
				    		v = ''
				    	}
				    }
				}

				// 如果输入值为 0
				// if (v === '0') {
					// 如果当前值的首位已经是 0, 并且当前值长度还为 1, 不允许
					if (curV.slice(0, 1) === '0' && curVL === 1 && v!=='.'){
						v = ''
					}
				// }
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
				this.val = this.val.slice(0,-1)
			}
		}
	}
</script>