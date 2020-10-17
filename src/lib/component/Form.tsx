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
                    <label>Count: </label>
                    <input onChange={props.onPlus} type="range" {...props.rangeSettings} />
                </p>

                <p>
                <label>Date: </label>
                <DatePicker value={props.date} onChange={(e) => {
                    let k: Date[] = []
                    console.log(e)
                    return props.onDateChange(k.concat(e)[0] || new Date())
                }} />
                </p>

                <p>
                <label>Granularity: </label>
                <div>
                    <label>
                    <input type="radio" value={5}/>
                    5 minutes
                    </label><label>
                    <input type="radio" value={1}/>
                    1 hour
                    </label><label>
                    <input type="radio" value={24}/>
                    24 hours
                    </label>
                </div>
                </p>
            </fieldset>
        </form>
    )
}
