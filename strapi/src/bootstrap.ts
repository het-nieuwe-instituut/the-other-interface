import '@strapi/strapi'

export default async () => {
    const publicRole = await strapi.query('plugin::users-permissions.role').findOne({ where: { type: 'public' } })

    if (publicRole) {
        const storyPermissionFind = await strapi.query('plugin::users-permissions.permission').findOne({
            where: { action: 'api::story.story.find', role: publicRole.id },
        })

        if (!storyPermissionFind) {
            await strapi.query('plugin::users-permissions.permission').create({
                data: { action: 'api::story.story.find', role: publicRole.id },
            })
        }

        const storyPermissionFindOne = await strapi.query('plugin::users-permissions.permission').findOne({
            where: { action: 'api::story.story.findOne', role: publicRole.id },
        })

        if (!storyPermissionFindOne) {
            await strapi.query('plugin::users-permissions.permission').create({
                data: { action: 'api::story.story.findOne', role: publicRole.id },
            })
        }

        const storyPermissionFindOneBySlug = await strapi.query('plugin::users-permissions.permission').findOne({
            where: {
                action: 'api::story.story.findOneBySlug',
                role: publicRole.id,
            },
        })

        if (!storyPermissionFindOneBySlug) {
            await strapi.query('plugin::users-permissions.permission').create({
                data: {
                    action: 'api::story.story.findOneBySlug',
                    role: publicRole.id,
                },
            })
        }
    } else {
        strapi.log.error(`Unable to update public permissions, public role not found`)
    }

    const userPermissionsPluginStore = strapi.store({
        environment: '',
        type: 'plugin',
        name: 'users-permissions',
    })
    const advancedUserPermissionsConfig = await userPermissionsPluginStore.get({
        key: 'advanced',
    })
    if (advancedUserPermissionsConfig && advancedUserPermissionsConfig.allow_register === true) {
        advancedUserPermissionsConfig.allow_register = false
        await userPermissionsPluginStore.set({
            key: 'advanced',
            value: advancedUserPermissionsConfig,
        })
    }
}
