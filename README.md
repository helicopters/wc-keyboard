## wc-keyboard
基于 vue 封装的一个自定义数字键盘, 仿照大众点评闪惠买单的价格输入键盘

## 长这样
![demo](https://www.tuchuang001.com/images/2017/06/06/screencapture-192-168-1-117-10485-1496716411892.png)

## 原因
1. 刚开始选用 input type = tel, 发现移动端没有办法输入小数
2. 换成 input type = text, 发现唤起的键盘不是数字键盘
3. 最终选择 input type = number, 又发现验证规则有部分实现不了

## 参考
[xwpongithub/better-keyboard](https://github.com/xwpongithub/better-keyboard)


## 使用方法
```shell
npm i wc-keyboard --save
```
```javascript
import wcKeyBoard from 'wc-keyboard'
import 'wc-keyboard/style.css'
Vue.use(wcKeyBoad);

<wc-keyboard :data="keyboardConfig"/>
config = {
	inter: 5,  // 整数位数限制
	decimal: 2 // 小数位数限制,
	label: '' // 默认 ‘消费金额’,
	placeholder: '' 默认 '询问服务员后输入'，
	highlightColor: ''  // 高亮的颜色
}
```
