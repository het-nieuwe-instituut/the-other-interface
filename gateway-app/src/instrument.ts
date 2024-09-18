import { init } from '@sentry/nestjs'

// TODO: replace with actual Sentry DSN
init({
  dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0',
})
