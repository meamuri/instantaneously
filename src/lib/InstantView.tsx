import React, { ChangeEvent } from 'react'
import { Instant } from './Schema'

interface ViewProps {
    instants: Array<Instant>,
    onPlus: (e: ChangeEvent<HTMLInputElement>) => void,
}

function InstantRow(props: Instant) {
    return <tr key={props.Unix}>
        <td>{props.ISOTime}</td>
        <td>{props.Unix}</td>
        <td>{props.Unix}</td>
    </tr>
}

export function InstantView(props: ViewProps) {
    return <>
    <table>
        <thead>
        <tr>
            <th>ISOTime</th>
            <th>Your TimeZone</th>
            <th>Unix</th>
        </tr>
        </thead>
        <tbody>
            {props.instants.map(e => InstantRow(e))}
        </tbody>
    </table>
    <form>
        <fieldset>
            <legend>Configure instantaneously(-fy)</legend>
            <p>
                <input onChange={props.onPlus} type="range" />
                <label>Количество</label>
            </p>
        </fieldset>
    </form>
    </>
}
