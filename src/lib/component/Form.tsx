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

                <DatePicker value={props.date} onChange={(e) => {
                    let k: Date[] = []
                    console.log(e)
                    return props.onDateChange(k.concat(e)[0] || new Date())
                }} />
                <label>Количество</label>
            </fieldset>
        </form>
    )
}
