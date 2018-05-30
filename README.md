![logo](http://songbw.cn/asset/img/icon.ico)

# 自用的js工具库

> 后续更新中

## js文件描述

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
- if-else.js文件
> 为了用JSON方法解决if-else嵌套过多问题

```javascript
let falg1 = true
let flag2 = false
let flag3 = true
let name
let name1
if(flag1){
  if(flag2){
    name = 'c'
  }else {
    if(flag3){
      name = 'd'
    }else {
      name = 'f'
    }
  }
}else {
  name = 'b'
}

name1 = jsonIfElse({
  flag: flag1,
  trueConf: {
    next: {
      flag: flag2,
      trueConf: {
        name: 'c'
      },
      falseConf: {
        next: {
          flag: flag3,
          trueConf: {
            name: 'd'
          },
          falseConf: {
            name: 'f'
          }
        }
      }
    }
  },
  falseConf: {
    name: 'b'
  }
})

// 结果 name: d, name: d
```