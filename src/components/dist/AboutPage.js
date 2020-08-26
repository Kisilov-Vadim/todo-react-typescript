"use strict";
exports.__esModule = true;
exports.AboutPage = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
exports.AboutPage = function () {
    var history = react_router_dom_1.useHistory();
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("h1", null, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438"),
        react_1["default"].createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, laboriosam! Dolor atque molestias impedit sequi modi laborum illum odio eum dicta quisquam totam ullam accusantium eligendi, quo praesentium tempore corrupti!"),
        react_1["default"].createElement("button", { className: "btn", onClick: function () { return history.push('/'); } }, "\u041E\u0431\u0440\u0430\u0442\u043D\u043E \u043A \u0441\u043F\u0438\u0441\u043A\u0443 \u0434\u0435\u043B")));
};
