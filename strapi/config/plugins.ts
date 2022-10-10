export default ({ env }) => {
    // Only enable S3 storage on live environments (staging/acceptance/production)
    if (env("NODE_ENV") === "production") {
        return {
            upload: {
              config: {
                provider: "aws-s3",
                providerOptions: {
                  accessKeyId: env("STRAPI_AWS_ACCESS_KEY_ID"),
                  secretAccessKey: env("STRAPI_AWS_ACCESS_SECRET"),
                  region: env("STRAPI_AWS_REGION"),
                  params: {
                    Bucket: env("STRAPI_AWS_BUCKET"),
                  },
                },
                actionOptions: {
                  upload: {},
                  uploadStream: {},
                  delete: {},
                },
              },
            },
          };
    }

    return {}
};
