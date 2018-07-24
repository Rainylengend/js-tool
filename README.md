![logo](http://songbw.cn/asset/img/icon.ico)

# 自用的js工具库

> 后续更新中

## js文件描述
### tool.js 各种工具库

- ENUM

```
ENUM({a: 'x', b: '1', c: 3}) -> {a: 'x', b: '1', c: 3, x: 'a', '1': 'b', '3', 'c'}

ENUM(['MAN', 'WOMEN', 'OTHER']) -> {MEN: 0, WOMEN: 1, OTHER: 2, '0': 'MEN', '1': 'WOMEN', '2': 'OTHER'}
```

- deepClone -> 用于深度克隆数据的方法

- debounce -> 防抖函数

- throttle -> 节流函数


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
