import React, { ChangeEvent } from 'react'

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
                    <button onClick={(e) => {
                        e.preventDefault()
                        let changedTimestamp = props.date.getTime() - 86400 * 1000
                        return props.onDateChange(new Date(changedTimestamp))
                    }} >Down</button>
                    <label>Количество</label>
                </p>
            </fieldset>
        </form>
    )
}
