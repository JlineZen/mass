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


