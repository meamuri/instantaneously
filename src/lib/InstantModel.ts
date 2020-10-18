import { Granularity, Instant } from './Schema'
import { makeAutoObservable, action } from 'mobx'

interface Filter {
    count?: number,
    initial?: Date,
    granularity?: GranularityFilter,
}

export interface GranularityFilter {
    type: Granularity,
    value: number,
}

export class InstantModel {
    get instants(): Array<Instant> {
        let instant = this.instant

        let forRender: Array<Instant> = []
        for (let i = 0; i < this.count; i++) {
            let info: Instant = {
                ISOTime: instant?.toISOString(),
                LocalTime: instant?.toLocaleString(),
                Unix: instant.getTime(),
            }
            forRender.push(info)
            instant = new Date(info.Unix - this.divider)
        }
        return forRender
    }

    private _granularity: GranularityFilter
    get granularity(): GranularityFilter { return this._granularity }
    setGranularity(g: GranularityFilter) { this._granularity = g }

    private _count: number
    get count(): number { return this._count }
    setCount(newValue: number) { this._count = newValue }

    private _date: Date
    get date() { return this._date }
    setDate(newValue: Date) { this._date = newValue }

    get instant(): Date {
        let timestamp = this._date.getTime()
        return new Date( timestamp - (timestamp % this.divider))
    }

    private get divider(): number {
        return this.granularity.type * this.granularity.value
    }

    constructor({count = 15,
                    initial = new Date(),
                    granularity = { type : Granularity.HOURS, value: 1}
    }: Filter) {
        this._count = count
        this._date = initial
        this._granularity = granularity
        makeAutoObservable(this, {
            setDate: action,
            setCount: action,
            setGranularity: action,
        })
    }
}
