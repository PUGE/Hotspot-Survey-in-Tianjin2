// Thu Jul 18 2019 15:02:52 GMT+0800 (GMT+08:00)

"use strict";

// 存储页面基本信息
var owo = {
  // 页面默认入口 如果没有设置 则取第一个页面为默认页面
  entry: "one",
  // 全局方法变量
  tool: {},
  // 框架状态变量
  state: {}
};
/*
  存储每个页面的函数
  键名：页面名称
  键值：方法列表
*/

owo.script = {
  "one": {
    "created": function created() {
      owo.tool.animate("zoomIn", this.query('.text')[0]);
    }
  },
  "two": {
    "created": function created() {},
    "template": {
      "topBar": {
        "prop": {
          "logo": "http://www.people.com.cn/img/MAIN/2014/06/114539/images/nav/logo_rmw.png"
        }
      },
      "editor": {
        "prop": {}
      },
      "imageTitle": {
        "prop": {
          "imgsrc": "./static/resource/title1.png"
        }
      }
    }
  },
  "three": {
    "created": function created() {},
    "template": {
      "show": {
        "prop": {}
      },
      "imageTitle": {
        "prop": {
          "class": "image-title-1",
          "imgsrc": "./static/resource/title2.png"
        }
      },
      "list": {
        "data": {
          "itemLiat": [{
            "name": "雅加达，别说再见",
            "url": "http://www.people.com.cn/",
            "time": "2018-09-03 13:38"
          }, {
            "name": "雅加达亚运夺金练兵兼顾 中国军团提速迈向东京奥运雅加达亚运夺金练兵兼顾 中国军团提速迈向东京奥运雅加达亚运夺金练兵兼顾 中国军团提速迈向东京奥运",
            "url": "http://www.people.com.cn/",
            "time": "2018-09-03 13:38"
          }, {
            "name": "高清：2018年雅加达亚运会 闭幕式盛况",
            "url": "http://www.people.com.cn/",
            "time": "2018-09-03 13:38"
          }, {
            "name": "高清：2018雅加达亚运会闭幕式 亚运会会旗交接仪式",
            "url": "http://www.people.com.cn/",
            "time": "2018-09-03 13:38"
          }, {
            "name": "高清：2018雅加达亚运会闭幕式 “杭州八分钟”惊艳呈现",
            "url": "http://www.people.com.cn/",
            "time": "2018-09-03 13:38"
          }, {
            "name": "高清：2018雅加达亚运会闭幕式 运动员入场仪式",
            "url": "http://www.people.com.cn/",
            "time": "2018-09-03 13:38"
          }]
        },
        "prop": {}
      },
      "list1": {
        "data": {
          "itemLiat": [{
            "name": "雅加达，别说再见",
            "url": "http://www.people.com.cn/",
            "time": "2018-09-03 13:38"
          }, {
            "name": "雅加达亚运夺金练兵兼顾 中国军团提速迈向东京奥运雅加达亚运夺金练兵兼顾 中国军团提速迈向东京奥运雅加达亚运夺金练兵兼顾 中国军团提速迈向东京奥运",
            "url": "http://www.people.com.cn/",
            "time": "2018-09-03 13:38"
          }, {
            "name": "高清：2018年雅加达亚运会 闭幕式盛况",
            "url": "http://www.people.com.cn/",
            "time": "2018-09-03 13:38"
          }, {
            "name": "高清：2018雅加达亚运会闭幕式 亚运会会旗交接仪式",
            "url": "http://www.people.com.cn/",
            "time": "2018-09-03 13:38"
          }, {
            "name": "高清：2018雅加达亚运会闭幕式 “杭州八分钟”惊艳呈现",
            "url": "http://www.people.com.cn/",
            "time": "2018-09-03 13:38"
          }, {
            "name": "高清：2018雅加达亚运会闭幕式 运动员入场仪式",
            "url": "http://www.people.com.cn/",
            "time": "2018-09-03 13:38"
          }]
        },
        "prop": {
          "name": "list",
          "src": "http://154.8.196.163:8004/public/6b922bb0f7baac30253a3128099e67a3.page"
        }
      },
      "imageTitle1": {
        "prop": {
          "imgsrc": "./static/resource/title3.png"
        }
      },
      "copyright": {
        "prop": {}
      }
    }
  }
};

