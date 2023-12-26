"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get("/get-todos", (req, res, next) => {
    res.status(200).json({ todos });
});
router.post("/add-todo", (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    todos.push(newTodo);
    res.json(newTodo);
});
router.put("/todo/:todoId", (req, res, next) => {
    const tid = req.params.todoId;
    const index = todos.findIndex((todo) => {
        return (todo.id = tid);
    });
    if (index >= 0) {
        todos[index] = Object.assign(Object.assign({}, todos[index]), { text: req.body.text });
        return res.status(200).json({ todos });
    }
    res.status(404).json({ msg: "Couldn't find todo" });
});
router.delete("/todo/:todoId", (req, res, next) => {
    const tid = req.params.todoId;
    todos = todos.filter((each) => each.id != tid);
    return res.json({ todos });
});
exports.default = router;
