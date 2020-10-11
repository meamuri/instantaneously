import { Granularity, Instant } from './Schema'
import { makeAutoObservable } from 'mobx'

interface Filter {
    count: number,
    initial?: Date,
    granularity: GranularityFilter,
}

interface GranularityFilter {
    type: Granularity,
    value: number,
}

export function instants({count = 15, initial = new Date(), granularity }: Filter) {
    let divider = granularity.type * granularity.value

    let timestamp = initial.getTime()
    let instant = new Date( timestamp - (timestamp % divider));

    let forRender: Array<Instant> = []
    for (let i = 0; i < count; i++) {
        let info: Instant = {
            ISOTime: instant?.toISOString(),
            LocalTime: instant?.toLocaleString(),
            Unix: instant.getTime(),
        }
        forRender.push(info)
        instant = new Date(info.Unix - divider)
    }
    return forRender
}

export class InstantModel {
    instants: Array<Instant>

    private _count: number
    private _date: Date

    get date() {
        return this._date
    }
    set date(newValue) {
        this._date = newValue
        this.reconfigureInstants()
    }

    get count() {
        return this._count
    }
    set count(newValue) {
        this._count = newValue
        this.reconfigureInstants()
    }

    constructor(count: number = 15) {
        this._count = count
        this._date = new Date()
        this.instants = []
        this.reconfigureInstants()
        makeAutoObservable(this)
    }

    private reconfigureInstants() {
        this.instants = instants({
            count: this._count,
            initial: this._date,
            granularity: {
                type: Granularity.HOURS,
                value: 1,
            },
        })
    }
}
