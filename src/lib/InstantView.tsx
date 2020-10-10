
import React from 'react'
import { Instant } from './Schema'

interface ViewProps {
    instants: Array<Instant>
}

function InstantRow(props: Instant) {
    return <tr>
        <td>{props.ISOTime}</td>
        <td>{props.Unix}</td>
        <td>{props.Unix}</td>
    </tr>
}

export function InstantView(props: ViewProps) {
    return <table>
        <tr>
            <th>ISOTime</th>
            <th>Your TimeZone</th>
            <th>Unix</th>
        </tr>
        {props.instants.map(e => InstantRow(e))}
    </table>
}
