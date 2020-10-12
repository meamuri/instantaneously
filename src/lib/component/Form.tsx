import React, { ChangeEvent } from 'react'
import DatePicker from 'react-date-picker'

type Props = {
    rangeSettings: {
        min: number, max: number, value: number,
    },
    onPlus: ((e: ChangeEvent<HTMLInputElement>) => void),
    onDateChange: ((e: Date) => void),
    date: Date,
}

export default function Form(props: Props) {
    return (
        <form>
            <fieldset>
                <legend>Configure instantaneously(-fy)</legend>
                <p>
                    <input onChange={props.onPlus} type="range" {...props.rangeSettings} />
                    <label>Количество</label>
                </p>

                <p>
                    <DatePicker value={props.date} onChange={(e) => {
                        let k: Date[] = []
                        return props.onDateChange(k.concat(e)[0])
                    }} />
                    <label>Количество</label>
                </p>
            </fieldset>
        </form>
    )
}
