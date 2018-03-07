## wc-keyboard
基于 vue 封装的一个自定义数字键盘 + 输入框, 仿照大众点评闪惠买单.

## why?
1. 刚开始选用 input type = tel, 发现移动端没有办法输入小数
2. 换成 input type = text, 发现唤起的键盘不是数字键盘
3. 最终选择 input type = number, 又发现验证规则有部分实现不了

## 效果
![效果](https://i.loli.net/2017/07/12/5965aee99a4c9.gif)

## 更新
后来我想了下, 可以通过监听键盘点击事件, 然后拿到输入值的 keyCode 从而进行值的验证.
但是这样缺少一个自定义的输入框, 输入框无法实现类似大众点评那般. 

## 感谢
[xwpongithub/better-keyboard](https://github.com/xwpongithub/better-keyboard)

## 使用方法
```shell
npm i wc-keyboard --save
```
```javascript
import wcKeyBoard from 'wc-keyboard'
import 'wc-keyboard/style.css'
Vue.use(wcKeyBoard);

```

```html
<wc-keyboard
	v-model="value"   // 输入框的值
	inter="5"         // 限制整数位数
	decimal="2"       // 小数位数
	placeholder="询问服务员后输入"
	label="消费金额"/>
```
