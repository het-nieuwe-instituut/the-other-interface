export enum CustomErrorType {
    validation = 'validation',
    domain = 'domain',
    // if changed, make sure to update the typesToIgnore in rollbarInterceptor.ts
}

export class CustomError extends Error {
    private constructor(type: CustomErrorType, message: string) {
        // if updating this format, make sure to update the shouldReport in rollbarInterceptor.ts
        super(`[${type}]: ${message}`)
    }

    public static ValidationError(message: string) {
        return new CustomError(CustomErrorType.validation, message)
    }

    public static DomainError(message: string) {
        return new CustomError(CustomErrorType.domain, message)
    }
}
