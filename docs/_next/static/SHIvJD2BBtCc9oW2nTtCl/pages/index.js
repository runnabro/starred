(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    define_property_default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js
var get_prototype_of = __webpack_require__("Bhuq");
var get_prototype_of_default = /*#__PURE__*/__webpack_require__.n(get_prototype_of);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js


function getPrototypeOf_getPrototypeOf(o) {
  getPrototypeOf_getPrototypeOf = set_prototype_of_default.a ? get_prototype_of_default.a : function _getPrototypeOf(o) {
    return o.__proto__ || get_prototype_of_default()(o);
  };
  return getPrototypeOf_getPrototypeOf(o);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/next/dist/next-server/lib/head.js
var head = __webpack_require__("8Kt/");
var head_default = /*#__PURE__*/__webpack_require__.n(head);

// EXTERNAL MODULE: ./components/Layout.js + 1 modules
var Layout = __webpack_require__("5Yp1");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/Project.js








var __jsx = react_default.a.createElement;


var Project_Project =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Project, _React$Component);

  function Project() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Project);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf_getPrototypeOf(Project)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderDetailButton", function () {
      if (_this.props.detailsHref) {
        return __jsx(link_default.a, {
          href: _this.props.detailsHref
        }, __jsx("a", {
          className: "btn btn-md btn-white"
        }, "Read Details"));
      }

      return;
    });

    _defineProperty(_assertThisInitialized(_this), "renderLiveButton", function () {
      if (_this.props.liveHref) {
        return __jsx("a", {
          className: "btn btn-md btn-white-outline",
          href: _this.props.liveHref
        }, __jsx("span", {
          className: "span"
        }, "View It Live"));
      }

      return;
    });

    _defineProperty(_assertThisInitialized(_this), "renderImage", function () {
      if (_this.props.imgSrc) {
        var imgClassNames = _this.props.imgShadow ? 'img' : 'img no-shadow';
        return __jsx("img", {
          className: imgClassNames,
          src: _this.props.imgSrc,
          alt: ""
        });
      }

      return;
    });

    return _this;
  }

  _createClass(Project, [{
    key: "render",
    value: function render() {
      return __jsx(react_default.a.Fragment, null, __jsx("h2", {
        className: "h2 weight-bold"
      }, this.props.title), __jsx("p", {
        className: "p"
      }, this.props.description), __jsx("div", {
        className: "grid-block margin-top-md btn-wrapper"
      }, this.renderDetailButton(), this.renderLiveButton()), this.renderImage());
    }
  }]);

  return Project;
}(react_default.a.Component);


// CONCATENATED MODULE: ./components/SubProject.js

var SubProject_jsx = react_default.a.createElement;
function SubProject(props) {
  var imgAlt = props.imgAlt || '';
  return SubProject_jsx(react_default.a.Fragment, null, SubProject_jsx("img", {
    alt: imgAlt,
    className: "margin-bottom-sm",
    height: "56",
    src: props.imgSrc,
    width: "70"
  }), SubProject_jsx("p", {
    className: "p weight-bold"
  }, props.title), SubProject_jsx("p", {
    className: "p"
  }, props.description), SubProject_jsx("div", {
    className: "grid-block shrink margin-top-sm btn-wrapper"
  }, SubProject_jsx("a", {
    className: "btn btn-sm btn-blue-outline",
    href: props.sourceHref
  }, "View Source"), SubProject_jsx("a", {
    className: "btn btn-sm btn-blue-outline",
    href: props.liveHref
  }, SubProject_jsx("span", {
    className: "span"
  }, "View It Live"))));
}
// CONCATENATED MODULE: ./pages/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pages_default; });








var pages_jsx = react_default.a.createElement;






