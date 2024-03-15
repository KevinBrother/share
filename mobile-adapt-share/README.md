# doc

## 移动端设备基础概念

## 实现

总体来说是将px通过预定义的配置，根据不同的dpr计算为rem/vw，来实现不同屏幕大小的响应式伸缩

## 实现方案

### 百分比

缺点：当前元素的宽度由父元素的宽度决定，实际开发计算很麻烦

### 媒体查询

缺点：不同分辨率的屏幕计算转换太复杂，媒体查询不能兼顾所有的尺寸
优点：简单，浏览器实现

### rem

rem = “The font size of the root element”

#### 例题
>
> 已知 总宽度为 750px，元素375px， 求当前元素为多少rem？
>> 把总宽度分为 10 份，每一份为 1rem，则 1rem = 75px;
>> 当前元素 [y]rem = 375 / 75。 则y = 5。 （ 375 /（750 * 10））

#### 获取html 元素的 font-size

``` javascript
    window.getComputedStyle(document.documentElement).getPropertyValue('font-size')
```

### vm

   1vw ＝ 1/100th viewport width

   缺点： 兼容性

#### px2vm

postcss-px-to-viewport的缺点, 就是只对style内的样式进行转换，行内样式没办法转换

## 移动端

### 屏幕相关概念
>
> dpr
>> 1px 实现

### 视口

#### 布局视口（layout viewport

由 document.documentElement.clientWidth 获得。不会变化，没有兼容性问题。其实是开始发时写的总 width。

#### 可视视口（visual viewport）

由 document.innerWidth 获得。会随着用户的缩放而改变，决定用户能看多少内容

#### 理想视口

由html 源标签设置
当写上meta标签后，width=device-width,使css像素与设备独立像素链接了起来。iphone的像素比为2，则1CSS像素(设备独立像素占据了 2*2个物理像素)

``` html
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
```

## 参考文档

[移动端适配 px2rem/px2vw 的原理与实现](https://segmentfault.com/a/1190000015619303)

[移动端手机屏幕与设计稿大小的关系](https://zhuanlan.zhihu.com/p/597225296)

[如何解决移动端 Retina 屏 1px 像素问题](https://github.com/sisterAn/blog/issues/117)

[物理像素、逻辑像素、CSS像素、PPI、设备像素比是什么](https://zhuanlan.zhihu.com/p/337202411)

[视口 Viewport](https://developer.mozilla.org/zh-CN/docs/Glossary/Viewport)

[理解设备像素、设备独立像素和css像素](https://juejin.cn/post/7042597141528707102)
