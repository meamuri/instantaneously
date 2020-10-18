import { GranularityFilter, InstantModel } from './InstantModel'
import InstantView from './component'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { UIGranularity } from './component/schema'
import { Granularity } from './Schema'

const InstantViewModel = observer(() => {
    let [model] = useState(() => new InstantModel({}))
    let uiGranularity = granularityToUiGranularity(model.granularity)
    return InstantView({
        onPlus: (e) => {
            let newCount = e.target.value
            model.setCount(Number(newCount))
        },
        onDateChange: (e) => {
            model.setDate(e)
        },
        instants: model.instants,
        date: model.date,
        granularity: uiGranularity,
        onGranularityChanged: (g) => {
            const unit = g[g.length - 1]
            const time = Number(g.slice(0, g.length - 1))
            const granularity: GranularityFilter = {
                type: unit === "m" ? Granularity.MINUTES : Granularity.HOURS,
                value: time,
            }
            model.setGranularity(granularity)
        }
    })
})

function granularityToUiGranularity(g: GranularityFilter): UIGranularity | undefined {
    const unit = g.type === Granularity.HOURS ? "h" : "m"
    const count = String(g.value)
    const rawGranularity = count + unit
    switch (rawGranularity) {
        case "5m": return UIGranularity.MINUTES_5
        case "1h": return UIGranularity.HOURS_1
        case "24h": return UIGranularity.HOURS_24
        default: return undefined
    }
}

export default InstantViewModel
