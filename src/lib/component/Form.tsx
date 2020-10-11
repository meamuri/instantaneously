import React, { ChangeEvent } from 'react'

type Props = {
    rangeSettings: {
        min: number, max: number, value: number,
    },
    onPlus: ((e: ChangeEvent<HTMLInputElement>) => void),
    onDateChange: ((e: Date) => void),
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
                    <button onClick={() => props.onDateChange(new Date(2020, 8, 20))} >Down</button>
                    <label>Количество</label>
                </p>
            </fieldset>
        </form>
    )
}
