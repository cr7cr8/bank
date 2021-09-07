"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AvatarChip = exports.AvatarLogo = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/styles");

var _core = require("@material-ui/core");

var _createBreakpoints = _interopRequireDefault(require("@material-ui/core/styles/createBreakpoints"));

var _multiavatar = _interopRequireDefault(require("@multiavatar/multiavatar"));

var _excluded = ["children"],
    _excluded2 = ["size", "personName"],
    _excluded3 = ["size", "personName", "label"],
    _excluded4 = ["classes", "personName", "src"],
    _excluded5 = ["classes", "size", "personName", "avatarProps"],
    _excluded6 = ["src"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function breakpointsAttribute() {
  var _ref;

  var xs = {};
  var sm = {};
  var md = {};
  var lg = {};
  var xl = {};

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  args.forEach(function (item) {
    xs = _objectSpread(_objectSpread({}, xs), {}, _defineProperty({}, item[0], item[1]));
    sm = _objectSpread(_objectSpread({}, sm), {}, _defineProperty({}, item[0], item[2] || item[1]));
    md = _objectSpread(_objectSpread({}, md), {}, _defineProperty({}, item[0], item[3] || item[2] || item[1]));
    lg = _objectSpread(_objectSpread({}, lg), {}, _defineProperty({}, item[0], item[4] || item[3] || item[2] || item[1]));
    xl = _objectSpread(_objectSpread({}, xl), {}, _defineProperty({}, item[0], item[5] || item[4] || item[3] || item[2] || item[1]));
  });
  return _ref = {}, _defineProperty(_ref, breakpoints.only('xs'), _objectSpread({}, xs)), _defineProperty(_ref, breakpoints.only('sm'), _objectSpread({}, sm)), _defineProperty(_ref, breakpoints.only('md'), _objectSpread({}, md)), _defineProperty(_ref, breakpoints.only('lg'), _objectSpread({}, lg)), _defineProperty(_ref, breakpoints.only('xl'), _objectSpread({}, xl)), _ref;
}

var breakpoints = (0, _createBreakpoints.default)({});

var withStylesProps = function withStylesProps(makingStylesFn) {
  return function (Component) {
    return function (_ref2) {
      var children = _ref2.children,
          props = _objectWithoutProperties(_ref2, _excluded);

      var Comp = (0, _styles.withStyles)(makingStylesFn(props))(Component);
      return /*#__PURE__*/_react.default.createElement(Comp, props, children);
    };
  };
};

var muiTheme = (0, _core.createMuiTheme)({}); ////////////////////////////////////////////////////////////////////////////

var makingStyleObj = function makingStyleObj() {
  return {
    avatarSize: function avatarSize(_ref3) {
      var _ref3$size = _ref3.size,
          size = _ref3$size === void 0 ? "40px" : _ref3$size,
          personName = _ref3.personName,
          props = _objectWithoutProperties(_ref3, _excluded2);

      var size_ = Array.isArray(size) ? size : [size];
      return {
        "&.MuiAvatar-circle": _objectSpread({}, breakpointsAttribute(["width"].concat(_toConsumableArray(size_)), ["height"].concat(_toConsumableArray(size_))))
      };
    },
    chipSize: function chipSize(_ref4) {
      var _ref4$size = _ref4.size,
          size = _ref4$size === void 0 ? "40px" : _ref4$size,
          personName = _ref4.personName,
          label = _ref4.label,
          props = _objectWithoutProperties(_ref4, _excluded3);

      var size_ = Array.isArray(size) ? size : [size]; //console.log(label, label && label.props && label.props.children)

      return _objectSpread(_objectSpread(_objectSpread(_objectSpread({
        //   ...breakpointsAttribute(["height", ...size_.map(item => { return `calc( ${item} + ${muiTheme.spacing(1)}px )` })]),
        height: "auto",
        paddingTop: "4px",
        paddingBottom: "4px"
      }, !label && !personName && {
        backgroundColor: "transparent",
        borderRadius: "1000px"
      }), label && !(label && label.props && label.props.children) && {
        backgroundColor: "transparent",
        borderRadius: "1000px"
      }), {}, {
        "& .MuiChip-label": _objectSpread({
          "fontWeight": "bold"
        }, breakpointsAttribute(["fontSize"].concat(_toConsumableArray(size_))))
      }, !label && !personName && {
        "& .MuiChip-avatar": {
          marginRight: "-19px"
        }
      }), label && !(label && label.props && label.props.children) && {
        "& .MuiChip-avatar": {
          marginRight: "-19px"
        }
      });
    },
    popover: function popover() {
      return {
        pointerEvents: 'none'
      };
    },
    paper: function paper() {
      return {
        pointerEvents: "auto",
        padding: muiTheme.spacing(1)
      };
    }
  };
};

var AvatarLogo_ = /*#__PURE__*/function (_Component) {
  _inherits(AvatarLogo_, _Component);

  var _super = _createSuper(AvatarLogo_);

  function AvatarLogo_() {
    _classCallCheck(this, AvatarLogo_);

    return _super.apply(this, arguments);
  }

  _createClass(AvatarLogo_, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          personName = _this$props.personName,
          src = _this$props.src,
          rest = _objectWithoutProperties(_this$props, _excluded4); //const src_ = personName === "bank" ? bankLogo : "data:image/svg+xml;base64," + btoa(personName && multiavatar(personName))


      var src_ = "data:image/svg+xml;base64," + btoa(personName && (0, _multiavatar.default)(personName));
      return /*#__PURE__*/_react.default.createElement(_core.Avatar, _extends({
        classes: {
          root: classes.avatarSize
        },
        src: this.props.src || src_
      }, rest));
    }
  }]);

  return AvatarLogo_;
}(_react.Component);

