import { Granularity, Instant } from './Schema'

interface Filter {
    count?: number,
    initial?: Date,
    granularity: GranularityFilter,
}

interface GranularityFilter {
    type: Granularity,
    value: number,
}

export function instants({count = 30, initial = new Date(), granularity }: Filter) {
    let instant = initial;
    let forRender: Array<Instant> = []
    for (let i = 0; i < count; i++) {
        let info: Instant = {
            ISOTime: instant?.toISOString(),
            LocalTime: instant?.toLocaleString(),
            Unix: instant.getTime(),
        }
        forRender.push(info)
        instant = new Date(info.Unix - granularity.value * granularity.type)
    }
    return forRender
}

export class InstantModel {
    instants: Array<Instant> = instants({
        granularity: {
            type: Granularity.HOURS,
            value: 1,
        },
    })
}
