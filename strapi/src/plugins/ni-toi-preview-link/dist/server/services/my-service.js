"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@strapi/strapi");
exports.default = ({ strapi }) => ({
    getWelcomeMessage() {
        return 'Welcome to Strapi 🚀';
    },
    getConfig() {
        return {
            clientPreviewUrl: process.env.STRAPI_ADMIN_CLIENT_FRONTEND_PREVIEW_URL,
            clientPreviewSecret: process.env.STRAPI_ADMIN_CLIENT_PREVIEW_SECRET,
        };
    },
});
