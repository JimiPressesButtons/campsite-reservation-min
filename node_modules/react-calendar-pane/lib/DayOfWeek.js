'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

exports['default'] = _react2['default'].createClass({
    displayName: 'DayOfWeek',

    render: function render() {
        return _react2['default'].createElement(
            'th',
            { className: 'DayOfWeek' },
            this.props.date.format('dd')
        );
    }
});
module.exports = exports['default'];