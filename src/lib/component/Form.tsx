import React, {ChangeEvent,} from 'react'
import DatePicker from 'react-date-picker'
import { UIGranularity, toLabel } from './schema'

type Props = {
    rangeSettings: {
        min: number, max: number, value: number,
    },
    onPlus: ((e: ChangeEvent<HTMLInputElement>) => void),
    onDateChange: ((e: Date) => void),
    date: Date,
    granularity?: string,
    onGranularityChanged: (e: string) => void,
}

export default function Form(props: Props) {
    const { granularity } = props
    const radios = [UIGranularity.MINUTES_5, UIGranularity.HOURS_1, UIGranularity.HOURS_24].map(g =>
        <label key={g}>
            <input type="radio"
                   onChange={e => props.onGranularityChanged(e.currentTarget.value)}
                   checked={granularity === g}
                   value={g}/>
            {toLabel(g)}
        </label>
    )

    return (
        <form>
            <fieldset>
                <legend>Configure instantaneously(-fy)</legend>
                <p>
                    <label>Count: </label>
                    <input onChange={props.onPlus} type="range" {...props.rangeSettings} />
                </p>

                <label>Date: </label>
                <DatePicker value={props.date} onChange={(e) => {
                    const k: Date[] = []
                    const d = k.concat(e)[0] || new Date()
                    return props.onDateChange(d)
                }} />

                <p>
                    <label>Granularity: </label>
                    {radios}
                </p>
            </fieldset>
        </form>
    )
}
