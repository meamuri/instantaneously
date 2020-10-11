import { Granularity, Instant } from './Schema'
import { makeAutoObservable } from 'mobx'

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
    instants: Array<Instant>

    private _count: number

    get count() {
        return this._count
    }
    set count(newValue) {
        this._count = newValue
        this.instants = instants({
            count: this._count,
            granularity: {
                type: Granularity.HOURS,
                value: 1,
            },
        })
    }

    constructor(count: number = 30) {
        this._count = count
        this.instants = instants({
            count: this._count,
            granularity: {
                type: Granularity.HOURS,
                value: 1,
            },
        })
        makeAutoObservable(this)
    }
}
