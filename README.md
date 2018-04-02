![logo](http://songbw.cn/asset/img/icon.ico)

# 自用的js工具库

## js文件描述

### virtual-dom.js 创建虚拟dom的方法

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