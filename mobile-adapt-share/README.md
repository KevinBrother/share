# doc

## 移动端设备基础概念

## 实现

总体来说是将px通过预定义的配置，根据不同的dpr计算为rem/vw，来实现不同屏幕大小的响应式伸缩

## 实现方案

### 媒体查询

缺点：不同分辨率的屏幕计算转换太复杂，媒体查询不能兼顾所有的尺寸
优点：简单，浏览器实现

### px 转 rem

#### 例题
>
> 已知 总宽度为 750px，元素375px， 求当前元素为多少rem？
>> 把总宽度分为 10 份，每一份为 1rem，则 1rem = 75px; 
>> 当前元素 [y]rem = 375 / 75。 则y = 5。 （ 375 /（750 * 10））


#### 获取html 元素的 font-size

``` javascript
    window.getComputedStyle(document.documentElement).getPropertyValue('font-size')
```

### px 转 vm

postcss-px-to-viewport的缺点, 就是只对style内的样式进行转换，行内样式没办法转换

## 参考文档

[移动端适配 px2rem/px2vw 的原理与实现](https://segmentfault.com/a/1190000015619303)
