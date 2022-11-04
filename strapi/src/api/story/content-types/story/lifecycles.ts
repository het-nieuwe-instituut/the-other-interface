import slugify from 'slugify'

export default {
    async beforeCreate(event) {
        if (event.params.data.title) {
            event.params.data.slug = await getSlug(event)
        }
    },

    async beforeUpdate(event) {
      if (event.params.data.title) {
            event.params.data.slug = await getSlug(event)
        }
    },
}

async function getSlug(event) {
    const id = event.params.where?.id
    if (!id) {
        return getTitleSlug(event.params.data.title)
    }

	  const story = await strapi.query('api::story.story').findOne({ where: { id } })
    if (story.locale = 'en') {
        return getTitleSlug(story.title)
    }

    const englishStory = await strapi.query('api::story.story').findOne({
        where: {
            id: {
                $in: `(
                    SELECT en.id FROM stories en
                    INNER JOIN stories_localizations_links l ON l.story_id = en.id
                    WHERE link.inv_story_id = ${id}
                    AND en.locale = 'en'
                )`
            }
        }
    })

    if (!englishStory) {
        return getTitleSlug(story.title)
    }

    return getTitleSlug(englishStory.title)
}

function getTitleSlug(title) {
    return slugify(title, { lower: true, strict: true })
}
