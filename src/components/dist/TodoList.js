"use strict";
exports.__esModule = true;
exports.TodoList = void 0;
var react_1 = require("react");
exports.TodoList = function (_a) {
    var todos = _a.todos, onToggle = _a.onToggle, onRemove = _a.onRemove;
    var removeHandler = function (e, id) {
        e.preventDefault();
        onRemove(id);
    };
    if (todos.length === 0) {
        return (react_1["default"].createElement("p", { className: "center" }, "\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u0435\u043B \u043F\u0443\u0441\u0442\u043E\u0439!"));
    }
    return (react_1["default"].createElement("ul", null, todos.map(function (todo) {
        var classes = ['todo'];
        if (todo.completed) {
            classes.push('completed');
        }
        return (react_1["default"].createElement("li", { className: classes.join(' '), key: todo.id },
            react_1["default"].createElement("label", null,
                react_1["default"].createElement("input", { type: "checkbox", checked: todo.completed, onChange: onToggle.bind(null, todo.id) }),
                react_1["default"].createElement("span", null, todo.title),
                react_1["default"].createElement("i", { className: "material-icons red-text", onClick: function (e) { return removeHandler(e, todo.id); } }, "delete"))));
    })));
};
