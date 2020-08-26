"use strict";
exports.__esModule = true;
var react_1 = require("react");
var NavBar_1 = require("./components/NavBar");
var react_router_dom_1 = require("react-router-dom");
var TodosPage_1 = require("./components/TodosPage");
var AboutPage_1 = require("./components/AboutPage");
var App = function () {
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(NavBar_1.NavBar, null),
        react_1["default"].createElement("div", { className: "container" },
            react_1["default"].createElement(react_router_dom_1.Switch, null,
                react_1["default"].createElement(react_router_dom_1.Route, { component: TodosPage_1.TodosPage, path: "/", exact: true }),
                react_1["default"].createElement(react_router_dom_1.Route, { component: AboutPage_1.AboutPage, path: "/about" })))));
};
exports["default"] = App;
