'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _Day = require('./Day');

var _Day2 = _interopRequireDefault(_Day);

var _DayOfWeek = require('./DayOfWeek');

var _DayOfWeek2 = _interopRequireDefault(_DayOfWeek);

var _Week = require('./Week');

var _Week2 = _interopRequireDefault(_Week);

exports['default'] = _react2['default'].createClass({
    displayName: 'Calendar',

    propTypes: {
        onSelect: _react2['default'].PropTypes.func.isRequired,
        date: _react2['default'].PropTypes.object,
        month: _react2['default'].PropTypes.object,
        dayClasses: _react2['default'].PropTypes.func
    },

    getDefaultProps: function getDefaultProps() {
        return {
            month: (0, _moment2['default'])(),
            dayClasses: function dayClasses() {
                return [];
            }
        };
    },

    getInitialState: function getInitialState() {
        var date = this.props.date;
        var month = undefined;
        if (date) {
            month = this.props.date;
        } else {
            month = this.props.month;
        }
        return {
            date: date,
            month: month
        };
    },

    handleClick: function handleClick(date) {
        if (this.props.onSelect(date) !== false) {
            this.setState({
                date: (0, _moment2['default'])(date)
            });
        }
    },

    previous: function previous() {
        this.setState({
            month: (0, _moment2['default'])(this.state.month).subtract(1, 'month')
        });
    },

    next: function next() {
        this.setState({
            month: (0, _moment2['default'])(this.state.month).add(1, 'month')
        });
    },

    render: function render() {
        var classes = ['Calendar', this.props.className].join(' ');

        var actionStyle = {
            cursor: 'pointer'
        };

        var today = (0, _moment2['default'])();

        var date = this.state.date;
        var month = this.state.month;

        var startOfWeekIndex = 0;

        var current = month.clone().startOf('month').day(startOfWeekIndex);
        var end = month.clone().endOf('month').day(7);

        var elements = [];
        var days = [];
        var week = 1;
        var i = 1;
        var daysOfWeek = [];
        var day = current.clone();
        for (var j = 0; j < 7; j++) {
            var dayOfWeekKey = 'dayOfWeek' + j;
            daysOfWeek.push(_react2['default'].createElement(_DayOfWeek2['default'], { key: dayOfWeekKey, date: day.clone() }));
            day.add(1, 'days');
        }
        while (current.isBefore(end)) {
            var dayClasses = this.props.dayClasses(current);
            if (!current.isSame(month, 'month')) {
                dayClasses = dayClasses.concat(['other-month']);
            }
            var isCurrentMonth = current.isSame(month, 'month');
            days.push(_react2['default'].createElement(_Day2['default'], { key: i++,
                date: current.clone(),
                selected: date,
                month: month,
                today: today,
                classes: dayClasses,
                handleClick: this.handleClick }));
            current.add(1, 'days');
            if (current.day() === 0) {
                var weekKey = 'week' + week++;
                elements.push(_react2['default'].createElement(
                    _Week2['default'],
                    { key: weekKey },
                    days
                ));
                days = [];
            }
        }
        return _react2['default'].createElement(
            'table',
            { className: classes },
            _react2['default'].createElement(
                'thead',
                null,
                _react2['default'].createElement(
                    'tr',
                    { className: 'month-header' },
                    _react2['default'].createElement(
                        'th',
                        { className: 'previous', onClick: this.previous, style: actionStyle },
                        '«'
                    ),
                    _react2['default'].createElement(
                        'th',
                        { colSpan: '5' },
                        _react2['default'].createElement(
                            'span',
                            { className: 'month' },
                            month.format('MMMM')
                        ),
                        ' ',
                        _react2['default'].createElement(
                            'span',
                            { className: 'year' },
                            month.format('YYYY')
                        )
                    ),
                    _react2['default'].createElement(
                        'th',
                        { className: 'next', onClick: this.next, style: actionStyle },
                        '»'
                    )
                )
            ),
            _react2['default'].createElement(
                'thead',
                null,
                _react2['default'].createElement(
                    'tr',
                    { className: 'days-header' },
                    daysOfWeek
                )
            ),
            _react2['default'].createElement(
                'tbody',
                null,
                elements
            )
        );
    }
});
module.exports = exports['default'];