import React, { ChangeEvent } from 'react'
import { Instant } from '../Schema'
import './InstantView.css'
import { Table } from './Table'
import Form from './Form'
import { Footer } from './Footer'
import { UIGranularity } from './schema'

interface ViewProps {
    instants: Array<Instant>,
    onPlus: (e: ChangeEvent<HTMLInputElement>) => void,
    onDateChange: (e: Date) => void,
    date: Date,
    granularity?: UIGranularity,
    onGranularityChanged: (e: string) => void,
}

export function InstantView(props: ViewProps) {
    let rangeSettings = {
        min: 5, max: 30, value: props.instants.length,
    }
    return (
        <div className="row">
            <div className="column-6">
                {Table(props)}
            </div>
            <div className="column-4">
                {Form({ ...props, rangeSettings })}
                <Footer />
            </div>
    </div>)
}
