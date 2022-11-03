export default ({ strapi }) => {
    const extensionService = strapi.plugin('graphql').service('extension')
    const { transformArgs } = strapi.plugin('graphql').service('builders').utils
    const { toEntityResponse } = strapi.plugin('graphql').service('format').returnTypes
    const uid = 'api::story.story'

    //reference: https://github.com/alealmeida/backend/tree/b5c7e7c05906d5e4564b23781fb50045f25c28e7/src/custom/graphql
    extensionService.use(({ nexus }) => {
        const queries = nexus.extendType({
            type: 'Query',
            definition(t) {
                t.field('StoryPostBySlug', {
                    type: 'StoryEntityResponse',
                    args: { slug: nexus.stringArg() },

                    async resolve(parent, args, ctx) {
                        const transformedArgs = transformArgs(args, {
                            contentType: strapi.contentTypes[uid],
                            usePagination: false,
                        })

                        const nodes = await strapi.entityService.findMany(uid, {
                            filters: transformedArgs,
                        })

                        if (nodes.length > 0) {
                            return toEntityResponse(nodes[0], { transformArgs, uid })
                        } else {
                            throw new Error(ctx.koaContext.response.message)
                        }
                    },
                })
            },
        })
        const resolversConfig = {
            [`Query.StoryPostBySlug`]: {
                auth: { scope: [`api::story.story.findOneBySlug`] },
            },
        }
        return { types: [queries], resolversConfig }
    })
}
