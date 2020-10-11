import { InstantModel } from './InstantModel'
import { InstantView } from './InstantView'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'

const InstantViewModel = observer(() => {
    let [model] = useState(() => new InstantModel())

    return InstantView({
        onPlus: (e) => {
            console.log(JSON.stringify(e.target.value))
            model.incCount()
        },
        instants: model.instants,
    })
})

export default InstantViewModel
