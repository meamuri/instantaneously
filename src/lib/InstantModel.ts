import { Granularity, Instant } from './Schema'
import { makeAutoObservable } from 'mobx'

interface Filter {
    count?: number,
    initial?: Date,
    granularity?: GranularityFilter,
}

interface GranularityFilter {
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
    count: number
    private _date: Date

    get granularity(): GranularityFilter {
        return this._granularity
    }

    get instant(): Date {
        console.log(this._date.toISOString())
        let timestamp = this._date.getTime()
        return new Date( timestamp - (timestamp % this.divider))
    }

    get date() {
        return this._date
    }
    set date(newValue) {
        this._date = newValue
    }

    private get divider(): number {
        return this.granularity.type * this.granularity.value
    }

    constructor({count = 15,
                    initial = new Date(),
                    granularity = { type : Granularity.MINUTES, value: 60}
    }: Filter) {
        this.count = count
        this._date = initial
        this._granularity = granularity
        makeAutoObservable(this)
    }

}
