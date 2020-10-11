import { InstantModel } from './InstantModel'
import { InstantView } from './InstantView'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'

const InstantViewModel = observer(() => {
    let [model] = useState(() => new InstantModel())

    return InstantView({
        onPlus: (e) => {
            let newCount = e.target.value
            model.count = Number(newCount)
        },
        instants: model.instants,
    })
})

export default InstantViewModel
