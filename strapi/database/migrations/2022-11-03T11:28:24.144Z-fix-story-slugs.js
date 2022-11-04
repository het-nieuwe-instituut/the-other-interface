module.exports = {
  async up(knex) {
    await knex.raw(
      `
      -- update dutch story slugs with english
      UPDATE stories SET slug = en.slug
      FROM stories en
      INNER JOIN stories_localizations_links l ON l.story_id = en.id
      WHERE l.inv_story_id = stories.id
      AND stories.locale = 'nl'
      AND en.locale = 'en'
      AND en.slug != stories.slug;
      `
    );
  },
};