"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* 方法合集 */
var _owo = {
  /* 对象合并方法 */
  assign: function assign(a, b) {
    var newObj = {};

    for (var key in a) {
      newObj[key] = a[key];
    }

    for (var key in b) {
      newObj[key] = b[key];
    }

    return newObj;
  },

  /* 运行页面初始化方法 */
  runCreated: function runCreated(pageFunction) {
    pageFunction.created.apply(_owo.assign(pageFunction, {
      data: pageFunction.data,
      activePage: window.owo.activePage
    }));
  }
  /* owo事件处理 */
  // 参数1: 当前正在处理的dom节点
  // 参数2: 当前正在处理的模块名称
  // 参数3: 当前正在处理的模块根dom

};

_owo.handleEvent = function (tempDom, templateName) {
  var activePage = window.owo.script[owo.activePage];

  if (tempDom.attributes) {
    for (var ind = 0; ind < tempDom.attributes.length; ind++) {
      var attribute = tempDom.attributes[ind]; // 判断是否为owo的事件
      // ie不支持startsWith

      if (attribute.name[0] == ':') {
        var eventName = attribute.name.slice(1);
        var eventFor = attribute.textContent;

        switch (eventName) {
          case 'show':
            {
              // 初步先简单处理吧
              var temp = eventFor.replace(/ /g, ''); // 取出条件

              var condition = temp.split("==");

              if (activePage.data[condition[0]] != condition[1]) {
                tempDom.style.display = 'none';
              }

              break;
            }

          default:
            {
              // 处理事件 使用bind防止闭包
              tempDom["on" + eventName] = function (event) {
                // 复制eventFor防止污染
                var eventForCopy = eventFor; // 判断页面是否有自己的方法

                var newPageFunction = window.owo.script[window.owo.activePage]; // console.log(this.attributes)

                if (templateName && templateName !== owo.activePage) {
                  // 如果模板注册到newPageFunction中，那么证明模板没有script那么直接使用eval执行
                  if (newPageFunction.template) {
                    newPageFunction = newPageFunction.template[templateName];
                  }
                } // 待优化可以单独提出来
                // 取出参数


                var parameterArr = [];
                var parameterList = eventForCopy.match(/[^\(\)]+(?=\))/g);

                if (parameterList && parameterList.length > 0) {
                  // 参数列表
                  parameterArr = parameterList[0].split(','); // 进一步处理参数

                  for (var i = 0; i < parameterArr.length; i++) {
                    var parameterValue = parameterArr[i].replace(/(^\s*)|(\s*$)/g, ""); // console.log(parameterValue)
                    // 判断参数是否为一个字符串

                    if (parameterValue.charAt(0) === '"' && parameterValue.charAt(parameterValue.length - 1) === '"') {
                      parameterArr[i] = parameterValue.substring(1, parameterValue.length - 1);
                    }

                    if (parameterValue.charAt(0) === "'" && parameterValue.charAt(parameterValue.length - 1) === "'") {
                      parameterArr[i] = parameterValue.substring(1, parameterValue.length - 1);
                    } // console.log(parameterArr[i])

                  }

                  eventForCopy = eventFor.replace('(' + parameterList + ')', '');
                } else {
                  // 解决 @click="xxx()"会造成的问题
                  eventForCopy = eventForCopy.replace('()', '');
                } // console.log(newPageFunction, eventForCopy)
                // 如果有方法,则运行它


                if (newPageFunction && newPageFunction[eventForCopy]) {
                  // 绑定window.owo对象
                  newPageFunction.$event = event;
                  newPageFunction[eventForCopy].apply(newPageFunction, parameterArr);
                } else {
                  // 如果没有此方法则交给浏览器引擎尝试运行
                  eval(eventFor);
                }
              };
            }
        }
      }
    }
  } // 判断是否有子节点需要处理


  if (tempDom.children) {
    // 递归处理所有子Dom结点
    for (var i = 0; i < tempDom.children.length; i++) {
      // 获取子节点实例
      var childrenDom = tempDom.children[i]; // 每个子节点均要判断是否为模块

      if (childrenDom.attributes['template'] && childrenDom.attributes['template'].textContent) {
        // 如果即将遍历进入模块 设置即将进入的模块为当前模块
        // 获取模块的模块名
        _owo.handleEvent(childrenDom, childrenDom.attributes['template'].textContent);
      } else {
        _owo.handleEvent(childrenDom, templateName);
      }
    }
  } else {
    console.info('元素不存在子节点!');
    console.info(tempDom);
  }
};

