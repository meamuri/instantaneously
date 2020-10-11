import React, {ChangeEvent} from 'react'
import { Instant } from '../Schema'

function InstantRow(props: Instant) {
    return <tr key={props.Unix}>
        <td>{props.ISOTime}</td>
        <td>{props.Unix}</td>
        <td>{props.Unix}</td>
    </tr>
}

type Props = {
    instants: Array<Instant>,
    onPlus: (e: ChangeEvent<HTMLInputElement>) => void,
}

export function Table(props: Props) {
    return (<table>
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
    </table>)
}
