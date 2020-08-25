"use strict";
exports.__esModule = true;
exports.TodoForm = void 0;
var react_1 = require("react");
exports.TodoForm = function (_a) {
    var addTodo = _a.addTodo;
    var _b = react_1.useState(''), title = _b[0], setTitle = _b[1];
    // const ref = useRef<HTMLInputElement>(null);
    var changeHandler = function (e) {
        setTitle(e.target.value);
    };
    var keyPressHandler = function (e) {
        if (e.key === "Enter") {
            addTodo(title);
            setTitle('');
        }
    };
    return (react_1["default"].createElement("div", { className: "input-field mt2" },
        react_1["default"].createElement("input", { type: "text", id: "title", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0434\u0435\u043B\u0430", value: title, 
            // ref={ref}
            onChange: changeHandler, onKeyPress: keyPressHandler }),
        react_1["default"].createElement("label", { htmlFor: "title", className: "active" }, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0434\u0435\u043B\u0430")));
};