var pages_default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf_getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderProjects", function () {
      return pages_jsx("div", {
        className: "grid-block section-card-wrapper"
      }, pages_jsx("section", {
        className: "section-card section-runnable"
      }, pages_jsx(Project_Project, {
        description: "Automatically launching full-stack environments for every branch.",
        detailsHref: "/runnable",
        liveHref: "//runnable.com/landing",
        imgShadow: true,
        imgSrc: "/images/runnable/dockerfile.png",
        title: "Runnable"
      })), pages_jsx("section", {
        className: "section-card section-notorious"
      }, pages_jsx(Project_Project, {
        description: "API response codes and latency represented in visual and audio form.",
        detailsHref: "/notoriousapi",
        liveHref: "//mulesoft-labs.github.io/notoriousapi/",
        title: "Notorious A.P.I."
      })), pages_jsx("section", {
        className: "section-card section-codesnippets"
      }, pages_jsx(Project_Project, {
        description: "Complete environments to run and share code in the browser.",
        detailsHref: "/codesnippets",
        imgSrc: "/images/codesnippets.svg",
        title: "CodeSnippets"
      })), pages_jsx("section", {
        className: "section-card section-mulequest"
      }, pages_jsx(Project_Project, {
        description: "Introducing users to a new product with a game.",
        detailsHref: "/mulequest",
        imgSrc: "/images/mulequest.gif",
        title: "MuleQuest"
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "renderSubProjects", function () {
      return pages_jsx("section", {
        className: "section padding-top-none section-more"
      }, pages_jsx("ol", {
        className: "grid-block list section-card-wrapper"
      }, pages_jsx("li", {
        className: "grid-block col section-card li"
      }, pages_jsx(SubProject, {
        description: "A resource for developers learning Docker and containerization.",
        imgSrc: "/images/slash-docker.svg",
        sourceHref: "//github.com/runnable/slash-docker",
        liveHref: "//runnable.com/docker/",
        title: "/docker"
      })), pages_jsx("li", {
        className: "grid-block col section-card li"
      }, pages_jsx(SubProject, {
        description: "Documentation for getting start with, and troubleshooting Runnable.",
        imgSrc: "/images/file-docs.svg",
        sourceHref: "//github.com/runnable/docs",
        liveHref: "//runnable.com/docs/",
        title: "Runnable Docs"
      })), pages_jsx("li", {
        className: "grid-block col section-card li"
      }, pages_jsx(SubProject, {
        description: "A simple way to calculate the CO\xB2 cost of a flight.",
        imgSrc: "/images/co2flights.png",
        sourceHref: "//github.com/runnabro/offset",
        liveHref: "//ohgodhelp.us/",
        title: "CO\xB2 Flight Calculator"
      }))));
    });

    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return pages_jsx(Layout["a" /* default */], null, pages_jsx(head_default.a, null, pages_jsx("title", null, "Hi.")), pages_jsx("main", {
        className: "grid-block col main main-landing"
      }, pages_jsx("section", {
        className: "grid-block justify-center section section-intro"
      }, pages_jsx("div", {
        className: "text-container"
      }, pages_jsx("h1", {
        className: "h1 weight-bold"
      }, "Heya, I\u2019m Tony."), pages_jsx("h1", {
        className: "h1 weight-bold"
      }, "I work on ", pages_jsx("strong", {
        className: "the-web"
      }, pages_jsx("span", {
        className: "span",
        "data-text": "the web"
      }, "the web")), " & here\u2019s some of what I\u2019ve been up to:"))), this.renderProjects(), this.renderSubProjects(), pages_jsx("footer", {
        className: "grid-block justify-center footer"
      }, pages_jsx("a", {
        className: "link-icon",
        href: "//github.com/runnabro/"
      }, pages_jsx("svg", {
        className: "svg"
      }, pages_jsx("use", {
        href: "#github"
      }))))));
    }
  }]);

  return _default;
}(react_default.a.Component);



/***/ }),

/***/ "vlRD":
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__("RNiq")
      if(false) {}
      return mod
    }]);
  

/***/ })

},[["vlRD",0,1]]]);