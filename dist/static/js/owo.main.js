// Mon Jul 22 2019 10:42:04 GMT+0800 (GMT+08:00)

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
      owo.tool.touch({
        el: this.$el,
        end: function end(e) {
          if (e.swipe[1] < -100) {
            owo.go('two', 'moveToTop', 'moveFromBottom', 'moveToBottom', 'moveFromTop');
          }
        }
      });
    }
  },
  "two": {
    "created": function created() {
      owo.tool.touch({
        el: this.$el,
        end: function end(e) {
          if (e.swipe[1] < -100) {
            owo.go('three', 'moveToTop', 'moveFromBottom', 'moveToBottom', 'moveFromTop');
          } else if (e.swipe[1] > 100) {
            owo.go('one', 'moveToBottom', 'moveFromTop', 'moveToTop', 'moveFromBottom');
          }
        }
      });
    },
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
    "created": function created() {
      owo.tool.touch({
        el: this.$el,
        end: function end(e) {
          if (e.swipe[1] > 100) {
            owo.go('two', 'moveToBottom', 'moveFromTop', 'moveToTop', 'moveFromBottom');
          }
        }
      });
    },
    "show": function show() {
      console.log('显示');
    },
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
    // 确保created事件只被执行一次
    if (pageFunction["_isCreated"]) {
      if (!pageFunction.show) return;
      pageFunction.show.apply(_owo.assign(pageFunction, {
        data: pageFunction.data,
        activePage: window.owo.activePage
      }));
    } else {
      pageFunction["_isCreated"] = true;
      if (!pageFunction.created) return;
      pageFunction.created.apply(_owo.assign(pageFunction, {
        data: pageFunction.data,
        activePage: window.owo.activePage
      }));
    }
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
  // console.log(owo.script[pageName])
  owo.script[pageName]._animation = {
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
  } // 如果有返回动画那么设置返回动画


  if (backInAnimation && backOutAnimation) {
    owo.script[owo.activePage]._animation = {
      "in": backInAnimation,
      "out": backOutAnimation,
      "forward": false
    };
  }

  window.location.href = paramString + "#" + pageName;
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
} // 隐藏旧页面，显示新页面


function dispalyEffect(oldDom, newDom) {
  if (oldDom) {
    // 隐藏掉旧的节点
    oldDom.style.display = 'none';
  } // 查找页面跳转后的page


  newDom.style.display = 'block';
} // 切换页面动画


function animation(oldDom, newDom, animationIn, animationOut, forward) {
  // 动画延迟
  var delay = 0; // 获取父元素

  var parentDom = newDom.parentElement;

  if (!oldDom) {
    console.error('旧页面不存在!');
  }

  oldDom.addEventListener("animationend", oldDomFun);
  newDom.addEventListener("animationend", newDomFun);
  oldDom.style.position = 'absolute';
  newDom.style.display = 'block';
  newDom.style.position = 'absolute'; // 给即将生效的页面加上“未来”标识

  if (forward) {
    newDom.classList.add('owo-animation-forward');
  } else {
    oldDom.classList.add('owo-animation-forward');
  } // document.body.style.overflow = 'hidden'


  parentDom.style.perspective = '1200px';
  oldDom.classList.add('owo-animation');
  animationIn.forEach(function (value) {
    //判断是否为延迟属性
    if (value.startsWith('delay')) {
      var tempDelay = parseInt(value.slice(5));
      if (delay < tempDelay) delay = tempDelay;
    }

    oldDom.classList.add('o-page-' + value);
  });
  newDom.classList.add('owo-animation');
  animationOut.forEach(function (value) {
    if (value.startsWith('delay')) {
      var tempDelay = parseInt(value.slice(5));
      if (delay < tempDelay) delay = tempDelay;
    }

    newDom.classList.add('o-page-' + value);
  }); // 旧DOM执行函数

  function oldDomFun(e) {
    // 排除非框架引起的结束事件
    if (e.target.getAttribute('template')) {
      // 移除监听
      oldDom.removeEventListener('animationend', oldDomFun, false); // 延迟后再清除，防止动画还没完成

      setTimeout(function () {
        oldDom.style.display = 'none'; // console.log(oldDom)

        oldDom.style.position = '';
        oldDom.classList.remove('owo-animation');
        oldDom.classList.remove('owo-animation-forward');
        parentDom.style.perspective = ''; // 清除临时设置的class

        animationIn.forEach(function (value) {
          oldDom.classList.remove('o-page-' + value);
        });
      }, delay);
    }
  } // 新DOM执行函数


  function newDomFun() {
    // 移除监听
    newDom.removeEventListener('animationend', newDomFun, false); // 延迟后再清除，防止动画还没完成

    setTimeout(function () {
      // 清除临时设置的style
      newDom.style.position = '';
      newDom.classList.remove('owo-animation');
      newDom.classList.remove('owo-animation-forward');
      animationOut.forEach(function (value) {
        newDom.classList.remove('o-page-' + value);
      });
    }, delay);
  }
} // 切换页面前的准备工作


function switchPage(oldUrlParam, newUrlParam) {
  var oldPage = oldUrlParam ? oldUrlParam.split('&')[0] : owo.entry;
  var newPage = newUrlParam ? newUrlParam.split('&')[0] : owo.entry; // console.log(oldPage, newPage)

  var oldDom = document.getElementById('o-' + oldPage);
  var newDom = document.getElementById('o-' + newPage);

  if (!newDom) {
    console.error('页面不存在!');
    return;
  } // console.log(owo.state.animation)
  // 判断是否有动画效果


  if (!owo.script[newPage]._animation) owo.script[newPage]._animation = {}; // 直接.in会在ie下报错

  var animationIn = owo.script[newPage]._animation['in'];
  var animationOut = owo.script[newPage]._animation['out'];

  if (animationIn || animationOut) {
    // 如果没用动画参数则使用默认效果
    if (!animationIn || !animationOut) {
      dispalyEffect(oldDom, newDom);
      return;
    }

    owo.state.animation = {};
    animation(oldDom, newDom, animationIn.split('&&'), animationOut.split('&&'), owo.state.animation['forward']);
  } else {
    dispalyEffect(oldDom, newDom);
  }

  window.owo.activePage = newPage;

  _owo.handleEvent(newDom, null);

  _owo.handlePage(window.owo.script[newPage], newDom);
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
/**
 * 滑动检测
 * @param  {DOM} el 需要监测的dom元素
 * @param  {Function} start   开始事件
 * @param  {Function} touchmove   触摸移动事件
 * @param  {Function} end   结束事件
 */


owo.tool.touch = function (config) {
  var dom = config.el; // 判断是否已经处于监听状态

  if (dom.getAttribute("monitor") == 'touch') return;
  var start = null;
  var end = null;
  var startTarget = null; // 设置监听标识

  dom.setAttribute("monitor", "touch");
  dom.addEventListener("touchstart", function (e) {
    event = e.targetTouches[0] || e.originalEvent.targetTouches[0];
    startTarget = e.target;
    start = end = [event.clientX, event.clientY];
    if (config.start) config.start(event);
  }, false);
  dom.addEventListener("touchmove", function (e) {
    event = e.targetTouches[0] || e.originalEvent.targetTouches[0];
    end = [event.clientX, event.clientY];
    if (config.moveing) config.moveing(event);
  }, false);
  dom.addEventListener("touchend", function (e) {
    if (config.end) {
      config.end({
        target: startTarget,
        start: start,
        end: end,
        swipe: [end[0] - start[0], end[1] - start[1]]
      });
    }
  }, false);
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