webpackHotUpdate(0,{

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(179);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(205);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(206);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(210);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(257);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _topbar = __webpack_require__(265);
	
	var _topbar2 = _interopRequireDefault(_topbar);
	
	var _projects = __webpack_require__(266);
	
	var _projects2 = _interopRequireDefault(_projects);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var App = function (_React$Component) {
	  (0, _inherits3.default)(App, _React$Component);
	
	  function App(props) {
	    (0, _classCallCheck3.default)(this, App);
	    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));
	  }
	
	  (0, _createClass3.default)(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'app' },
	        _react2.default.createElement(_topbar2.default, null),
	        _react2.default.createElement(_projects2.default, null)
	      );
	    }
	  }]);
	  return App;
	}(_react2.default.Component);
	
	exports.default = App;
	module.exports = exports['default'];

/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(179);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(205);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(206);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(210);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(257);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var topbar = function (_React$Component) {
	  (0, _inherits3.default)(topbar, _React$Component);
	
	  function topbar(props) {
	    (0, _classCallCheck3.default)(this, topbar);
	    return (0, _possibleConstructorReturn3.default)(this, (topbar.__proto__ || (0, _getPrototypeOf2.default)(topbar)).call(this, props));
	  }
	
	  (0, _createClass3.default)(topbar, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      $('.app').scroll(function () {
	        console.log($('.app').scrollTop());
	        if ($('.topbar').scrollTop() > 0) {
	          $('.topbar').css('background-color', 'steelblue');
	        } else {
	          $('.topbar').css('background-color', 'black');
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', { className: 'topbar' });
	    }
	  }]);
	  return topbar;
	}(_react2.default.Component);
	
	exports.default = topbar;
	module.exports = exports['default'];

/***/ }

})
//# sourceMappingURL=0.d56048f34325ee52a570.hot-update.js.map