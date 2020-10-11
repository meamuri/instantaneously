import React, { ChangeEvent } from 'react'
import { Instant } from '../Schema'
import './InstantView.css'
import { Table } from './Table'
import Form from './Form'

interface ViewProps {
    instants: Array<Instant>,
    onPlus: (e: ChangeEvent<HTMLInputElement>) => void,
}

export function InstantView(props: ViewProps) {
    return (
        <div className="row">
            <div className="column">
                {Table(props)}
            </div>
            <div className="column">
                {Form({ ...props })}
            </div>
    </div>)
}