_owo.getarg = function (url) {
  // 获取URL #后面内容
  if (!url) return null;
  var arg = url.split("#");
  return arg[1] ? arg[1].split('?')[0] : null;
}; // 页面资源加载完毕事件


_owo.showPage = function () {
  // 取出URL地址判断当前所在页面
  var pageArg = _owo.getarg(window.location.hash); // 从配置项中取出程序入口


  var page = pageArg ? pageArg : owo.entry;

  if (page) {
    var entryDom = document.getElementById('o-' + page);

    if (entryDom) {
      // 显示主页面
      entryDom.style.display = 'block';
      window.owo.activePage = page;

      _owo.handlePage(window.owo.script[page], entryDom);

      _owo.handleEvent(entryDom, null);
    } else {
      console.error('入口文件设置错误,错误值为: ', entryDom);
    }
  } else {
    console.error('未设置程序入口!');
  } // 设置当前页面为活跃页面


  owo.state.newUrlParam = _owo.getarg(document.URL);
};
/*
  页面跳转方法
  参数1: 需要跳转到页面名字
  参数2: 离开页面动画
  参数3: 进入页面动画
*/


owo.go = function (pageName, inAnimation, outAnimation, backInAnimation, backOutAnimation, param) {
  owo.state.animation = {
    "in": inAnimation,
    "out": outAnimation,
    "forward": true
  };
  var paramString = '';

  if (param && _typeof(param) == 'object') {
    paramString += '?'; // 生成URL参数

    for (var paramKey in param) {
      paramString += paramKey + '=' + param[paramKey] + '&';
    } // 去掉尾端的&


    paramString = paramString.slice(0, -1);
  }

  window.location.href = paramString + "#" + pageName; // 如果有返回动画那么设置返回动画

  if (backInAnimation && backOutAnimation) {
    setTimeout(function () {
      owo.state.animation = {
        "in": backInAnimation,
        "out": backOutAnimation,
        "forward": false
      };
    }, 1000);
  }
}; // url发生改变事件


_owo.hashchange = function (e) {
  // 这样处理而不是直接用event中的URL，是因为需要兼容IE
  owo.state.oldUrlParam = owo.state.newUrlParam;
  owo.state.newUrlParam = _owo.getarg(document.URL); // console.log(owo.state.oldUrlParam, owo.state.newUrlParam)
  // 如果旧页面不存在则为默认页面

  if (!owo.state.oldUrlParam) owo.state.oldUrlParam = owo.entry;
  var newUrlParam = owo.state.newUrlParam; // 如果没有跳转到任何页面则跳转到主页

  if (newUrlParam === undefined) {
    newUrlParam = owo.entry;
  } // 如果没有发生页面跳转则不需要进行操作
  // 进行页面切换


  switchPage(owo.state.oldUrlParam, newUrlParam);
}; // ios的QQ有BUG 无法触发onhashchange事件


