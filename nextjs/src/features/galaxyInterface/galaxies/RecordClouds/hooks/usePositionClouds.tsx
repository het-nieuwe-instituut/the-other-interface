import { typeColors } from '@/features/shared/styles/theme/foundations/colors'
import * as d3 from 'd3'
import { useMemo } from 'react'
import { EntityNames, ObjectRelationsQuery } from 'src/generated/graphql'
import { SVG_DIMENSIONS } from '../RecordClouds'

const configuration: Record<EntityNames, Config> = {
    [EntityNames.External]: {
        background: '',
        x: 0,
        y: 0,
        diameter: 0,
        internalDiameter: 0,
        spaceBetweenChilds: 0,
        children: [],
    },
    [EntityNames.Media]: {
        background: '',
        x: 0,
        y: 0,
        diameter: 0,
        internalDiameter: 0,
        spaceBetweenChilds: 0,
        children: [],
    },
    [EntityNames.Getty]: {
        background: '',
        x: 0,
        y: 0,
        diameter: 0,
        internalDiameter: 0,
        spaceBetweenChilds: 0,
        children: [],
    },
    [EntityNames.Rkd]: {
        background: '',
        x: 0,
        y: 0,
        diameter: 0,
        internalDiameter: 0,
        spaceBetweenChilds: 0,
        children: [],
    },

    [EntityNames.Wikidata]: {
        background: '',
        x: 0,
        y: 0,
        diameter: 0,
        internalDiameter: 0,
        spaceBetweenChilds: 0,
        children: [],
    },
    [EntityNames.Archives]: {
        background: typeColors.archives.hover1,
        x: 1008,
        y: 50,
        diameter: 128,
        internalDiameter: 256,
        spaceBetweenChilds: 20,
        children: [
            { position: 0.5, diameter: 192 },
            { position: 0.6, diameter: 192 },
        ],
    },
    [EntityNames.Objects]: {
        background: typeColors.objects.hover1,
        x: 54,
        y: 517,
        diameter: 128,
        internalDiameter: 256,
        spaceBetweenChilds: 40,
        children: [
            { position: 0.5, diameter: 192 },
            { position: 0.6, diameter: 192 },
        ],
    },
    [EntityNames.People]: {
        background: typeColors.people.hover1,
        x: 993,
        y: 585,
        diameter: 214,
        internalDiameter: 260,
        spaceBetweenChilds: 35,
        children: [
            { position: 0.5, diameter: 192 },
            { position: 0.6, diameter: 192 },
        ],
    },
    [EntityNames.Publications]: {
        background: typeColors.publications.hover1,
        x: -4.5,
        y: -12.87,
        diameter: 384,
        internalDiameter: 384,
        spaceBetweenChilds: 30,
        children: [
            { position: 0.5, diameter: 192 },
            { position: 0.6, diameter: 192 },
        ],
    },
    [EntityNames.Stories]: {
        background: typeColors.archives.default,
        x: 1121,
        y: 240,
        diameter: 128,
        internalDiameter: 256,
        spaceBetweenChilds: 20,
        children: [
            { position: 0.5, diameter: 192 },
            { position: 0.6, diameter: 192 },
        ],
    },
}

interface Config {
    background: string
    x: number
    y: number
    diameter: number
    internalDiameter: number
    spaceBetweenChilds: number
    children: {
        position: number
        diameter: number
    }[]
}

export interface ParentRelation {
    label: string
    type: EntityNames
    x: number
    y: number
    showing: number
    total: number
    background: string
    diameter: number
    children: Relation[]
}
interface Relation {
    id: string
    label: string
    type: EntityNames
    diameter: number
    x: number
    y: number
}

interface ConfiguredRelation {
    label: EntityNames
    type: EntityNames
    x: number
    y: number
    diameter: number
    background: string
    showing: number
    total: number
    children: ConfiguredRelationChild[]
}

interface ConfiguredRelationChild {
    id: string
    label: string
    slug?: string | null
    type: EntityNames
    diameter: number
    x: number
    y: number
}

