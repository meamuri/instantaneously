import React, { ChangeEvent } from 'react'

type Props = { onPlus: ((e: ChangeEvent<HTMLInputElement>) => void) }

export default function Form(props: Props) {
    return (
        <form>
            <fieldset>
                <legend>Configure instantaneously(-fy)</legend>
                <p>
                    <input onChange={props.onPlus} type="range" min={5} max={30} />
                    <label>Количество</label>
                </p>
            </fieldset>
        </form>
    )
}
