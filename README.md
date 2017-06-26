## wc-keyboard
基于 vue 封装的一个自定义数字键盘, 仿照大众点评闪惠买单的价格输入键盘

## 更新
我仔细想了下叫 wc-keyboard 是否合适, 因为这个玩意的本意是提供一个输入框, 用来输入
符合指定规则的金额, 并不是为了提供一个自定义的键盘, 所以我想着改一下, 不叫 wc-keyboard
叫做 wc-input. 但是改起来比较麻烦, 所以还是不动了.

## 更新2
本来希望可以给一个默认值, 但是想想这样用处不大

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

<wc-keyboard
	v-model="xxx"
	inter="5"
	decimal="2"
	placeholder="询问服务员后输入"
	label="消费金额"/>

```
