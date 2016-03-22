# Mass
Some good javascript thinking collections

## Features
- collected all good patterns implemention and good javascript functions
- some thinking in work or daily life  

## 关于offsetWidth、 scrollWidth、 clientWidth

假设某一个元素的横纵向滚动条都拖动到最末端，则offsetWidth、clientWidth、scrollWidth等属性相应的范围如下图所示：  
[image](http://images2015.cnblogs.com/blog/459873/201512/459873-20151225092601874-788469412.jpg)

- offsetWidth,offsetHeight 是元素盒模型的高宽，跟浏览器审查元素的尺寸一致
- clientWidth，clientHeight 对应的是盒模型除去边框后的那部分区域的宽度和高度，不包含滚动条的宽度 
- scrollWidth，与scrollHeight对应的是滚动区域的宽度和高度，但是不包含滚动条的宽度！滚动区域由padding和content组成
- 可以参看 /assets/position.html

## getBoundingClientRect()方法 （第一次用）

这个方法返回一个矩形对象，包含四个属性：left、top、right和bottom。分别表示元素各边与页面上边和左边的距离。
**注意**：
IE、Firefox3+、Opera9.5、Chrome、Safari支持，在IE中，默认坐标从(2,2)开始计算，导致最终距离比其他浏览器多出两个像素，我们需要做个兼容。

```javascript
functiongGetRect (element) {

    var rect = element.getBoundingClientRect();

    var top = document.documentElement.clientTop;

    var left= document.documentElement.clientLeft;

    return{

        top    :   rect.top - top,

        bottom :   rect.bottom - top,

        left   :   rect.left - left,

        right  :   rect.right - left

    }

}
```


