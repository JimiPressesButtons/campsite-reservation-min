'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

exports['default'] = _react2['default'].createClass({
    displayName: 'Day',

    propTypes: {
        handleClick: _react2['default'].PropTypes.func.isRequired,
        date: _react2['default'].PropTypes.object.isRequired,
        //month: React.PropTypes.object.isRequired,
        today: _react2['default'].PropTypes.object.isRequired,
        selected: _react2['default'].PropTypes.object
    },

    render: function render() {
        var _this = this;

        var classes = ['Day'];
        if (this.props.today.isSame(this.props.date, 'day')) {
            classes.push('today');
        }
        if (this.props.selected && this.props.selected.isSame(this.props.date, 'day')) {
            classes.push('selected');
        }
        var style = {
            cursor: 'pointer'
        };
        classes = classes.concat(this.props.classes);
        return _react2['default'].createElement(
            'td',
            { className: classes.join(' '),
                style: style,
                'data-date': this.props.date.toISOString(),
                'data-day': this.props.date.format('D'),
                onClick: function () {
                    return _this.props.handleClick(_this.props.date);
                } },
            this.props.date.format('D')
        );
    }
});
module.exports = exports['default'];