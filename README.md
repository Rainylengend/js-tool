![logo](http://songbw.cn/asset/img/icon.ico)

# 自用的js工具库

> 后续更新中

## js文件描述

### Tween.js

> 张鑫旭大佬的运动函数，自己在里面加了抛物线运动，[如何使用？](http://www.zhangxinxu.com/wordpress/?p=5828)

### tool.js 各种工具库

- ENUM

```
ENUM({a: 'x', b: '1', c: 3}) -> {a: 'x', b: '1', c: 3, x: 'a', '1': 'b', '3', 'c'}

ENUM(['MAN', 'WOMEN', 'OTHER']) -> {MEN: 0, WOMEN: 1, OTHER: 2, '0': 'MEN', '1': 'WOMEN', '2': 'OTHER'}
```

- deepClone -> 用于深度克隆数据的方法

- debounce -> 防抖函数

- throttle -> 节流函数

- formatDate -> 格式化时间的函数

```
使用方法: 
formatDate(date, [,format][, joiner])

date：Date的实例或者时间戳
formate：时间的格式默认为 'yy-mm-dd hh:min-ss' -> 2018-7-25 15:38:43
joiner: 连接符， 会把 - 链接符替换为 joiner

```


-----------------
- virtual-dom.js 创建虚拟dom的方法

使用方法(兼容到IE9)

```javascript
var el = renderEl('ul', {
    style: {
        color: 'red',
        fontSize: '16px'
    },
    attrs: {
       class: 'active myclass',
       dataId: '1',
       dataName: 'Rainy'
    },
    [
        {
          tagName: 'li', options: {
            style: {
              paddingLeft: '20px'
            },
            attrs: {
              dataInfo: 'haha'
            }
          }, content: 0
        },
        {
          tagName: 'li', options: {
            style: {
              paddingLeft: '20px'
            },
            attrs: {
              dataInfo: 'haha2'
            }
          }, content: 1
        }
    ])
})
```