export function usePositionClouds(relations: ObjectRelationsQuery['relations']) {
    const relationsPositionData: ParentRelation[] = useMemo(() => {
        const configuredRelations: ConfiguredRelation[] = []
        relations?.forEach(relation => {
            const config = configuration[relation.type]
            if (!config) {
                return
            }

            const children: ConfiguredRelationChild[] = []
            relation.randomRelations?.forEach((randomRelation, index, array) => {
                if (index > config.children.length - 1 || !config.children[index]) {
                    return
                }

                const childConfig = config.children[index]
                const parentX = config.x + config.diameter / 2
                const parentY = config.y + config.diameter / 2
                const centerX = (SVG_DIMENSIONS.width ?? 0) / 2
                const centerY = (SVG_DIMENSIONS.height ?? 0) / 2
                const childCenterPositionX = parentX
                const childCenterPositionY = parentY

                const radius = config.internalDiameter / 2
                const { x, y } = XandYToCenterBasedByDiameter({
                    radius,
                    childCenterPositionX,
                    childCenterPositionY,
                    centerX,
                    centerY,
                    extraAngle:
                        array.length === 1 ? 0 : index % 2 ? -config.spaceBetweenChilds : config.spaceBetweenChilds,
                })

                // debugMode({ svgRef, childCenterPositionX, childCenterPositionY, centerX, centerY, x, y })
                children.push({
                    id: randomRelation.id,
                    label: randomRelation.label,
                    type: randomRelation.type,
                    slug: randomRelation.slug,
                    diameter: childConfig.diameter,
                    x: x - childConfig.diameter / 2,
                    y: y - childConfig.diameter / 2,
                })
            })

            configuredRelations.push({
                label: relation.type,
                type: relation.type,
                x: config.x,
                y: config.y,
                diameter: config.diameter,
                background: config.background,
                showing: relation.randomRelations?.length ?? 0,
                total: relation.total,
                children,
            })
        })

        return configuredRelations
    }, [relations])

    return { relationsPositionData }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
function debugMode({ svgRef, childCenterPositionX, childCenterPositionY, centerX, centerY, x, y }: any) {
    const svg = d3.select(svgRef.current)
    svg.append('line')
        .style('stroke', 'lightgreen')
        .style('stroke-width', 10)
        .attr('x1', childCenterPositionX)
        .attr('y1', childCenterPositionY)
        .attr('x2', centerX)
        .attr('y2', centerY)

    svg.append('line')
        .style('stroke', 'red')
        .style('stroke-width', 10)
        .attr('x1', x)
        .attr('y1', y)
        .attr('x2', centerX)
        .attr('y2', centerY)
}

interface XandYToCenterBasedByDiameterOptions {
    radius: number
    childCenterPositionX: number
    childCenterPositionY: number
    centerX: number
    centerY: number
    extraAngle: number
}

function XandYToCenterBasedByDiameter({
    radius,
    childCenterPositionX,
    childCenterPositionY,
    centerX,
    centerY,
    extraAngle,
}: XandYToCenterBasedByDiameterOptions) {
    let angle =
        angleBetweenPoints({ x: childCenterPositionX, y: childCenterPositionY }, { x: centerX, y: centerY }) +
        extraAngle
    const d = Math.PI / 180 //to convert deg to rads
    let deg = 0,
        x = 0,
        y = 0

    if (angle < 0) {
        angle = 360 - -angle
    }

    if (angle > 360) {
        angle = angle - 360
    }

    if (0 <= angle && angle <= 45) {
        deg = angle * d
        x = childCenterPositionX + radius * Math.cos(deg)
        y = childCenterPositionY + radius * Math.sin(deg)
    } else if (45 < angle && angle <= 90) {
        deg = (360 - angle) * d
        x = childCenterPositionX + radius * Math.cos(deg)
        y = childCenterPositionY + -radius * Math.sin(deg)
    } else if (90 < angle && angle <= 135) {
        deg = (180 - angle) * d
        x = childCenterPositionX + -radius * Math.cos(deg)
        y = childCenterPositionY + radius * Math.sin(deg)
    } else if (135 < angle && angle <= 180) {
        deg = (180 - angle) * d
        x = childCenterPositionX + -radius * Math.cos(deg)
        y = childCenterPositionY - -radius * Math.sin(deg)
    } else if (180 < angle && angle <= 225) {
        deg = (180 - angle) * d
        x = childCenterPositionX + -radius * Math.cos(deg)
        y = childCenterPositionY - -radius * Math.sin(deg)
    } else if (225 < angle && angle <= 270) {
        deg = (180 - angle) * d
        x = childCenterPositionX + -radius * Math.cos(deg)
        y = childCenterPositionY - -radius * Math.sin(deg)
    } else if (270 < angle && angle <= 315) {
        deg = (180 - angle) * d
        x = childCenterPositionX + -radius * Math.cos(deg)
        y = childCenterPositionY - -radius * Math.sin(deg)
    } else if (315 < angle && angle <= 360) {
        deg = (360 - angle) * d
        x = childCenterPositionX + radius * Math.cos(deg)
        y = childCenterPositionY - radius * Math.sin(deg)
    }

    return { x, y }
}

function angleBetweenPoints(anchor: { x: number; y: number }, point: { x: number; y: number }) {
    return (Math.atan2(anchor.y - point.y, anchor.x - point.x) * 180) / Math.PI + 180
}
