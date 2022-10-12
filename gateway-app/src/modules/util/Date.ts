import { Scalar, CustomScalar } from '@nestjs/graphql'
import { Kind, ValueNode } from 'graphql'
import { isString } from 'lodash'

@Scalar('Date', () => Date)
export class DateScalar implements CustomScalar<Date, unknown> {
    public description = 'Date scalar'

    // value from the client
    public parseValue(val: unknown): unknown {
        return val
    }

    // value sent to the client
    public serialize(val: unknown): Date {
        if (!isString(val)) {
            throw new Error(`${val} is not a valid date input`)
        }

        return this.parseDateString(val)
    }

    public parseLiteral(val: ValueNode): Date {
        if (val.kind === Kind.INT) {
            return new Date(val.value)
        }

        if (val.kind === Kind.STRING) {
            return this.parseDateString(val.value)
        }

        throw new Error(`${val} is not a valid date input`)
    }

    private parseDateString(val: string) {
        const date = Date.parse(val)
        if (isNaN(date)) {
            throw new Error(`${val} is not a valid date input`)
        }

        return new Date(date)
    }
}
