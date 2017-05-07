## wc-keyboard
基于 vue 封装的一个自定义数字键盘, 仿照大众点评闪惠买单的价格输入键盘

## 原因
我对这个没多大兴趣, 但是工作中需要有这么一个输入价格的框
1. 原生的 input type=number没有办法做到一些验证, 比如0000000
2. 其次, 对于 1.2 这样的输入也认定为非法.
所以迫不得已我自己实现了一个

## 感谢
[xwpongithub/better-keyboard](https://github.com/xwpongithub/better-keyboard)

## 原生的问题
刚开始选用 input type = tel, 发现移动端没有办法输入小数
换成 input type = text, 发现唤起的键盘不是数字键盘
最终选择 input type = number(后续简称为 number框), 又发现验证规则有部分实现不了

