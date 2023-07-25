"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        method: 'GET',
        path: '/',
        handler: 'myController.index',
        config: {
            policies: [],
        },
    },
    {
        method: 'GET',
        path: '/preview-config',
        handler: 'myController.config',
        config: {
            policies: [],
        },
    },
];
