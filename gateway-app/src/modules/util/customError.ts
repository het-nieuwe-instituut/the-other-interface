export enum CustomErrorType {
    internal = 'internal',
    internalCritical = 'internalCritical',
    external = 'external',
    externalCritical = 'externalCritical',
    // if changed, make sure to update the typesToIgnore in rollbarInterceptor.ts
}

export class CustomError extends Error {
    private constructor(type: CustomErrorType, message: string) {
        // if updating this format, make sure to update the shouldReport in rollbarInterceptor.ts
        super(`[${type}]: ${message}`)
    }

    public static internal(message: string) {
        return new CustomError(CustomErrorType.internal, message)
    }

    public static internalCritical(message: string) {
        return new CustomError(CustomErrorType.internalCritical, message)
    }

    public static external(message: string) {
        return new CustomError(CustomErrorType.external, message)
    }

    public static externalCritical(message: string) {
        return new CustomError(CustomErrorType.externalCritical, message)
    }
}
