import { EntityNames } from "src/generated/graphql";

export const galaxyTypesToPositions: Record<EntityNames,
{xFromCenter: number, yFromCenter: number}
> = {
    [EntityNames.Archives]: {
        xFromCenter: -300,
        yFromCenter: 0,
    },
    [EntityNames.Publications]: {
        xFromCenter: 250,
        yFromCenter: -150,
    },
    [EntityNames.Objects]: {
        xFromCenter: 175,
        yFromCenter: 175,
    },
    [EntityNames.People]: {
        xFromCenter: 350,
        yFromCenter: 120,
    },
    // Unsuded types, add values after we will have them
    [EntityNames.External]: {
        xFromCenter: 0,
        yFromCenter: 0,
    },
    [EntityNames.Media]: {
        xFromCenter: 0,
        yFromCenter: 0,
    },
    [EntityNames.Stories]: {
        xFromCenter: 0,
        yFromCenter: 0,
    }
}