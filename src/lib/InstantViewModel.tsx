import { InstantModel } from './InstantModel'
import { InstantView } from './InstantView'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'

interface ViewModelProps {
    instantModel: InstantModel,
}

const InstantViewModel = observer(() => {
    let [model] = useState(() => new InstantModel())
    return InstantView({
        onPlus: () => {
            model.incCount()
        },
        instants: model.instants,
    })
})

export default InstantViewModel