if (/iPhone\sOS.*QQ[^B]/.test(navigator.userAgent)) {
  window.onpopstate = _owo.hashchange;
} else {
  window.onhashchange = _owo.hashchange;
}

function switchPage(oldUrlParam, newUrlParam) {
  var oldPage = oldUrlParam ? oldUrlParam.split('&')[0] : owo.entry;
  var newPage = newUrlParam ? newUrlParam.split('&')[0] : owo.entry; // 查找页面跳转前的page页(dom节点)

  var oldDom = document.getElementById('o-' + oldPage);

  if (oldDom) {
    // 隐藏掉旧的节点
    oldDom.style.display = 'none';
  } // 查找页面跳转后的page


  var newDom = document.getElementById('o-' + newPage); // console.log(newDom)

  if (newDom) {
    // 隐藏掉旧的节点
    newDom.style.display = 'block';
  } else {
    console.error('页面不存在!');
    return;
  }

  window.owo.activePage = newPage;

  _owo.handlePage(window.owo.script[newPage], newDom);

  _owo.handleEvent(newDom, null);
}
/*
 * 传递函数给whenReady()
 * 当文档解析完毕且为操作准备就绪时，函数作为document的方法调用
 */


_owo.ready = function () {
  //这个函数返回whenReady()函数
  var funcs = []; //当获得事件时，要运行的函数
  //当文档就绪时,调用事件处理程序

  function handler(e) {
    // 确保事件处理程序只运行一次
    if (window.owo.state.isRrady) return;
    window.owo.state.isRrady = true; //如果发生onreadystatechange事件，但其状态不是complete的话,那么文档尚未准备好

    if (e.type === 'onreadystatechange' && document.readyState !== 'complete') {
      return;
    } // 运行所有注册函数


    for (var i = 0; i < funcs.length; i++) {
      funcs[i].call(document);
    }

    funcs = null;
  } //为接收到的任何事件注册处理程序


  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', handler, false);
    document.addEventListener('readystatechange', handler, false); //IE9+

    window.addEventListener('load', handler, false);
  } else if (document.attachEvent) {
    document.attachEvent('onreadystatechange', handler);
    window.attachEvent('onload', handler);
  } //返回whenReady()函数


  return function whenReady(fn) {
    if (window.owo.state.isRrady) {
      fn.call(document);
    } else {
      funcs.push(fn);
    }
  };
}(); // 执行页面加载完毕方法


_owo.ready(_owo.showPage);
/**
 * 赋予节点动画效果
 * @param  {string} name 动画效果名称
 * @param  {dom} dom 节点
 */


owo.tool.animate = function (name, dom) {
  dom.classList.add(name);
  dom.classList.add('owo-animated'); // 待优化可以单独提出绑定方法

  dom.addEventListener('animationend', animateEnd);

  function animateEnd() {
    // 待优化 感觉不需要这样
    dom.classList.remove(name);
    dom.classList.remove('owo-animated');
  }
};
/* 运行页面所属的方法 */


_owo.handlePage = function (newPageFunction, entryDom) {
  newPageFunction['$el'] = entryDom; // 快速选择器

  newPageFunction['query'] = function (str) {
    return this.$el.querySelectorAll(str);
  };
  /* 判断页面是否有自己的方法 */


  if (!newPageFunction) return; // console.log(newPageFunction)
  // 如果有created方法则执行

  if (newPageFunction.created) {
    _owo.runCreated(newPageFunction);
  } // 判断页面是否有下属模板,如果有运行所有模板的初始化方法


  for (var key in newPageFunction.template) {
    var templateScript = newPageFunction.template[key]; // 待修复,临时获取方式,这种方式获取到的dom不准确

    var childDom = entryDom.querySelectorAll('[template="' + key + '"]')[0]; // 递归处理

    _owo.handlePage(templateScript, childDom);
  }
};