## wc-keyboard
基于 vue 封装的一个自定义数字键盘, 仿照大众点评闪惠买单的价格输入键盘

## 原因
1. 刚开始选用 input type = tel, 发现移动端没有办法输入小数
2. 换成 input type = text, 发现唤起的键盘不是数字键盘
3. 最终选择 input type = number, 又发现验证规则有部分实现不了

## 感谢
[xwpongithub/better-keyboard](https://github.com/xwpongithub/better-keyboard)


## 使用方法
```shell
npm i wc-keyboard --save
```
```javascript
import KeyBoard from 'wc-keyboard'
import 'wc-keyboard/style.css'
Vue.use(KeyBoad);

.key-board
	<key-board :data="config">
config = {
	inter: 5,  // 整数位数限制
	decimal: 2 // 小数位数限制,
	label: '' // 默认 ‘消费金额’,
	placeholder: '' 默认 '询问服务员后输入'，
	highlightColor: ''  // 高亮的颜色
}
```

## 说明
1. 个人还是建议直接 clone 当前项目, 这样修改样式比较方便一点
2. 使用的时候需要在外层套一个元素, 用来控制 key-board 的样式, 因为可能你需要自己定义样式
   所以我没有给 keyboard 一个默认的样式, 这样你不好改.
3. 我在 src/wc-keyboard/KeyBoard.vue 里面留了详细的注释, 也方便你在这个基础上自行开发
4. 按钮点击的时候没有做 active 效果

## 备注
1. 如果这玩意你用到了, 出现了问题, 记得和我说, 我会及时修改的.
