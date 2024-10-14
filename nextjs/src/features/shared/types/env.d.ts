declare namespace NodeJS {
  export interface ProcessEnv {
    parsed: {
      NEXT_PUBLIC_GRAPHQL_ENDPOINT: string
      NEXT_PUBLIC_REACT_APP_IMAGE_BASE_URL: string
      NEXT_PUBLIC_URL: string
      NEXT_PUBLIC_DOMAIN_NAME: string
      NEXT_PUBLIC_GA_MEASUREMENT_ID: string
      NEXT_PUBLIC_ENV: string
      NEXT_PUBLIC_HOST: string
      NEXT_DARKVISITORS_TOKEN: string
      STRAPI_PREVIEW_SECRET: string
    }
  }
}
