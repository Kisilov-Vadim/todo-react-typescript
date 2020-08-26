"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.TodosPage = void 0;
var react_1 = require("react");
var TodoForm_1 = require("./TodoForm");
var TodoList_1 = require("./TodoList");
exports.TodosPage = function () {
    var _a = react_1.useState([]), todos = _a[0], setTodos = _a[1];
    react_1.useEffect(function () {
        var saved = JSON.parse(localStorage.getItem('todos') || '[]');
        setTodos(saved);
    }, []);
    react_1.useEffect(function () {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    var addTodo = function (todo) {
        var newTodo = {
            title: todo,
            id: Date.now(),
            completed: false
        };
        setTodos(function (prev) { return __spreadArrays([newTodo], prev); });
    };
    var toggleHandler = function (id) {
        var newTodos = todos.map(function (todo) {
            if (todo.id === id) {
                console.log(todo.completed);
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodos(newTodos);
    };
    var removeHandler = function (id) {
        var shouldRemove = confirm('Вы уверены, что хотите удалить элемент?');
        if (shouldRemove) {
            setTodos(function (prev) { return prev.filter(function (todo) { return todo.id !== id; }); });
        }
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(TodoForm_1.TodoForm, { addTodo: addTodo }),
        react_1["default"].createElement(TodoList_1.TodoList, { todos: todos, onToggle: toggleHandler, onRemove: removeHandler })));
};
