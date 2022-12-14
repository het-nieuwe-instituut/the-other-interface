import cronTasks from "./crons/cron-tasks";

export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("STRAPI_APP_KEYS"),
  },
  cron: {
    enabled: true,
    tasks: cronTasks,
  },
});
