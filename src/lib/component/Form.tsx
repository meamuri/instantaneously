import React, { ChangeEvent, useState, useEffect } from 'react'
import DatePicker from 'react-date-picker'

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
    console.log(props.granularity)
    let [granularity, setGranularity] = useState(props.granularity)

    useEffect(() => {
        props.onGranularityChanged(granularity || "1h")
    }, [granularity])
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
                    let k: Date[] = []
                    console.log(e)
                    return props.onDateChange(k.concat(e)[0] || new Date())
                }} />

                <p>
                <label>Granularity: </label>
                    <label>
                    <input type="radio" onChange={e => setGranularity(e.currentTarget.value)} checked={granularity === "5m"} value="5m"/>
                    5 minutes
                    </label><label>
                    <input type="radio" onChange={e => setGranularity(e.currentTarget.value)} checked={granularity === "1h"} value="1h"/>
                    1 hour
                    </label><label>
                    <input type="radio" onChange={e => setGranularity(e.currentTarget.value)} checked={granularity === "24h"} value="24h"/>
                    24 hours
                    </label>
                </p>
            </fieldset>
        </form>
    )
}
