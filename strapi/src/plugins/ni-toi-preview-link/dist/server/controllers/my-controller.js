"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@strapi/strapi");
exports.default = ({ strapi }) => ({
    config(ctx) {
        ctx.body = strapi.plugin('ni-toi-preview-link').service('myService').getConfig();
    },
});