var AvatarLogo = withStylesProps(makingStyleObj)(AvatarLogo_);
exports.AvatarLogo = AvatarLogo;

var AvatarChip_ = /*#__PURE__*/function (_Component2) {
  _inherits(AvatarChip_, _Component2);

  var _super2 = _createSuper(AvatarChip_);

  function AvatarChip_(props) {
    var _this;

    _classCallCheck(this, AvatarChip_);

    _this = _super2.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handlePopoverOpen", function (event) {
      var _this$anchorRef$curre = _this.anchorRef.current.getBoundingClientRect(),
          left = _this$anchorRef$curre.left,
          right = _this$anchorRef$curre.right,
          width = _this$anchorRef$curre.width,
          top = _this$anchorRef$curre.top,
          bottom = _this$anchorRef$curre.bottom,
          height = _this$anchorRef$curre.height;

      var centerX = left + width / 2;
      var centerY = top + height / 2;

      _this.setState(function (pre) {
        return {
          open: true,
          transOriginH: centerX <= window.innerWidth / 2 ? "left" : "right",
          transOriginV: centerY <= window.innerHeight / 2 ? "top" : "bottom",
          anchorPos: {
            "left": centerX <= window.innerWidth / 2 ? Math.round(left) : Math.round(left + width),
            "top": centerY <= window.innerHeight / 2 ? Math.round(top + height) + 8 : Math.round(top) - 8
          }
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlePopoverClose", function () {
      _this.setState(function (pre) {
        return _objectSpread(_objectSpread({}, pre), {}, {
          open: false
        });
      });
    });

    _this.state = {
      open: false,
      transOriginH: "left",
      transOriginV: "top",
      anchorPos: {
        "top": 0,
        "left": 0
      }
    };
    _this.anchorRef = /*#__PURE__*/_react.default.createRef();
    return _this;
  }

  _createClass(AvatarChip_, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(preProp, preState) {}
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          classes = _this$props2.classes,
          size = _this$props2.size,
          personName = _this$props2.personName,
          avatarProps = _this$props2.avatarProps,
          rest = _objectWithoutProperties(_this$props2, _excluded5);

      var _ref5 = this.props.avatarProps || {},
          src = _ref5.src,
          avatarRest = _objectWithoutProperties(_ref5, _excluded6);

      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          width: "fit-content",
          display: "inline-block"
        }
      }, /*#__PURE__*/_react.default.createElement(_core.Chip, _extends({
        classes: {
          root: classes.chipSize
        },
        avatar: /*#__PURE__*/_react.default.createElement(AvatarLogo, _extends({
          size: size,
          personName: personName,
          src: this.props.src
        }, avatarRest)),
        label: personName
      }, rest, this.props.hoverContent && {
        onMouseEnter: this.handlePopoverOpen
      }, this.props.hoverContent && {
        onMouseLeave: this.handlePopoverClose
      }, {
        // aria-owns={this.state.open ? 'mouse-over-popover' : undefined}
        // aria-haspopup="true"
        //     innerRef={this.state.anchorEl}
        ref: this.anchorRef
      })), this.props.hoverContent && /*#__PURE__*/_react.default.createElement(_core.Popover, {
        marginThreshold: 0 //id="mouse-over-popover"
        ,
        className: classes.popover,
        classes: {
          paper: classes.paper
        },
        open: this.state.open,
        anchorReference: "anchorPosition",
        anchorEl: this.anchorRef.current,
        anchorOrigin: {
          horizontal: "left",
          vertical: "bottom"
        },
        anchorPosition: _objectSpread({}, this.state.anchorPos),
        transformOrigin: {
          horizontal: this.state.transOriginH,
          vertical: this.state.transOriginV
        } //   onClose={this.handlePopoverClose}
        ,
        disableRestoreFocus: true,
        PaperProps: {
          onMouseEnter: this.handlePopoverOpen,
          onMouseLeave: this.handlePopoverClose,
          elevation: 2
        }
      }, this.props.hoverContent));
    }
  }]);

  return AvatarChip_;
}(_react.Component);

var AvatarChip = withStylesProps(makingStyleObj)(AvatarChip_);
exports.AvatarChip = AvatarChip;