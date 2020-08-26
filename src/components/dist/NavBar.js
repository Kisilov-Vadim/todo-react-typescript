"use strict";
exports.__esModule = true;
exports.NavBar = void 0;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
exports.NavBar = function () { return (React.createElement("nav", null,
    React.createElement("div", { className: "nav-wrapper purple darken-2 px1" },
        React.createElement("a", { href: "/", className: "brand-logo" }, "React + Typescript"),
        React.createElement("ul", { id: "nav-mobile", className: "right hide-on-med-and-down" },
            React.createElement("li", null,
                React.createElement(react_router_dom_1.NavLink, { to: "/" }, "\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u0435\u043B")),
            React.createElement("li", null,
                React.createElement(react_router_dom_1.NavLink, { to: "/about" }, "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")))))); };
