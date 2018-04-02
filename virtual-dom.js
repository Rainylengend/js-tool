/** create by songbw 2018/4/1 */

var renderEl = (function () {

  function isObject(type) {
    return Object.prototype.toString.call(type) === '[object Object]'
  }

  function setStyle(styleObj, el) {
    for (var i in styleObj) {
      el.style[i] = styleObj[i]
    }
  }


  function setAttr(attrs, el) {
    for (var attr in attrs) {
      el.setAttribute(attr.replace(/([A-Z])/g, '-$1'), attrs[attr])
    }
  }

  return function (elName, attr, content) {
    var el = document.createElement(elName)


    if (!elName)
      throw new Error('arguments 0 is undefined')

    if (attr && !isObject(attr))
      throw new Error('arguments 1 must Object')


    if (attr && isObject(attr)) {
      for (var child in attr) {
        if (child === 'style') {
          setStyle(attr[child], el)
        } else if (child === 'attrs') {
          setAttr(attr[child], el)
        }

      }
    }

    if (typeof content === 'string' || typeof content === 'number') {
      el.innerHTML = content
    } else if (content instanceof Array) {
      var domFrg = document.createDocumentFragment()

      content.forEach(function (item) {
        var el = renderEl(item.tagName, item.options, item.content)

        domFrg.appendChild(el)
      })
      el.appendChild(domFrg)
    }
    else {
      el.appendChild(content)
    }

    return el
  }
})()
