export function getTriangleArea(triangle: [[number, number], [number, number], [number, number]]) {
    const [a, b, c] = triangle

    return 0.5 * ((b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1]))
}

export function calcRandomTrianglePoint(
    getRandomNumber: () => number,
    triangle: [[number, number], [number, number], [number, number]]
) {
    let wb = getRandomNumber()
    let wc = getRandomNumber()

    // point will be outside of the triangle, invert weights
    if (wb + wc > 1) {
        wb = 1 - wb
        wc = 1 - wc
    }

    const [a, b, c] = triangle.map(coords => ({ x: coords[0], y: coords[1] }))

    const rb_x = wb * (b.x - a.x)
    const rb_y = wb * (b.y - a.y)
    const rc_x = wc * (c.x - a.x)
    const rc_y = wc * (c.y - a.y)

    const r_x = rb_x + rc_x + a.x
    const r_y = rb_y + rc_y + a.y

    return [r_x, r_y]
}

export function generateTriangleDistribution(triangles: [[number, number], [number, number], [number, number]][]) {
    const totalArea = triangles.reduce((sum, triangle) => sum + getTriangleArea(triangle), 0)
    const cumulativeDistribution: number[] = []

    for (let i = 0; i < triangles.length; i++) {
        const lastValue = cumulativeDistribution[i - 1] || 0
        const nextValue = lastValue + getTriangleArea(triangles[i]) / totalArea
        cumulativeDistribution.push(nextValue)
    }
    // [area1, area1 + aera2, area1 + area2 + area3, ...]
    return cumulativeDistribution
}

export function selectRandomTriangle(
    getRandomNumber: () => number,
    triangles: [[number, number], [number, number], [number, number]][]
) {
    const cumulativeDistribution = generateTriangleDistribution(triangles)
    const rnd = getRandomNumber()
    const index = cumulativeDistribution.findIndex(v => v > rnd)

    return triangles[index]
}
