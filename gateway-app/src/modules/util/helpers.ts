import { random } from 'lodash'

export function getRandom2ItemsFromArray<T>(arr: T[]) {
    if (!arr.length) {
        return []
    }

    if (arr.length === 1) {
        return arr
    }

    if (arr.length === 2) {
        return arr
    }

    const cp = [...arr]
    const rand1 = random(1, cp.length - 1)
    const random1 = cp.splice(rand1 - 1, rand1)[0]

    const rand2 = random(1, cp.length - 1)
    const random2 = cp.splice(rand2 - 1, rand2)[0]

    return [random1, random2]
}
