import { errors } from '@strapi/utils'

export function handleError(err: unknown) {
  const ctx = strapi.requestContext.get()
  if (err instanceof errors.ApplicationError) {
    ctx.throw(400, err)
  }

  ctx.throw(500, err)
}
