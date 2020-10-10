import React from 'react'
import { InstantModel } from './InstantModel'
import { InstantView } from './InstantView'

interface ViewModelProps {
    instantModel: InstantModel,
}

export default function InstantViewModel(props: ViewModelProps) {
    return <InstantView instants={props.instantModel.instants} />
}
